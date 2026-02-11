import { Music, Award, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    question: "What is Nashville's famous nickname in the music industry?",
    options: ["Music Capital", "Country Music City", "Music City USA", "The Nashville Sound"],
    correctAnswer: 2,
    explanation: "Nashville earned the nickname 'Music City USA' in 1950 when WSM radio announcer David Cobb first used the phrase."
  },
  {
    question: "Which legendary venue is known as the 'Mother Church of Country Music'?",
    options: ["The Bluebird Cafe", "Ryman Auditorium", "Grand Ole Opry", "Tootsie's Orchid Lounge"],
    correctAnswer: 1,
    explanation: "The Ryman Auditorium, built in 1892, is called the 'Mother Church of Country Music' and was home to the Grand Ole Opry from 1943 to 1974."
  },
  {
    question: "What famous street in Nashville is lined with honky-tonks and live music venues?",
    options: ["Music Row", "Broadway", "Division Street", "Demonbreun Street"],
    correctAnswer: 1,
    explanation: "Broadway (also called Lower Broadway) is the heart of Nashville's honky-tonk district, featuring live music from morning until late night."
  },
  {
    question: "The Grand Ole Opry is the longest-running radio broadcast in US history. When did it start?",
    options: ["1915", "1925", "1935", "1945"],
    correctAnswer: 1,
    explanation: "The Grand Ole Opry began as the WSM Barn Dance on November 28, 1925, making it nearly 100 years old!"
  },
  {
    question: "Which Nashville studio is famous for recording Elvis Presley and Dolly Parton?",
    options: ["Blackbird Studio", "RCA Studio B", "Ocean Way", "The Tracking Room"],
    correctAnswer: 1,
    explanation: "RCA Studio B, now part of the Country Music Hall of Fame tour, produced over 35,000 songs including hits from Elvis, Dolly Parton, and Willie Nelson."
  },
  {
    question: "What music genre originated in Nashville in the 1950s?",
    options: ["Bluegrass", "The Nashville Sound", "Honky Tonk", "Western Swing"],
    correctAnswer: 1,
    explanation: "The Nashville Sound emerged in the late 1950s as a smoother, more pop-oriented style of country music, pioneered by producers like Chet Atkins."
  },
  {
    question: "Which famous songwriter venue has a strict listening room policy?",
    options: ["Station Inn", "The Bluebird Cafe", "Exit/In", "Marathon Music Works"],
    correctAnswer: 1,
    explanation: "The Bluebird Cafe is known for its intimate songwriter rounds and strict 'no talking during performances' policy, making it a Nashville institution."
  },
  {
    question: "Bridgestone Arena, NECS 2026's venue, is home to which NHL team?",
    options: ["Nashville Stars", "Tennessee Titans", "Nashville Predators", "Music City Kings"],
    correctAnswer: 2,
    explanation: "The Nashville Predators have called Bridgestone Arena home since 1998, and it's also a major concert venue hosting top music acts."
  }
];

