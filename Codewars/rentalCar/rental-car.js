console.log(`hello from rental-car.js`);

function rentalCarCost(d) {
    // Your solution here

    let totalCostBeforeDiscount = d * 40;
    let totalCost;
    if(d < 3) {
        totalCost = totalCostBeforeDiscount;
    }
    if ( (d >= 3) && (d < 7) ) {
        totalCost = totalCostBeforeDiscount - 20;
    }
    if (d >= 7) {
        totalCost = totalCostBeforeDiscount - 50;
    }
    return totalCost;

}