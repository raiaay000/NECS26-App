import imgRadiantVanguardLogo from 'figma:asset/89a552dfbe23821f9ddb05fef2a5a6d8d87608d1.png';
import imgMidnightPulseLogo from 'figma:asset/e9924b6cc2ad57afd43725356f783a6e5446b3b5.png';
import imgLegacyApexLogo from 'figma:asset/1125f01ad0d81daa20897a216109597cdd9304c2.png';
import imgNeonCircuitLogo from 'figma:asset/159ede76147efb06ffb96ac690e58cb544a43bc2.png';
import imgTurboDriftLogo from 'figma:asset/109ee1d129c15451366169418f88b90e03abbdad.png';
import imgSmashLegionLogo from 'figma:asset/fa5beb57d13f69aa6cf097fdd2d9017e03b39a81.png';
import imgEmberfallLogo from 'figma:asset/f108e0c8ca28bb006b4331dc8cd5a4b7d40e25a4.png';
import imgApexAscentLogo from 'figma:asset/e5ca10f4026c8a502279fda1adf9ba5ef24c58e3.png';
import imgColdfrontLogo from 'figma:asset/1d2cd256f62c61bdc72f6920a5791df2b9bbd225.png';
import imgThunderAlloyLogo from 'figma:asset/1535ab231d497c498b96578261576032935bdd4d.png';
import imgPrismWardensLogo from 'figma:asset/4581f56c0f1bad3d9c91e7f2d2277684352d17f3.png';
import imgGravityPulseLogo from 'figma:asset/5a3c5fb698c70d8a40366010ffd86135549c2966.png';

export const TEAM_LOGOS = {
  'Radiant Vanguard': imgRadiantVanguardLogo,
  'Midnight Pulse': imgMidnightPulseLogo,
  'Legacy Apex': imgLegacyApexLogo,
  'Neon Circuit': imgNeonCircuitLogo,
  'Turbo Drift': imgTurboDriftLogo,
  'Smash Legion': imgSmashLegionLogo,
  'Emberfall': imgEmberfallLogo,
  'Apex Ascent': imgApexAscentLogo,
  'Coldfront': imgColdfrontLogo,
  'Thunder Alloy': imgThunderAlloyLogo,
  'Prism Wardens': imgPrismWardensLogo,
  'Gravity Pulse': imgGravityPulseLogo,
} as const;

export type TeamName = keyof typeof TEAM_LOGOS;
