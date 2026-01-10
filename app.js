/*
  NECS 2026 Main JavaScript
  Small + clean on purpose (no frameworks)
*/

(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // ====== NAVIGATION (5 screens) ======
  const navItems = $$(".nav-item");
  const screens = {
    live: $("#screen-live"),
    players: $("#screen-players"),
    replays: $("#screen-replays"),
    brackets: $("#screen-brackets"),
    chat: $("#screen-chat"),
  };

  let activeScreen = "live";

  function setActiveScreen(name) {
    activeScreen = name;

    navItems.forEach((i) => i.classList.toggle("active", i.dataset.screen === name));
    Object.entries(screens).forEach(([key, el]) => {
      if (!el) return;
      el.classList.toggle("active", key === name);
    });

    // Chat “ambient” should only run when on chat screen
    if (name === "chat") startAmbientChat();
    else stopAmbientChat();
  }

  navItems.forEach((item) => {
    item.addEventListener("click", () => setActiveScreen(item.dataset.screen));
  });

  // ====== NOTIFICATIONS PANEL ======
  const notifBtn = $("#notifBtn");
  const notifPanel = $("#notifPanel");

  function toggleNotif(open) {
    if (!notifPanel) return;
    const shouldOpen =
      typeof open === "boolean" ? open : !notifPanel.classList.contains("open");
    notifPanel.classList.toggle("open", shouldOpen);
  }

  notifBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleNotif();
  });

  document.addEventListener("click", (e) => {
    if (!notifPanel) return;
    const clickedInside = notifPanel.contains(e.target) || notifBtn.contains(e.target);
    if (!clickedInside) toggleNotif(false);
  });

  // ====== TOAST ======
  const toast = $("#toast");
  let toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1600);
  }

  // ====== WATCH LIVE BUTTON ======
  const watchLive = $("#watchLive");
  watchLive?.addEventListener("click", () => {
    showToast("Opening stream…");
  });

  // ====== GAME CARDS: jump to matches + quick filter ======
  const gameCards = $$(".game-card");
  const matchCards = $$(".match-card");
  const liveScreen = $("#screen-live");

  function filterMatchesByGame(gameName) {
    const g = (gameName || "").toLowerCase();
    matchCards.forEach((card) => {
      const cardGame = (card.dataset.game || "").toLowerCase();
      const show =
        g.includes("valorant")
          ? cardGame === "valorant"
          : g.includes("rocket")
          ? cardGame === "rocket"
          : g.includes("smash")
          ? cardGame === "smash"
          : true;

      card.style.display = show ? "" : "none";
    });

    if (liveScreen) liveScreen.scrollTop = 240;
    showToast(`${gameName} selected`);
  }

  gameCards.forEach((card) => {
    card.addEventListener("click", () => {
      const game = card.dataset.game || "";
      setActiveScreen("live");
      filterMatchesByGame(game);
    });
  });

  matchCards.forEach((card) => {
    card.addEventListener("click", () => {
      const game = card.dataset.game || "match";
      showToast(`Viewing ${game} match details…`);
    });
  });

  // ====== PLAYER SEARCH ======
  const playerSearch = $("#playerSearch");
  const playerCards = $$(".player-card");

  function normalize(s) {
    return (s || "").toLowerCase().trim();
  }

  playerSearch?.addEventListener("input", () => {
    const q = normalize(playerSearch.value);

    playerCards.forEach((card) => {
      const name = normalize(card.dataset.name);
      const game = normalize(card.dataset.game);
      const show = !q || name.includes(q) || game.includes(q);
      card.style.display = show ? "" : "none";
    });
  });

  // ====== PLAYER MODAL (tap player -> full stats) ======
  const modalBackdrop = $("#playerModalBackdrop");
  const modalClose = $("#playerModalClose");
  const modalAvatar = $("#playerModalAvatar");
  const modalTitle = $("#playerModalTitle");
  const modalSub = $("#playerModalSub");
  const modalGrid = $("#playerModalGrid");

  const PLAYER_DB = {
    // VALORANT
    TenZed: {
      team: "Sovereign",
      event: "Valorant",
      role: "Duelist",
      stats: {
        "K/D": "1.34",
        "ACS": "262",
        "ADR": "158",
        "HS%": "29%",
        "KAST": "74%",
        "First K/R": "0.18",
      },
      note: "Aggressive opener. Strong entry timing.",
    },
    HexNova: {
      team: "NightShift",
      event: "Valorant",
      role: "Initiator",
      stats: {
        "K/D": "1.22",
        "ACS": "248",
        "ADR": "146",
        "HS%": "24%",
        "KAST": "76%",
        "Clutch%": "19%",
      },
      note: "Utility setups are consistent. Plays for trades.",
    },
    VantaRush: {
      team: "CopperCores",
      event: "Valorant",
      role: "Controller",
      stats: {
        "K/D": "1.18",
        "ACS": "232",
        "ADR": "139",
        "HS%": "27%",
        "KAST": "78%",
        "Assist/R": "0.34",
      },
      note: "Smokes + tempo control. Great mid-round calls.",
    },
    OrbitSage: {
      team: "ArcUnit",
      event: "Valorant",
      role: "Sentinel",
      stats: {
        "K/D": "1.31",
        "ACS": "241",
        "ADR": "146",
        "HS%": "26%",
        "KAST": "80%",
        "Multi-kill": "1.6",
      },
      note: "Anchor specialist. Holds sites under pressure.",
    },
    NeonQuill: {
      team: "Piston5",
      event: "Valorant",
      role: "Flex",
      stats: {
        "K/D": "1.05",
        "ACS": "214",
        "ADR": "132",
        "HS%": "22%",
        "KAST": "71%",
        "First K/R": "0.16",
      },
      note: "Plays pace swings. Strong lurk timings.",
    },

    // ROCKET LEAGUE
    JstnLite: {
      team: "Skyline",
      event: "Rocket League",
      role: "Striker",
      stats: {
        "Goals/Game": "3.2",
        "Assists/Game": "1.4",
        "Saves/Game": "2.1",
        "Shots/Game": "4.7",
        "Demos/Game": "1.0",
        "Win%": "69%",
      },
      note: "Fast reads. Punishes soft clears instantly.",
    },
    PixelPhantom: {
      team: "Skyline",
      event: "Rocket League",
      role: "Third Man",
      stats: {
        "Goals/Game": "1.3",
        "Assists/Game": "1.1",
        "Saves/Game": "2.4",
        "Shots/Game": "3.3",
        "Demos/Game": "0.7",
        "Win%": "64%",
      },
      note: "Stable defense with quick counter transitions.",
    },
    BoostBandit: {
      team: "Afterburn",
      event: "Rocket League",
      role: "Playmaker",
      stats: {
        "Goals/Game": "1.1",
        "Assists/Game": "1.6",
        "Saves/Game": "1.5",
        "Shots/Game": "3.1",
        "Demos/Game": "1.3",
        "Win%": "61%",
      },
      note: "Pass-first style. Creates space with bumps.",
    },
    AeroMint: {
      team: "Vortex",
      event: "Rocket League",
      role: "All-round",
      stats: {
        "Goals/Game": "0.9",
        "Assists/Game": "1.2",
        "Saves/Game": "1.8",
        "Shots/Game": "3.9",
        "Demos/Game": "0.9",
        "Win%": "58%",
      },
      note: "Strong rotations. Reads rebounds well.",
    },
    GoalGolem: {
      team: "StoneGate",
      event: "Rocket League",
      role: "Demo/Control",
      stats: {
        "Goals/Game": "0.8",
        "Assists/Game": "0.9",
        "Saves/Game": "2.2",
        "Shots/Game": "2.6",
        "Demos/Game": "1.8",
        "Win%": "55%",
      },
      note: "Controls boost and disrupts rotations.",
    },
    TiltProof: {
      team: "CleanRotations",
      event: "Rocket League",
      role: "Goalie",
      stats: {
        "Goals/Game": "0.6",
        "Assists/Game": "0.8",
        "Saves/Game": "3.0",
        "Shots/Game": "2.2",
        "Demos/Game": "0.5",
        "Win%": "57%",
      },
      note: "Clutch saves. Keeps matches close late-game.",
    },

    // SMASH
    LeoPrime: {
      team: "BracketFox",
      event: "Super Smash Bros",
      role: "Main: Joker",
      stats: {
        "Win%": "92%",
        "Top 8": "5",
        "Avg Place": "2.1",
        "KOs/Game": "3.6",
        "0-to-Death": "1",
        "Set Streak": "8",
      },
      note: "Strong neutral. Converts off one opening.",
    },
    FrameTrick: {
      team: "BracketFox",
      event: "Super Smash Bros",
      role: "Main: Fox",
      stats: {
        "Win%": "88%",
        "Top 8": "6",
        "Avg Place": "4.0",
        "KOs/Game": "3.2",
        "0-to-Death": "2",
        "Set Streak": "5",
      },
      note: "Explosive punish game. Great ledge traps.",
    },
    EdgeGuard: {
      team: "StockCheck",
      event: "Super Smash Bros",
      role: "Main: Lucina",
      stats: {
        "Win%": "84%",
        "Top 8": "4",
        "Avg Place": "5.1",
        "KOs/Game": "3.1",
        "0-to-Death": "0",
        "Set Streak": "4",
      },
      note: "Edge-guard heavy. Controls stage well.",
    },
    DIWizard: {
      team: "AirControl",
      event: "Super Smash Bros",
      role: "Main: Sheik",
      stats: {
        "Win%": "79%",
        "Top 8": "3",
        "Avg Place": "5.2",
        "KOs/Game": "2.9",
        "0-to-Death": "0",
        "Set Streak": "3",
      },
      note: "Tech-chase monster. Movement is clean.",
    },
    StockSniper: {
      team: "LastHit",
      event: "Super Smash Bros",
      role: "Main: Wolf",
      stats: {
        "Win%": "81%",
        "Top 8": "2",
        "Avg Place": "6.0",
        "KOs/Game": "3.0",
        "0-to-Death": "2",
        "Set Streak": "4",
      },
      note: "Kills early with reads. Strong corner pressure.",
    },
  };

  function openPlayerModal(tag) {
    if (!modalBackdrop) return;
    const data = PLAYER_DB[tag];
    if (!data) {
      showToast("Stats coming soon for this player");
      return;
    }

    modalAvatar.textContent = (tag || "?").charAt(0).toUpperCase();
    modalTitle.textContent = tag;
    modalSub.textContent = `${data.team} • ${data.event} • ${data.role}`;

    // Build stats grid
    modalGrid.innerHTML = "";
    Object.entries(data.stats).forEach(([k, v]) => {
      const div = document.createElement("div");
      div.className = "modal-stat";
      div.innerHTML = `<div class="k">${k}</div><div class="v">${v}</div>`;
      modalGrid.appendChild(div);
    });

    const noteEl = $("#playerModalNote");
    if (noteEl) noteEl.textContent = data.note || "Stats loaded.";

    modalBackdrop.classList.add("open");
    modalBackdrop.setAttribute("aria-hidden", "false");
  }

  function closePlayerModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove("open");
    modalBackdrop.setAttribute("aria-hidden", "true");
  }

  modalClose?.addEventListener("click", closePlayerModal);
  modalBackdrop?.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closePlayerModal();
  });

  // hook all player cards
  playerCards.forEach((card) => {
    card.addEventListener("click", () => {
      const tag = card.dataset.name || "";
      openPlayerModal(tag);
    });
  });

  // ====== MUSIC (local mp3 files in /music) ======
  const musicBtn = $("#musicBtn");
  const bgAudio = $("#bgAudio");
  let musicPanel = null;
  let isPlaying = false;

  const GAME_TRACKS = {
    valorant: "music/valorant.mp3",
    rocket: "music/rocket.mp3",
    smash: "music/smash.mp3",
  };

  function ensureMusicPanel() {
    if (musicPanel) return;

    musicPanel = document.createElement("div");
    musicPanel.className = "music-panel";
    musicPanel.innerHTML = `
      <div class="music-title">Music</div>
      <div class="music-sub">Local tracks (from your /music folder)</div>

      <div class="music-row">
        <button class="music-btn" id="musicToggle">Play</button>
        <button class="music-btn" id="musicClose">Close</button>
      </div>

      <div class="music-row">
        <select class="music-select" id="musicTrack">
          <option value="valorant">Valorant</option>
          <option value="rocket">Rocket League</option>
          <option value="smash">Smash</option>
        </select>
      </div>

      <div class="music-row">
        <input class="music-slider" id="musicVol" type="range" min="0" max="100" value="35" />
      </div>

      <div class="music-now">
        <span id="musicNowLabel">Ready</span>
        <span id="musicStateLabel">Paused</span>
      </div>
    `;

    document.querySelector(".device")?.appendChild(musicPanel);

    $("#musicClose", musicPanel).addEventListener("click", () => toggleMusicPanel(false));
    $("#musicToggle", musicPanel).addEventListener("click", () => toggleMusic());
    $("#musicTrack", musicPanel).addEventListener("change", () => {
      if (isPlaying) playSelected(true);
      else updateMusicLabels();
    });

    $("#musicVol", musicPanel).addEventListener("input", (e) => {
      if (!bgAudio) return;
      bgAudio.volume = Number(e.target.value) / 100;
    });

    // default audio settings
    if (bgAudio) {
      bgAudio.loop = true;
      bgAudio.volume = 0.35;
    }

    updateMusicLabels();
  }

  function toggleMusicPanel(open) {
    ensureMusicPanel();
    const shouldOpen = typeof open === "boolean" ? open : !musicPanel.classList.contains("open");
    musicPanel.classList.toggle("open", shouldOpen);
  }

  function updateMusicLabels() {
    if (!musicPanel) return;
    const key = $("#musicTrack", musicPanel)?.value || "valorant";
    const now = $("#musicNowLabel", musicPanel);
    const state = $("#musicStateLabel", musicPanel);
    if (now) now.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    if (state) state.textContent = isPlaying ? "Playing" : "Paused";
  }

  async function playSelected(forceRestart = false) {
    if (!bgAudio || !musicPanel) return;

    const key = $("#musicTrack", musicPanel)?.value || "valorant";
    const src = GAME_TRACKS[key];

    // If switching tracks or forcing restart
    if (forceRestart || bgAudio.src.indexOf(src) === -1) {
      bgAudio.pause();
      bgAudio.currentTime = 0;
      bgAudio.src = src;
      bgAudio.load();
    }

    try {
      await bgAudio.play(); // must be triggered by a click (we are)
      isPlaying = true;
      $("#musicToggle", musicPanel).textContent = "Pause";
      updateMusicLabels();
    } catch (err) {
      // If you opened index.html with file://, some browsers block this.
      // Use Live Server in VS Code.
      showToast("Audio blocked — open with Live Server");
      console.error("Audio play failed:", err);
    }
  }

  function pauseMusic() {
    if (!bgAudio || !musicPanel) return;
    bgAudio.pause();
    isPlaying = false;
    $("#musicToggle", musicPanel).textContent = "Play";
    updateMusicLabels();
  }

  function toggleMusic() {
    ensureMusicPanel();
    if (!isPlaying) playSelected(false);
    else pauseMusic();
  }

  musicBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMusicPanel();
  });

  document.addEventListener("click", (e) => {
    if (!musicPanel) return;
    const clickedInside = musicPanel.contains(e.target) || musicBtn.contains(e.target);
    if (!clickedInside) toggleMusicPanel(false);
  });

  // Optional: clicking a game card auto-switches the music to that game
  $$(".game-card").forEach((card) => {
    card.addEventListener("dblclick", () => {
      const g = (card.dataset.game || "").toLowerCase();
      ensureMusicPanel();

      const select = $("#musicTrack", musicPanel);
      if (!select) return;

      if (g.includes("valorant")) select.value = "valorant";
      else if (g.includes("rocket")) select.value = "rocket";
      else if (g.includes("smash")) select.value = "smash";

      playSelected(true);
      toggleMusicPanel(true);
      showToast("Switched track");
    });
  });


  // ====== CHAT (ambient + responsive) ======
  const chatMessages = $("#chatMessages");
  const chatInput = $("#chatInput");
  const chatSend = $("#chatSend");
  const chatOnline = $("#chatOnline");

  const CHATTERS = [
    "GamerPro99","BracketWatcher","MusicCityMain","RLBoostJunkie","ValorantVibes","SmashFanatic",
    "ClutchCaller","MapControl","ControllerKid","StageLeft","NashvilleNerd","LANLegend",
    "ReplayRewind","TopSeedTakes","UnderdogEnjoyer","CasualCaster","CrowdCam","PatchNotesPls",
    "TeamDiff","HitConfirm","RoundStart","FinalBossEnergy","WKeyWizard","BoostEconomy","DIEnjoyer"
  ];

  const REPLIES = {
    general: [
      "This series is a banger.",
      "Crowd audio is popping 🔥",
      "NECS production is clean today.",
      "Upset potential feels real.",
      "LANs hit different, no debate.",
      "That swing was huge.",
      "Someone clip that 😂",
      "Bracket is STACKED.",
      "Replays team working overtime.",
      "This is peak competition.",
      "Music City showed up fr.",
      "Chat is moving fast.",
    ],
    valorant: [
      "That retake was coordinated.",
      "Utility layering was perfect.",
      "That clutch was ice cold 🧊",
      "Mid control is deciding everything.",
      "Eco damage mattered a lot.",
      "That timing peek was insane.",
    ],
    rocket: [
      "That aerial was gross 🚀",
      "Boost starve is winning this.",
      "Zero seconds pressure again 😳",
      "Rotation looked clean there.",
      "That pass was nasty.",
      "Defense is saving them.",
    ],
    smash: [
      "That edgeguard was BRUTAL 😭",
      "Neutral is so disciplined.",
      "One opening = 60% lol.",
      "Crowd pops in Smash are undefeated.",
      "That stock disappeared.",
      "Last stock situation AGAIN…",
    ],
    brackets: [
      "Top seed in danger… again 👀",
      "Losers run incoming.",
      "That update changed matchups a lot.",
      "Seeds don’t matter today lol.",
      "Bracket side is chaos.",
    ],
    hype: [
      "NO WAY 😳",
      "ABSOLUTE CINEMA 🎬",
      "LET’S GO 🔥🔥🔥",
      "THAT WAS ILLEGAL",
      "I DID NOT SEE THAT COMING",
    ],
    chill: [
      "GGs, solid set.",
      "Respect to both teams.",
      "Well played.",
      "Composure was clean.",
    ]
  };

  // Anti-repeat memory
  const RECENT_REPLY_LIMIT = 18;
  const recentReplies = [];
  function rememberReply(t) {
    recentReplies.push(t);
    if (recentReplies.length > RECENT_REPLY_LIMIT) recentReplies.shift();
  }
  function pickNonRepeating(arr) {
    const filtered = arr.filter((x) => !recentReplies.includes(x));
    const pool = filtered.length ? filtered : arr;
    const choice = pool[Math.floor(Math.random() * pool.length)];
    rememberReply(choice);
    return choice;
  }

  // Anti-repeat names
  const recentNames = [];
  function pickName() {
    const filtered = CHATTERS.filter((n) => !recentNames.includes(n));
    const pool = filtered.length ? filtered : CHATTERS;
    const name = pool[Math.floor(Math.random() * pool.length)];
    recentNames.push(name);
    if (recentNames.length > 7) recentNames.shift();
    return name;
  }

  function timeNow() {
    const d = new Date();
    let h = d.getHours();
    const m = String(d.getMinutes()).padStart(2, "0");
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${m} ${ampm}`;
  }

  function addChatMessage(username, text, isMod = false) {
    if (!chatMessages) return;

    const initial = (username || "?").trim().charAt(0).toUpperCase();

    const wrap = document.createElement("div");
    wrap.className = "chat-msg";

    const avatar = document.createElement("div");
    avatar.className = "chat-avatar" + (isMod ? " mod" : "");
    avatar.textContent = initial;

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";

    const userLine = document.createElement("div");
    userLine.className = "chat-user";

    const nameSpan = document.createElement("span");
    nameSpan.className = "chat-username" + (isMod ? " mod" : "");
    nameSpan.textContent = username;

    const timeSpan = document.createElement("span");
    timeSpan.className = "chat-time";
    timeSpan.textContent = timeNow();

    const msgText = document.createElement("div");
    msgText.className = "chat-text";
    msgText.textContent = text;

    userLine.appendChild(nameSpan);
    userLine.appendChild(timeSpan);
    bubble.appendChild(userLine);
    bubble.appendChild(msgText);

    wrap.appendChild(avatar);
    wrap.appendChild(bubble);

    chatMessages.appendChild(wrap);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function detectCategory(message) {
    const m = (message || "").toLowerCase();
    if (m.includes("valo") || m.includes("valorant") || m.includes("vct")) return "valorant";
    if (m.includes("rocket") || m.includes("rl") || m.includes("aerial")) return "rocket";
    if (m.includes("smash") || m.includes("edge") || m.includes("stock")) return "smash";
    if (m.includes("bracket") || m.includes("seed") || m.includes("losers")) return "brackets";
    if (m.includes("no way") || m.includes("insane") || m.includes("crazy") || m.includes("omg") || m.includes("wtf")) return "hype";
    if (m.includes("gg") || m.includes("respect") || m.includes("well played")) return "chill";
    return "general";
  }

  // Ambient chat engine
  let ambientTimer = null;
  let onlineCount = 1284;

  function updateOnline(delta) {
    onlineCount = Math.max(900, Math.min(3200, onlineCount + delta));
    if (chatOnline) chatOnline.textContent = `${onlineCount.toLocaleString()} online`;
  }

  function randomAmbientEvent() {
    const roll = Math.random();

    if (roll < 0.18) {
      // join/leave style
      const who = pickName();
      const join = Math.random() < 0.6;
      updateOnline(join ? +Math.floor(Math.random() * 6) : -Math.floor(Math.random() * 6));
      addChatMessage("NECS Mod", `${who} ${join ? "joined" : "left"} the chat.`, true);
      return;
    }

    // normal message
    const categories = ["general", "general", "general", "valorant", "rocket", "smash", "brackets"];
    const cat = categories[Math.floor(Math.random() * categories.length)];
    const msg = pickNonRepeating(REPLIES[cat] || REPLIES.general);
    addChatMessage(pickName(), msg, false);

    // occasional quick second person reaction
    if (Math.random() < 0.22) {
      const quick = pickNonRepeating(["Facts.", "Same.", "For real.", "No shot.", "Lowkey yeah.", "W.", "LMAO"]);
      setTimeout(() => addChatMessage(pickName(), quick, false), 420 + Math.random() * 600);
    }
  }

  function startAmbientChat() {
    if (ambientTimer) return;
    // start a little quickly so it feels alive immediately
    ambientTimer = setInterval(() => {
      if (activeScreen !== "chat") return;
      randomAmbientEvent();
    }, 2200 + Math.random() * 1200);
  }

  function stopAmbientChat() {
    if (!ambientTimer) return;
    clearInterval(ambientTimer);
    ambientTimer = null;
  }

  // Respond when YOU talk
  function sendChat() {
    if (!chatInput) return;
    const text = chatInput.value.trim();
    if (!text) return;

    addChatMessage("You", text, false);
    chatInput.value = "";

    // “people” respond to you
    const cat = detectCategory(text);
    const delay = 500 + Math.random() * 900;

    setTimeout(() => {
      const directReplies = [
        `@You ${pickNonRepeating(REPLIES[cat] || REPLIES.general)}`,
        `@You ${pickNonRepeating(["I feel that.", "Same here.", "Good take.", "No cap.", "That’s fair."])}`,
        `@You ${pickNonRepeating(REPLIES[cat] || REPLIES.general)}`,
      ];

      addChatMessage(pickName(), directReplies[Math.floor(Math.random() * directReplies.length)], false);

      // sometimes a second person reacts to your message too
      if (Math.random() < 0.35) {
        const follow = pickNonRepeating([
          "facts 😂",
          "W take",
          "nahhhh",
          "this chat is cooked",
          "agree",
          "someone clip it",
          "bracket is chaos rn",
        ]);
        setTimeout(() => addChatMessage(pickName(), follow, false), 450 + Math.random() * 800);
      }
    }, delay);
  }

  chatSend?.addEventListener("click", sendChat);
  chatInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendChat();
  });

  // Start ambient only when chat screen is opened (setActiveScreen handles it)
  // If user loads directly and taps chat first, it will start then.

  // expose for debugging if needed
  window.__NECS__ = { setActiveScreen };
})();
