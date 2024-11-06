{

    // Generics :

    const roll: number[] = [3, 6, 9];
    const rolls: Array<number> = [3, 6, 9];
    

    const name: string[] = ['xyz','abc','pqr'];
    const names: Array<string> = ['xyz','abc','pqr'];
    

    const bool: boolean[] = [true,false,true];
    const bools: Array<boolean> = [true, false, true];
    
    // Generics Function.
    
    function nasta<T,U>(a: T, b: T, c: U)
    {
        console.log(a, b, c);
    }

    nasta('Halwa', 'Pudi', 5);    //  nasta<string,string,number>('Halwa', 'Pudi', 5);

    function log<T>(value: T)
    {
        console.log(value);
    }

    log(12);  // log<number>(12);

    // Generics Interface.

    interface Detail<T, U>{
        name: T;
        age: U;
    }
    
    let Details: Detail<string, number> = {
        name: 'Zulquar',
        age: 34
    }


    interface Halwa<T>{
        name: string;
        age: number;
        key: T;
    }

    function abcd(obj: Halwa<string>)
    {
        console.log(obj.name,obj.age,obj.key);
    }
    abcd({ name: "Zulquar", age: 34, key: 'XYZ' });


    // Generics classes.
    
        class BottleMaker<T>
        {
            constructor(public key: T){}  
        }
        let b1 = new BottleMaker<String>("Hey");
        console.log(b1);

        let b2 = new BottleMaker<String>("Hello");
    console.log(b2);
    
    // 
    function xyz<T>(a: T, b: T): T{
        return a;   // return "Hello hi" as T // return <T> "Key".
    }
    xyz<string>("Hey", "Hello");

  










}