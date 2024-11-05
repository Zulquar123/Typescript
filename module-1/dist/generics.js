"use strict";
{
    // Generics :
    const roll = [3, 6, 9];
    const rolls = [3, 6, 9];
    const name = ['xyz', 'abc', 'pqr'];
    const names = ['xyz', 'abc', 'pqr'];
    const bool = [true, false, true];
    const bools = [true, false, true];
    // Generics Function.
    function nasta(a, b, c) {
        console.log(a, b, c);
    }
    nasta('Halwa', 'Pudi', 5); //  nasta<string,string,number>('Halwa', 'Pudi', 5);
    function log(value) {
        console.log(value);
    }
    log(12); // log<number>(12);
    let Details = {
        name: 'Zulquar',
        age: 34
    };
}