export default function MusicQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === QUIZ_QUESTIONS[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = (score / QUIZ_QUESTIONS.length) * 100;
    let title = "Keep Learning!";
    let message = "Nashville's music history is deep! Try again to improve your score.";
    
    if (percentage >= 80) {
      title = "Nashville Expert!";
      message = "You know your Music City history! You're ready for NECS 2026!";
    } else if (percentage >= 60) {
      title = "Music City Fan!";
      message = "Great job! You know a lot about Nashville's musical heritage.";
    }

    return (
      <div className="px-[18px] py-4 pb-24">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Music className="w-6 h-6 text-[#f5c521]" />
            <h1 className="text-white text-[28px] font-bold font-['Space_Grotesk']">Music Quiz</h1>
          </div>
          <p className="text-[#97a8d8] text-[14px] font-['Inter']">Test your Nashville knowledge</p>
        </div>

        <div
          className="rounded-[24px] p-8 border-2 border-[rgba(245,197,33,0.45)] text-center animate-fadeIn"
          style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
        >
          <div>
            <Award className="w-20 h-20 text-[#f5c521] mx-auto mb-4" />
          </div>
          
          <h2 className="text-[#f5c521] text-[32px] font-bold font-['Space_Grotesk'] mb-2">{title}</h2>
          <p className="text-white text-[20px] font-bold font-['Inter'] mb-4">
            Score: {score} / {QUIZ_QUESTIONS.length}
          </p>
          <p className="text-[#97a8d8] text-[14px] font-['Inter'] mb-6 leading-relaxed">
            {message}
          </p>
          
          <div className="mb-6">
            <div className="w-full h-[12px] bg-[rgba(62,121,255,0.12)] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{ 
                  width: `${percentage}%`,
                  backgroundImage: "linear-gradient(90deg, #f5c521 0%, #ffa500 100%)" 
                }}
              />
            </div>
            <p className="text-[#97a8d8] text-[12px] font-['Inter'] mt-2">{percentage.toFixed(0)}% Correct</p>
          </div>

          <button
            onClick={handleRestart}
            className="w-full py-[14px] rounded-[16px] border border-[rgba(245,197,33,0.45)] hover:scale-105 active:scale-95 transition-transform"
            style={{ backgroundImage: "linear-gradient(135deg, rgba(245, 197, 33, 0.3) 0%, rgba(245, 197, 33, 0.1) 100%)" }}
          >
            <span className="text-[#f5c521] text-[14px] font-bold font-['Inter'] tracking-[0.4px] uppercase">Try Again</span>
          </button>
        </div>
      </div>
    );
  }

  const question = QUIZ_QUESTIONS[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="px-[18px] py-4 pb-24">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Music className="w-6 h-6 text-[#f5c521]" />
          <h1 className="text-white text-[28px] font-bold font-['Space_Grotesk']">Music Quiz</h1>
        </div>
        <p className="text-[#97a8d8] text-[14px] font-['Inter']">Test your Nashville knowledge</p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#97a8d8] text-[12px] font-['Inter']">
            Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
          </span>
          <span className="text-[#f5c521] text-[12px] font-bold font-['Inter']">
            Score: {score}
          </span>
        </div>
        <div className="w-full h-[6px] bg-[rgba(62,121,255,0.12)] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-[#f5c521] transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div
        key={currentQuestion}
        className="rounded-[20px] p-5 mb-4 border border-[rgba(62,121,255,0.22)] animate-fadeIn"
        style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
      >
        <h3 className="text-white text-[18px] font-bold font-['Space_Grotesk'] mb-5 leading-relaxed">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            let buttonStyle = "border-[rgba(62,121,255,0.35)] bg-[rgba(62,121,255,0.08)]";
            
            if (showResult) {
              if (index === question.correctAnswer) {
                buttonStyle = "border-[rgba(34,197,94,0.6)] bg-[rgba(34,197,94,0.15)]";
              } else if (index === selectedAnswer) {
                buttonStyle = "border-[rgba(239,68,68,0.6)] bg-[rgba(239,68,68,0.15)]";
              }
            } else if (selectedAnswer === index) {
              buttonStyle = "border-[#f5c521] bg-[rgba(245,197,33,0.12)]";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 rounded-[16px] border-2 transition-all text-left flex items-center justify-between ${buttonStyle} ${!showResult ? 'hover:scale-[1.02] hover:translate-x-1 active:scale-95' : ''}`}
              >
                <span className="text-white text-[14px] font-['Inter']">{option}</span>
                {showResult && index === question.correctAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-green-500 animate-fadeIn" />
                )}
                {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                  <XCircle className="w-5 h-5 text-red-500 animate-fadeIn" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanation */}
      {showResult && (
        <div
          className={`rounded-[20px] p-5 mb-4 border-2 animate-fadeIn ${
            isCorrect 
              ? 'border-[rgba(34,197,94,0.6)] bg-[rgba(34,197,94,0.08)]' 
              : 'border-[rgba(239,68,68,0.6)] bg-[rgba(239,68,68,0.08)]'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-green-500 text-[14px] font-bold font-['Inter']">Correct!</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="text-red-500 text-[14px] font-bold font-['Inter']">Incorrect</span>
              </>
            )}
          </div>
          <p className="text-[#97a8d8] text-[13px] font-['Inter'] leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}

      {/* Next Button */}
      {showResult && (
        <button
          onClick={handleNext}
          className="w-full py-[14px] rounded-[16px] border border-[rgba(62,121,255,0.45)] hover:scale-105 hover:-translate-y-1 active:scale-95 transition-transform animate-fadeIn"
          style={{ backgroundImage: "linear-gradient(135deg, rgb(37, 86, 185) 0%, rgb(21, 65, 150) 100%)" }}
        >
          <span className="text-white text-[14px] font-bold font-['Inter'] tracking-[0.4px] uppercase">
            {currentQuestion < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'See Results'}
          </span>
        </button>
      )}
    </div>
  );
}