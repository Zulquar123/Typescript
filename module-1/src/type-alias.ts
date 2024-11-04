{

    // Sample Object :

// const userName = {
//     name: "Zulquar Nain Ansari",
//     age: 34,
//     address: "Raniganj",
//     contact: 9832170160,
//     email: "Zulquar@gmail.com"
//    }

    
    // Normal Typescripted  Object :  
    
// const userName: {
//     name: string;
//     age: number;
//     address: string;
//     contact: number;
//     email: string;
// } = {
//     name: "Zulquar Nain Ansari",
//     age: 34,
//     address: "Raniganj",
//     contact: 9832170160,
//     email: "Zulquar@gmail.com"
// };


//  Typescripted  Object using type-alias :

type User = {
    name: string;
    age: number;
    address: string;
    contact: number;
    email: string;
};
const userName: User = {
    name: "Zulquar Nain Ansari",
    age: 34,
    address: "Raniganj",
    contact: 9832170160,
    email: "Zulquar@gmail.com"
};

    // Arrow function transcripted in normal way.

    const sum = (n1: number, n2: number): number => {
        let sum = n1 + n2;
        return sum;
    }

    // Arrow function transcripted in type-alias.

    type Add = (n1: number, n2: number) => number;
    const add: Add = (n1, n2) => n1 + n2;

    // Example usage
    console.log(add(6, 3)); // Output: 9













































































}