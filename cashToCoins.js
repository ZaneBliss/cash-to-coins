const dollarAmount = 8.81;
const piggyBank = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
}

const dollarsToCoins = dollarAmount => {
    splitPlaces = dollarAmount.toString().split(".")
    piggyBank.quarters = splitPlaces[0] * 4;
    if (splitPlaces[1][0] % 10 == splitPlaces[1][0]) {
        piggyBank.dimes = parseInt(splitPlaces[1][0]);
    }
    if (splitPlaces[1][1] % 5 == 0 || splitPlaces[1][1] >= 5) {
        piggyBank.nickels = parseInt(splitPlaces[1][1]/5)
    }
    if (splitPlaces[1][1] < 5) {
        piggyBank.pennies = parseInt(splitPlaces[1][1])
    } else if (splitPlaces[1][1] > 5) {
        piggyBank.pennies = parseInt(splitPlaces[1][1] - 5)
    }
}

dollarsToCoins(dollarAmount)
console.log(piggyBank);

