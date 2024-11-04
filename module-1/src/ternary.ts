{
    // Ternary Operator.

    const age: number = 13;
    const isAdult:string = age > 18 ? "Adult " : "Not Adult";
    console.log({ isAdult });

    // Nullish coalescing Operator.    used on making descision on null , undefined.

    // const isAuthenticated = null;
    // const result = isAuthenticated ?? "Guest";
    // console.log({ result });

    // Alternative.
    const isAuthenticated: string | null = null;
    const result: string = isAuthenticated ?? "Guest";
    console.log({ result });

    //Optional chaining.

    type user = {
        name: string;
        local_address: string;
        current_address?: string;   // optional chaining using '?'.
    }
    const User: user = {
        name: "Zulquar",
        local_address:"Raniganj",
    }























}