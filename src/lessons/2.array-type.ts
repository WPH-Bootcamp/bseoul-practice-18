let x: string[];
x = ["hello", "world"];

let b: number[];
b = [1, 2, 3];
b.push(4);
b.push("Hello");

const c = [1, 2, 3];
c.push(4);

const d = [1, 2, 3] as const;
d.push(4);
