
{

    let name: string = "Zulquar Nain Ansari";
    
    let age: number = 67;

    let isAdmin: boolean = true;

    let isMarraried: null = null;

    let promotionDeclared: undefined = undefined;

    let names: string[] = ["Zulquar", "Zeeshan", "Jalal"];    // string typed Array.

    let ages: number[] = [45, 67, 34, 37];   // number typed Array.

    let name_age: [string, number] = ["Zulquar Nain Ansari", 34];   // Tuples

    const user: { id: number; name: string; age: number; address: string; contact?: number } =
                { id: 1, name: "Zulquar", age: 34, address: "Raniganj"   };                      // Object with Optional type.


    const employee: { id: number, name: string, company: "Apple" } = { id: 1, name: "Zulquar", company: "Apple" }; // Object with literal type.

    const family: { readonly fatherName: string } = { fatherName: "Jalal Ansari" }; //family.fatherName = "Zulquar"; // object with readonly.
    
    

}

