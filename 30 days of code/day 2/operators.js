function main(mealCost, tipPercent, taxPercent) {
    var tipAmount = mealCost * (tipPercent/100);
    var taxAmount = mealCost * (taxPercent/100);
    var totalCost = mealCost + tipAmount + taxAmount;
    console.log(`The total meal cost is ${Math.round(totalCost)} dollars.`);
}