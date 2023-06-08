"use strict";
console.log(`hello from objects.js`);

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    const person = {
        firstName: "Cesar",
        lastName: "Vallin",
        sayHello: function() {
            return `Hello from ${this.firstName} ${this.lastName}!`;
        }
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    console.log(shoppers);

    // declaring a discount minimum!!!
    const discountMinimum = 200;

    // arrow function, conditional for discount:
    const discountAmount = (numberParam) => {
        if (numberParam > discountMinimum) {
            return (numberParam * 0.12).toFixed(2)
        } else {
            return 0;
        }
    };
    // arrow function, receives an amount, then subtracts discount if applied.
    const savings = (numberParam, discountParam) => {return (numberParam - discountParam).toFixed(2)};

    // forEach loop accessing all object properties and displaying total amounts before discounts
    // discounted amount (even if 0 discount), and total after discount.
        // Remember, forEach object in the array, you are accessing it through the iterator 'i'
        // and further accessing *property:value* through dot notation -> i.name, i.amount, etc.
    shoppers.forEach(i => {
            console.log(`${i.name}: Total before Discount $${i.amount.toFixed(2)} \n\nDiscount amount is: $${discountAmount(i.amount)} \n\nTotal after discount is: $${savings(i.amount, discountAmount(i.amount))}`);
        });


    // // Iterating through everything in this object
    // shoppers.forEach(function(i){
    //     console.log(i);
    // });
    //
    // // Iterating through the amounts only --- --- ---
    // shoppers.forEach(function(shopper) {
    //     console.log(shopper.amount);
    // });
    //
    // // Iterating through the amounts and names --- --- ---
    // shoppers.forEach(i => {
    //     console.log(i.amount, i.name);
    // });
    //
    // // Iterating through the amounts, with conditional statement --- --- ---
    // shoppers.forEach(i => {
    //     if (i.name === "Cameron") {
    //         console.log(`Hi there ${i.name}`);
    //     } else {
    //         console.log(i.amount);
    //     }
    // });







    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    const books = [
        {
            title: "Lone Survivor",
            author: {
                firstName: "Marcus",
                lastName: "Luttrell"
            }
        },
        {
            title: "The lost city of the Monkey God",
            author: {
                firstName: "Douglas",
                lastName: "Preston"
            }
        },
        {
            title: "Do the work",
            author: {
                firstName: "Steven",
                lastName: "Pressfield"
            }
        },
        {
            title: "The General and the Jaguar",
            author: {
                firstName: "Eileen",
                lastName: "Welsom"
            }
        },
        {
            title: "Simply Electrifying",
            author: {
                firstName: "Craig",
                lastName: "Roach"
            }
        }
    ];

    console.log(books[0].title);
    // Remember, author is another property in books[0]
        // meaning you can't access it by referencing title!
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    function iterateThroughBooks (bookListArray){
        let counter = 0;
        books.forEach(i => {
           counter += 1;
           console.log(`Book # ${counter}`);
           console.log(`Title: ${i.title}`);
           console.log(`Author: ${i.author.firstName} ${i.author.lastName}`);
           console.log(`--- --- ---`);
        });
    }
    iterateThroughBooks(books);

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
console.log(`Bonus exercise ====================================================================`);
    const createBookIndex = (titleParam, authorFirstNameParam, authorLastNameParam) => {
        let bookIntoObject = {
            title: `${titleParam}`,
            author: {
                firstName: `${authorFirstNameParam}`,
                lastName: `${authorLastNameParam}`
            }
        }
        return bookIntoObject;
    };


    let booksA = [];
    booksA.push(createBookIndex("Simply Electrifying", "Craig", "Roach"));
    booksA.push(createBookIndex("The General and the Jaguar", "Eileen", "Welsom"));
    booksA.push(createBookIndex("Do the work", "Steven", "Pressfield"));
    booksA.push(createBookIndex("The lost city of the Monkey God", "Douglas", "Preston"));
    booksA.push(createBookIndex("Lone Survivor", "Marcus", "Luttrell"));
    // console.log(booksA);

    const showBookInfo = (objectArrayParam) => {
        let counter = 0;
        objectArrayParam.forEach(i => {
            counter += 1;
            console.log(`Book # ${counter}`);
            console.log(`Title: ${i.title}`);
            console.log(`Author: ${i.author.firstName} ${i.author.lastName}`);
            console.log(`--- --- ---`);
        });
    };
    showBookInfo(booksA);

})();