

class HelloTest {
    static sayHello() {
        return `hello there! (with static method!)`;
    }
}

class HiTest {
    sayHi() {
        return `hi there, (with an instance of HiTest in the IIFE to access this method!)`;
    }
}

(() => {
    "use strict";

    const message1 = HelloTest.sayHello();
    console.log(message1);

    const hiTestInstance = new HiTest();
    const message2 = hiTestInstance.sayHi();
    console.log(message2);

}) ();
