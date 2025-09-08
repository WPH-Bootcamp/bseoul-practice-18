let a = 1;
const b = 1;

let c = 1 as const;
c = 2;
c = 1;

const nums1 = ["1", "2", "3"];
const nums2 = ["1", "2", "3"] as const;

const a = nums2[1];
nums2[0] = "4";

const SKILL_LEVELS = ["Beginner", "Intermediate", "Expert"] as const;

type Person = {
  skillLevel: (typeof SKILL_LEVELS)[number];
};

SKILL_LEVELS.forEach((skillLevel) => console.log(skillLevel));

const person = {
  name: "John",
  age: 28,
  address: {
    street: "123 Main St",
  },
} as const;

person.name = "Jane";
person.address.street = "456 Main St";
