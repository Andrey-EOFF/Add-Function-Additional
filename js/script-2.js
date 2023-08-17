// console.log("Hello");

// let x = 5;
// let y = 6;
// sum3(1, 2);
// function sum() {
//   console.log(x + y);
// }

// sum();

// x = 100;
// y = 200;
// sum();

// x = 1000;
// y = 2000;

// function sum3(a =0, b=0) {
//   console.log(x + y);
//   console.log(a + b);
// }
// sum3(40, 10);
// sum3(400, 100);
// let r = 77;
// sum3(r, 10);
// sum3(3)

function showSum(elem, x, y) {
  document.querySelector(elem).textContent = x + y;
}

showSum(".out-1", 5, 6);

function showSum2(elem, x, y) {
  elem.textContent = x + y;
}

const out1 = document.querySelector(".out-2");
showSum2(out1, 100, 100);

function showSum3(x, y, elem = ".out-1") {
  console.log(arguments);
  document.querySelector(elem).textContent = x + y;
}
showSum3(10, 10);
showSum3(10, 10, ".out-2");

function showSumAll() {
  // console.log(arguments);
  // console.log(arguments.length);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

showSumAll(3, 7, 11, 20, 70);

function showSumAllMasivMet() {
  let sum = Array.from(arguments).reduce((accum, item) => (accum += item));
  console.log(sum);
}
showSumAllMasivMet(3, 7, 11, 20, 70, 100);

function showSumAllRest(...args) {
  // console.log(args);
  // console.log(args.length);
  // let sum = 0;
  // for (let i = 0; i < arguments.length; i++) {
  //   sum += args[i];
  // }
  let sum = args.reduce((accum, item) => (accum += item));
  console.log(sum);
}

showSumAllRest(3, 7, 11, 20, 70, 100000000);

function showFuncAll(res) {
  document.querySelector(".out-1").innerHTML = `<b>${res}<b>`;
}

function firstFunc(num, drawFunction) {
  drawFunction(num);
}

firstFunc(777, showFuncAll);
