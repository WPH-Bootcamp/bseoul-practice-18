type Cat = {
  meow: () => void;
};

type Dog = {
  bark: () => void;
};

type CutePet = Cat | Dog;

const animal: CutePet =
  Math.random() > 0.5 // melakukan random number
    ? { meow: () => console.log('Meow') } // misalkan true, berarti meow
    : { bark: () => console.log('Bark') }; // misalkan false, berarti bark

// predicat type fungsinya untuk mengembalikan nilai true atau false
function isCat(animal: CutePet): animal is Cat {
  // Mengembalikan true jika animal adalah Cat
  console.log(animal)
  return (animal as Cat).meow !== undefined;
}

if (isCat(animal)) {
  // Di dalam blok ini, TypeScript mengetahui bahwa `animal` adalah Cat
  animal.meow();
} else {
  // Di dalam blok ini, TypeScript mengetahui bahwa `animal` adalah Dog
  animal.bark();
}