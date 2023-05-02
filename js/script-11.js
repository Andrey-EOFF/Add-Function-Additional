// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const b = ['a', 'b', 'c', 'd', 'e', 'f'];

// console.log(a.length);
// a.push(10, 11, 12, 13, 14, 15);
// console.log(a);
// console.log(b);
// b.push('i', 'k');
// console.log(b);

// b.pop();

// console.log(b)
// console.log(b.pop());

// // delete a[3];
// console.log(a);
// a.splice(3, 7, 'hi');
// console.log(a);

console.log("Task-1");

const d1 = [33, "best", 66, "best"];
console.log(d1);
d1.pop();
console.log(d1);

let input1 = document.querySelector(".i-1");
let button1 = document.querySelector(".b-1");
let output1 = document.querySelector(".out-1");

function f1() {
  let inputValue = input1.value;
  d1.push(inputValue);
  showArr(d1, output1);
}

// function showArr(arr, output) {
//     output.innerHTML = arr.join(', ');
// }

button1.addEventListener("click", f1);

console.log("Task-2");

let output2 = document.querySelector(".out-2");

function f2() {
  d1.pop();
  showArr(d1, output2);
}

function showArr(arr, output) {
  output.innerHTML = arr.join(", ");
}

f2();

console.log("Task-3");
