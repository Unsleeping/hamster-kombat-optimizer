export type CardItem = {
  name: string;
  extraProfitPerHour: number;
  costToUpgrade: number;
  type: "Markets" | "PR&Team" | "Legal" | "Special";
};

export type DetailedCard = {
  worth: number;
  timeToReturnMoney: string;
} & CardItem;
