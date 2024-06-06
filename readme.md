# Hamster Combat - Upgrade calculator / Optimizer

The provided code snippet is a description of a TypeScript application designed to optimize the upgrade choices in the "Hamster Combat" game. The application calculates the worth of each upgrade based on its efficiency, which is determined by the ratio of extra profit per hour to the cost of the upgrade.

## How to run

To run the application, follow these steps:

1. Install TypeScript globally using the command `npm install typescript -g`.
2. Install Node.js.
3. Populate the data from your account by manually entering the cost to upgrade and extra profit per hour for each upgrade.
4. Run the script using the command `npm run start`. Results will be displayed from most valuable to less valuable.

## How to populate data faster (i.e., providing your data)

To populate the data faster, follow these guidelines:

1. Fill in the cost to upgrade for each upgrade in the corresponding `UpgradeValues` array.
2. Manually enter the extra profit per hour for each upgrade by opening the card's popup.
3. Run the code.
4. View the results in the terminal.

There are 4 types of lists as presented in the Hamster Combat: `Market`, `PR&Team`, `Legal`, `Special`. You can find them in the `lists.ts` file.

For each list: `MarketsList`, `PRandTeamList`, `LegalList`, and `SpecialList`, you need to provide _extraProfitPerHour_ and _costToUpgrade_.

To do it faster, you can't just open each card and provide both values inside a list. Instead, you can see _costToUpgrade_ without opening a card popup.

There are UpgradeCosts lists also: `MarketsUpgradeCosts`, `PRandTeamUpgradeCosts`, `LegalUpgradeCosts`, `SpecialUpgradeCosts`. Each one represents a list of items with only _costToUpgrade_ field, while its index matches the index in the same named lists (e.g., `SpecialUpdateValues[7]` === `SpecialList[7].costToUpdate`). Comments are provided to help check this data in case of any misspelling.

So the recipe is simple:

1. Fill in your _costToUpgrade_ to each `UpdateValues` array.
2. Go through all the cards popup and fill in _extraProfitPerHour_ manually (unfortunately, there is no faster way except this one).
3. Run the code (the exact details about running were explained above in the "How to run section").
4. See the result in the terminal.

## How to update data after upgrading

If you upgrade any card after the suggestion, you can just update the values inside `List` and `UpdateValues` arrays and rerun the code.

## Example of calculating worth

_extraProfitPerHour_: 500 coins per hour
_costToUpgrade_: 10,000 coins
_Worth_: 500 coins per hour / 10,000 coins = 0.05 per hour
_How many hours you will wait to return spent money_: 1 / 0.05 per hour = 20 hours

## Example output

```javascript
[
  {
    name: 'Licence Asia',
    extraProfitPerHour: 892,
    costToUpgrade: 799200,
    type: 'Legal',
    worth: 0.0011161161161161162,
    timeToReturnString: '895.964 hours or 37.332 days' // <-- this one will be better to upgrade because you will faster return spent money
  },
  ...,
  {
    name: "Security Audition",
    extraProfitPerHour: 276,
    costToUpgrade: 2170000,
    type: "PR&Team",
    worth: 0.0001271889400921659,
    timeToReturnMoney: "7862.319 hours or 327.597 days",
  },
  {
    name: "KYC",
    extraProfitPerHour: 32,
    costToUpgrade: 400110,
    type: "Legal",
    worth: 0.0000799780060483367,
    timeToReturnMoney: "12503.438 hours or 520.977 days",
  },
];
```

## Supporting the Project

If you find this project useful and would like to support its development, you can buy me a coffee or a donut! Your support is greatly appreciated.

Way to support me:

1. use my [referral](https://t.me/hamster_Kombat_bot/start?startapp=kentId370558684) link in Hamster Combat
2. [buy me a coffee](https://pay.cloudtips.ru/p/24f584df)
3. [join my frontend tg channel](https://t.me/unsleeping706) and/or [boost](https://t.me/unsleeping706?boost) it
4. download [arc](https://arc.net/gift/ff151d58) browser by my referral link
