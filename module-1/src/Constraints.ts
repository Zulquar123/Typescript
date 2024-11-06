
//Contarints: 


function logLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
}

logLength("Hello");        // Valid, string has a length property
logLength([1, 2, 3]);      // Valid, array has a length property
// logLength(123);         // Error, number doesn't have a length property


//Constraining to an Interface

interface Person {
    name: string;
    age: number;
}

function printPerson<T extends Person>(person: T): void {
    console.log(person.name, person.age);
}

const person = { name: "Alice", age: 30 };
printPerson(person); // Valid

const invalidPerson = { name: "Bob" };
// printPerson(invalidPerson); // Error, missing `age` property
