import { LegalList, MarketsList, PRandTeamList, SpecialList } from "./lists";
import { CardItem, DetailedCard } from "./types";
import {
  PRandTeamUpgradeCosts,
  LegalUpgradeCosts,
  SpecialUpgradeCosts,
  MarketsUpgradeCosts,
} from "./upgradeValues";

const getListByType = (type: CardItem["type"]) => {
  switch (type) {
    case "PR&Team":
      return PRandTeamList;
    case "Legal":
      return LegalList;
    case "Special":
      return SpecialList;
    case "Markets":
      return MarketsList;
  }
};

const getUpgradeValuesByType = (type: CardItem["type"]) => {
  switch (type) {
    case "PR&Team":
      return PRandTeamUpgradeCosts;
    case "Legal":
      return LegalUpgradeCosts;
    case "Special":
      return SpecialUpgradeCosts;
    case "Markets":
      return MarketsUpgradeCosts;
  }
};

const mergeListWithUpgradeValues = (type: CardItem["type"]) => {
  const list = getListByType(type);
  const upgradeValues = getUpgradeValuesByType(type);
  if (list.length !== upgradeValues.length) {
    throw new Error(
      `list.length: ${list.length}, fastUpdateValues.length: ${upgradeValues.length}`
    );
  }

  const updatedList = list.map((item, index) => {
    const fastUpdateValue = upgradeValues[index];
    return {
      ...item,
      costToUpgrade: fastUpdateValue.costToUpgrade,
    };
  });
  return updatedList;
};

const allTypes = ["Markets", "PR&Team", "Legal", "Special"] as const;

const getAllCards = () =>
  allTypes.reduce((prev, cur) => {
    const updatedList = mergeListWithUpgradeValues(cur);
    prev.push(...updatedList);
    return prev;
  }, [] as CardItem[]);

const calcWorthToUpdate = (item: CardItem) => {
  const { costToUpgrade, extraProfitPerHour } = item;
  const worth = extraProfitPerHour / costToUpgrade;
  return worth;
};

export const sortByWorthToUpdate = () => {
  const allCards = getAllCards();
  const copy = [...allCards];
  const sortedCards = copy.sort((a, b) => {
    const aWorth = calcWorthToUpdate(a);
    const bWorth = calcWorthToUpdate(b);
    return bWorth - aWorth;
  });
  const detailedCards: DetailedCard[] = sortedCards.map((item) => {
    const worth = calcWorthToUpdate(item);
    const hours = 1 / worth;
    const days = hours / 24;
    const timeToReturnString = `${hours.toFixed(3)} hours or ${days.toFixed(
      3
    )} days`;
    return {
      ...item,
      worth,
      timeToReturnMoney: timeToReturnString,
    };
  });
  return detailedCards;
};
