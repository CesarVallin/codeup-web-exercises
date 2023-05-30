"use strict";
console.log(`hello from product_offer_discount.js`);

// parameters:
// randomItemCount - to serve as argument for itemCount
// itemCountThreshold - to serve as argument for itemCountCompare
// active - to serve as argument for offerSaleStatus
// premCustomer - to serve as argument for customerType
const discount = (itemCount, itemCountCompare, offerSaleStatus, customerType) => {
    if ((itemCount < itemCountCompare) && offerSaleStatus){
        console.log(`More than 2 items, and offer discount is active: Discount applied`);
        document.write("<h2>More than 2 items, and offer discount is active: Discount applied</h2>");
    } else if (customerType) {
        console.log(`Premium member: Discount applied`);
        document.write("<h2>Premium member: Discount applied</h2>")
    } else {
        console.log(`No discount applied`);
        document.write("<h2>No discount applied</h2>");
    }
};

const randomizeInputs = () => {
    // To represent number of items
    // random number, 1 to 3 .
    let randomItemCount = Math.floor(Math.random() * 3) + 1;
    console.log(randomItemCount, typeof randomItemCount);

    let itemCountThreshold = 2;

    // for offer active or expired. Random number either 1 or 2.
    // boolean assignments within conditional statement
    let active = Math.floor(Math.random() * 2) + 1;
    console.log(active, `number data-type value before boolean data-type conversion`);
    if (active === 1) {
        active = !!active;
    } else {
        active = !active;
    }
    console.log(active, typeof active);

    // for customer Premium or Regular.  Random number either 1 or 2.
    let premCustomer = Math.floor(Math.random() * 2) + 1;
    console.log(premCustomer, `number data-type value before boolean data-type conversion`);
    if (premCustomer === 1) {
        premCustomer = !!premCustomer;
    } else {
        premCustomer = !premCustomer;
    }
    console.log(premCustomer, typeof premCustomer);

    discount(randomItemCount, itemCountThreshold, active, premCustomer);
};

for(let i = 0; i < 100; i++) {
    randomizeInputs();
}








