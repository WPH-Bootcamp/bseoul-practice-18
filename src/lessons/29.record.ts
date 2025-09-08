type Person = {
    name: string;
    age: number;
}

type PeopleGroupedByName = {
    [index: string]: Person[]
}

const newPersonMandatory: PeopleGroupedByName = {
    Bandung: [
        {
            name: "Taufik", age: 23
        },
        {
            name: "Random A", age: 20
        },
    ],
     Jakarta: [
        {
            name: "Taufik", age: 23
        },
        {
            name: "Random A", age: 20
        },
    ]
}

console.log(newPersonMandatory)


type PeopleGroupedByNameRecord = Record<string, Person[]>

const newPersonMandatory2: PeopleGroupedByNameRecord = {
    Bandung: [
        {
            name: "Taufik", age: 23
        },
        {
            name: "Random A", age: 20
        },
    ],
     Jakarta: [
        {
            name: "Taufik", age: 23
        },
        {
            name: "Random A", age: 20
        },
    ]
}

console.log(newPersonMandatory2)

// daripada seperti ini...
type Person3 = {
    [P in 'firstName' | 'lastName']: string;
}

const personObj: Person3 = {
    firstName: "Taufik",
    lastName: "Mulyawan"
}

console.log(personObj)

type person4 = Record<'firstName' | 'lastName', string>;

const personObj2: person4 = {
    firstName: "Taufik",
    lastName: "Mulyawan"
}

console.log(personObj2)


type Data = Record<string, | number | boolean | string>

const datamix: Data = {
    nama: "Taufik", // nama (string), "Taufik" (string)
    count: 10, // count (string), 10 (number)
    active: true // // active (string), true (boolean)
}

type User = Record<"id" | "name" | "age" | "email" | "success", string | number | boolean>

const u: User = {
    id: "123",
    name: "Taufik",
    age: 23,
    email: "taufik@gmail.com",
    success: true
}

console.log(u)