type Person = {
    id: string;
    name: string;
    hobby: string;
    address: {
        street: string;
    }
}

type PartialPerson = Partial<Person>

// type PartialPerson = {
//   id?: string | undefined;
//   name?: string | undefined;
//   hobby?: string | undefined;
//   address?: {
//       street?: string;
//   } | undefined;
// }


type RequiredPerson = Required<Person> 

// type RequiredPerson = {
//   id: string;
//   name: string;
//   hobby: string;
//   address: {
//       street?: string
//   };
// }

const newPerson: PartialPerson = {
    id: "1",
    name: "Taufik"
}

const newPersonMandatory: RequiredPerson = {
    id: "123",
    name: "Taufik",
    hobby: "computer",
    address: {
        street: "jakarta"
    }
}

console.log(newPerson)