// let func1 = document.querySelector(".func1");
// function one() {
//   console.log("Work");
// }

// one();

// // func1.onclick = one;

// // func1.onclick = function () {
// //     console.log('hello')
// // }

// func1.onclick = () => {
//   console.log("hello");
// };

// console.log(1 + one());
// console.log(one());

// function two() {
//   console.log("Work f2");
//   return 54;
// }

// two();
// console.log(10 + two());

// let a = 10;
// let b = 9;

// function multi() {
//   // console.log(a * b);
//   return a * b;
// }
// let c = multi();
// let c2 = 10 * multi();
// console.log(c, c2);

// function multi2(gg = 2, ff = 3) {
//   return gg * ff;
// }

// console.log(multi2(4, 5));
// console.log(multi2(20, 5));
// console.log(multi2(4, a));

// console.log(multi2());

// let func2 = document.querySelector(".func2");

// func2.onclick = function () {
//   console.log("work anonim function");
// };

// func2.onclick = () => {
//   console.log("work anonim function two");
// };

// function cg(a, b) {}

// (a, b) => { };
// a => { };

// // function () {
// //     return 'Hello'
// // }

// () => 'Hello'

console.log("Task-1");

let btn1 = document.querySelector(".btn1");
let out1 = document.querySelector(".out-1");

let a1 = 111;

function f1() {
  out1.innerHTML = a1;
}
btn1.onclick = f1;

console.log("Task-1");

let btn2 = document.querySelector(".btn2");
let out2 = document.querySelector(".out-2");

function f2() {
  let a2 = 222;
  return a2;
}

function out() {
  out2.innerHTML = f2();
}
btn2.onclick = out;

console.log("Task-1");

let btn31 = document.querySelector(".b-3-1");
let btn32 = document.querySelector(".b-3-2");
let out3 = document.querySelector(".out-3");

function t3(a, b) {
  return a * b;
}
btn31.onclick = function () {
  out3.innerHTML = t3(2, 3);
};

btn32.onclick = function () {
  out3.innerHTML = t3(5, 7);
};
