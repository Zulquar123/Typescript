{

    // interface :

interface Person {
    name: string;
    age: number;
    greet: ()=>void
}

let person: Person = {
    name: "Zulquar",
    age: 34,
    greet: () => {
        console.log("hi , Zulquar");
    }
}

person.greet();


    // interface using extend.

interface User {
    name: string;
    phone: number;
}

interface Customer extends User {
    address: string;
}

let myCustomer: Customer = {
    name: "Zulquar",
    phone: 9832170160,
    address:'Raniganj'
}




















}