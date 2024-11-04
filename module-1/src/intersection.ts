{

    // Intersection -->  &

    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Fronted Developer'    // string litral
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'   // string litral
    }


    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;    // Use of Intersection ---> '&' .

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ['HTML', 'CSS', 'Express'],
        designation1: 'Fronted Developer',
        designation2: 'Backend Developer'
    }

    // More example.

    type vehicle = {
        brand: string;
        milege: number;
    }

    type car = vehicle & {       // Intersection is used to append multiple type alias.
        color: string;
        mfdate: number;
    }

    const myCar: car = {         // all properties are accesable in myCar object.
        milege: 15,
        brand: 'TATA',
        color: 'red',
        mfdate: 17,
    }










}