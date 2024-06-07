import { CardItem } from "./types";

// from left to right, top to bottom
// 01 02 11 12 21 22 and so on, except non upgradeable items
export const MarketsUpgradeCosts: Pick<CardItem, "costToUpgrade">[] = [
  { costToUpgrade: 1590000 }, // "Fan tokens",
  { costToUpgrade: 1160000 }, // "Stacking",
  { costToUpgrade: 415630 }, // "BTC pairs",
  { costToUpgrade: 498760 }, // "ETH pairs",
  { costToUpgrade: 725360 }, // "Top 10 cmc pairs",
  { costToUpgrade: 362680 }, // "GameFi tokens",
  { costToUpgrade: 362680 }, // "Defi2.0 tokens",
  { costToUpgrade: 362680 }, // "SocialFi tokens",
  { costToUpgrade: 319680 }, // "Meme coins",
  { costToUpgrade: 799200 }, // "Shit coins",
  { costToUpgrade: 830740 }, // "Margin trading x10",
  { costToUpgrade: 830743 }, // "Margin trading x20",
  { costToUpgrade: 1163040 }, // "Margin trading x30",
  { costToUpgrade: 7250000 }, // "Margin trading x50",
  { costToUpgrade: 2490000 }, // "Margin trading x75",
  { costToUpgrade: 1660000 }, // "Margin trading x100",
  { costToUpgrade: 1810000 }, // "Derivatives",
  { costToUpgrade: 1260000 }, // "Prediction markets",
  { costToUpgrade: 1030000 }, // "Web3 integration",
  { costToUpgrade: 725360 }, // "DAO",
  { costToUpgrade: 671330 }, // "P2P trading",
  { costToUpgrade: 335660 }, // "Trading bots",
];

// from left to right, top to bottom
// 01 02 11 12 21 22 and so on, except non upgradeable items
export const PRandTeamUpgradeCosts: Pick<CardItem, "costToUpgrade">[] = [
  { costToUpgrade: 544020 }, // "Support team",
  { costToUpgrade: 362680 }, // "HamsterBook",
  { costToUpgrade: 398950 }, // "X",
  { costToUpgrade: 581890 }, // "Cointelegraph",
  { costToUpgrade: 435210 }, // "HamsterTube",
  { costToUpgrade: 362680 }, // "HamsterGram",
  { costToUpgrade: 544020 }, // "TikTok",
  { costToUpgrade: 332290 }, // "Coindesk",
  { costToUpgrade: 399600 }, // "Influencers",
  { costToUpgrade: 332290 }, // "CEO",
  { costToUpgrade: 319680 }, // "IT team",
  { costToUpgrade: 332290 }, // "Marketing",
  { costToUpgrade: 362680 }, // "Partnership program",
  { costToUpgrade: 332290 }, // "Product team",
  { costToUpgrade: 362680 }, // "Bisdev team",
  { costToUpgrade: 332290 }, // "Two factor authentication",
  { costToUpgrade: 551270 }, // "UX and UI team",
  { costToUpgrade: 332290 }, // "Security team",
  { costToUpgrade: 423670 }, // "QA team",
  { costToUpgrade: 319680 }, // "Antihacking shield",
  { costToUpgrade: 664600 }, // "Risk management team",
  { costToUpgrade: 2170000 }, // "Security Audition",
  { costToUpgrade: 652820 }, // "Anonymous transaction ban",
  { costToUpgrade: 906700 }, // "Blocking suspicious accounts",
  { costToUpgrade: 799200 }, // "Tokenomics experts",
  { costToUpgrade: 2010000 }, // "Consensus Exprorer pass",
  { costToUpgrade: 663600 }, // "VC Labs",
  { costToUpgrade: 559440 }, // "Compliance officer",
  { costToUpgrade: 479520 }, // "Welcome to Amsterdam",
];

// from left to right, top to bottom
// 01 02 11 12 21 22 and so on, except non upgradeable items
export const LegalUpgradeCosts: Pick<CardItem, "costToUpgrade">[] = [
  { costToUpgrade: 400110 }, // "KYC",
  { costToUpgrade: 362680 }, // "KYB",
  { costToUpgrade: 332290 }, // "Legal opinion",
  { costToUpgrade: 398750 }, // "SEC transparancy",
  { costToUpgrade: 479520 }, // "Anti money loundering",
  { costToUpgrade: 3620000 }, // "Licence UAE",
  { costToUpgrade: 1660000 }, // "Licence Europe",
  { costToUpgrade: 1660000 }, // "Licence Asia",
  { costToUpgrade: 799203 }, // "Licence South America",
  { costToUpgrade: 1661500 }, // "Licence Australia",
  { costToUpgrade: 1590000 }, // "Licence North America",
  { costToUpgrade: 498440 }, // "Licence Nigeria",
  { costToUpgrade: 4030000 }, // "Licence Japan",
  { costToUpgrade: 2820000 }, // "Licence Ethiopia",
];

// from left to right, top to bottom
// 01 02 11 12 21 22 and so on, except non upgradeable items
export const SpecialUpgradeCosts: Pick<CardItem, "costToUpgrade">[] = [
  { costToUpgrade: 5516015 }, // "TON + hamster Kombat = Success",
  { costToUpgrade: 4030000 }, // "Consensus Piranha Pass",
  { costToUpgrade: 3655268 }, // "Web3 academy launch",
  { costToUpgrade: 830740 }, // "Youtube Gold Button",
  { costToUpgrade: 498440 }, //  "Hamster Youtube Channel",
  { costToUpgrade: 332290 }, //  "Bitcoin Pizza Day",
  { costToUpgrade: 1590000 }, // "Top 10 Global Ranking",
  { costToUpgrade: 2717300 }, // "NFT Collection Launch",
  { costToUpgrade: 1660000 }, // "Special Hamster Conference",
  { costToUpgrade: 1490000 }, // "Short squeeze",
  { costToUpgrade: 4036000 }, //  "There are two chairs...",
  { costToUpgrade: 4795000 }, // "Long squeeze",
  { costToUpgrade: 1450000 }, // "Villa for the DEV team",
  { costToUpgrade: 2397000 }, // "Apps Center Listing",
  { costToUpgrade: 799200 }, // "Bogdanov is calling",
  { costToUpgrade: 3320000 }, // "USDT on TON",
];
