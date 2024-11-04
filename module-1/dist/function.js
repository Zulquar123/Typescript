"use strict";
{
    // Normal Function 
    function add(n1, n2) {
        let sum = n1 + n2;
        return `The sum of two no is : ${sum}`;
    }
    console.log(add(6, 3));
    // Arrow Function 
    const sum = (n1, n2) => {
        let sum = n1 + n2;
        return sum;
    };
    console.log(" The of two no is : ", sum(5, 7));
    // Default Parameters 
    function addition(n1, n2 = 7) {
        let sum = n1 + n2;
        return sum;
    }
    console.log(`The sum of two number is : ${sum(5, 10)}`);
    // Method under object with parameter in anonomus arrow function.
    const poorUser = {
        name: "Zulquar",
        balance: 0,
        addBalance(balance) {
            return `My new balance is : ${this.balance + balance}`;
        }
    };
    console.log(poorUser.addBalance(15));
    // Map function :
    const heights = [4, 5, 7, 8, 2, 1, 9];
    const newArray = heights.map((height) => height * 2);
}
