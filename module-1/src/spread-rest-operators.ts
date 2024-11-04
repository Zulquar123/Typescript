
{


// Spread Operators :

const name1: string[] = ['mir', 'hir', 'bir'];

const name2: string[] = ['halwa', 'balwa', 'thalwa'];

name1.push(...name2);

console.log(name1);




// Rest Operators :

const greetFriends = (friend:string, ...friends:string[]):void =>
{
    console.log(`Hi ${friend}`);
        friends.forEach(f => {
            console.log(`${friends}`)
        });
}
greetFriends('Abdul', "Alam", "Aazam", "Suny", "Wansh");































}