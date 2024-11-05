{
    // Type Assertion.

    let a: any = 12;

    a = "Zulquar";

    (a as number).toFixed;   // It will not considered as Number type it totallay depends on users.

    console.log(a);  // Zulquar
    console.log(typeof a); // String.



    // Type Casting... 

    let b = Number("12");
    
    console.log(b);
    console.log(typeof b);

    
    
    // Type Narrowing.

    function printId(id: string | number)
    {
        if (typeof id === 'string')
        {
            console.log("Id is a String : ", id.toUpperCase());
        }
        else
        {
            console.log("Id is a Number : ", id*1);

        }

    }

    printId("Zulquar");
    printId(453);
























}