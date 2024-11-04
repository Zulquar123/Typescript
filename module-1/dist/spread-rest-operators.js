"use strict";
{
    // Spread Operators :
    const name1 = ['mir', 'hir', 'bir'];
    const name2 = ['halwa', 'balwa', 'thalwa'];
    name1.push(...name2);
    console.log(name1);
    // Rest Operators :
    const greetFriends = (friend, ...friends) => {
        console.log(`Hi ${friend}`);
        friends.forEach(f => {
            console.log(`${friends}`);
        });
    };
    greetFriends('Abdul', "Alam", "Aazam", "Suny", "Wansh");
}
