// Union 

let id: string | number | boolean;

id = 786;
id = "678";
id = "true";

function printRoll(roll: string | number) {
    console.log(`roll no : ${roll}`);
}

printRoll('786');
printRoll(456);

// Union using type alias.

type FrontendDeveloper = "Junior Dev" | "Senior Dev";

const newDeveloper: FrontendDeveloper = "Junior Dev"   // or "Senior Developer".

// Union using type alias and string litrals.

type User = {
    name: string;
    email: string;
    gender: 'male' | 'female';
    bloodGroup: '+O' | 'A+' | 'AB+' |'B+'
}

const user1: User = {
    name: "Zulquar.",
    email: "zulquar@gmail.com",
    bloodGroup: 'B+',
    gender: "male"
}
