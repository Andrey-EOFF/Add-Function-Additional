const arr = [4, 5, 6, 7, 8, 9];

function pow2(a) {
  return a ** 2;
}
const res = arr.map(pow2);
console.log(res);

const res1 = arr.map((a) => {
  return a ** 2;
});
console.log(res1);

const res3 = arr.map((a) => a ** 2);
console.log(res3);

// FILTER

const resFilter = arr.filter(function (item, index) {
  if (index % 2 === 0) return true;
});

console.log(resFilter);

// FILTER arrow function

const resFilterS = arr.filter((item, index) => index % 2 === 0);

console.log(resFilterS);

const button1 = document.querySelector(".b-1");
const button2 = document.querySelector(".b-2");

button1.addEventListener("click", function () {
  console.log(this);
});

button2.addEventListener("click", () => {
  console.log(this);
});

// /////////////////////////////////////////

const f1 = (...arg) => {
  console.log(arg);
  console.log("WORK");
};

f1(100, 99, 88, 77, 66, 55);
