// this is wrong approach
function sumWithCallback(a: number, b: number, cb: Function) {
  cb(a + b);
}

sumWithCallback(1, 2, (sum) => console.log(sum));

type SumCallback = (sum: number) => void;

// this is correct approach
function sumWithCallback2(a: number, b: number, cb: SumCallback) {
  cb(a + b);
}

sumWithCallback2(1, 2, (sum) => console.log(sum));

document.querySelector("#app")!.addEventListener("click", (event) => {
  console.log(event);
});

const callback = (sum: number) => console.log(sum);
sumWithCallback2(1, 2, callback);

const eventListenerCallback = (event: Event) => {
  console.log(event.target);
};

document
  .querySelector("#app")!
  .addEventListener("click", eventListenerCallback);

const myArray = [1, 2, 3, 4, 5];

const myFunction = (item: number) => {
  console.log(item);
};

myArray.forEach(myFunction);
