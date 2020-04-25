const dollarAmount = 10.55;
const piggyBank = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
}

const dollarsToCoins = dollarAmount => {
    splitPlaces = dollarAmount.toString().split(".")
    piggyBank.quarters = splitPlaces[0] * 4;
    console.log(splitPlaces);
    if (splitPlaces[1] % 1 === 0) {
        piggyBank.dimes = parseInt(splitPlaces[1]);
    } else if (splitPlaces[1] % 5 === )
    // piggyBank.pennies = parseInt(splitPlaces[splitPlaces.length-1])
}

dollarsToCoins(dollarAmount)
console.log(piggyBank);

