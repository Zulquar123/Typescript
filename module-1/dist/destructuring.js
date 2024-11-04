"use strict";
{
    const user = { id: 1, name: "Zulquar", age: 34 };
    const { id, name, age } = user;
    // Destructuring Array :
    const friends = ['halwa', 'balwa', 'thalwa', 'zalwa', 'kalwa', 'malwa'];
    const [a, b, ...c] = friends;
    console.log(a); // 'halwa'
    console.log(b); // 'balwa'
    console.log(c); // ['thalwa', 'zalwa', 'kalwa', 'malwa']
    // Note the de-structuring of objects and array works in same as it works in Javascript...
}
