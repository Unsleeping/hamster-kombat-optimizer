import { sortByWorthToUpdate } from "./utils";

const worthToUpdateList = sortByWorthToUpdate();

console.log("worthToUpdateList:", worthToUpdateList);

const mostValuableCard = worthToUpdateList[0];

console.log("mostValuableCard:", mostValuableCard);
