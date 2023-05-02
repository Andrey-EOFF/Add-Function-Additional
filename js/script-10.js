// let a = 'Andriy';
// let b = '35';
// let s10 = 'Aquarius';

let info = ["Andrey", "35", "Aquarius", "February"];
// let man = ['Andriy', 'male', '184', '82', '35'];

// console.log(info);
// console.log(info.length);

// console.log(man);
// console.log(man.length);

// console.log(man[4]);

// man[0] = 'Serg';
// console.log(man);

let a = [1, 2, 3, 4, 5];
console.log(a);

// let t = a[0];
// a[0] = a[a.length - 1];
// console.log(a);
// a[a.length - 1] = t;
// console.log(a);

// console.log(a[888]);

// for (let i = 0; i < info.length; i++) {

//     document.querySelector('.out-1').innerHTML += info[i] + ' ';

// }

// let out = " ";
// for (let i = 0; i < info.length; i++) {
//   if (info[i] === "35") {
//     out += info[i] + " ";
//   }
// }
// document.querySelector(".out-1").innerHTML = out;

let b = [4, 15, 6, 25, 7, 2, 35, 5, 10];
let max = b[0];
for (let i = 0; i < b.length; i++) {
  if (b[i] > max) {
    max = b[i];
  }
}
console.log(b);
console.log("max:" + max);

let sum = 0;
for (let i = 0; i < b.length; i++) {
  sum = sum + b[i];
}
console.log(b);
console.log("sum:" + sum);

console.log("Task-1");

let info1 = ["Andrey", "35", "Aquarius", "February", true];
console.log(info1);

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const out1 = document.querySelector(".out-1");
const out2 = document.querySelector(".out-2");

btn1.onclick = function () {
  let out = " ";
  for (let i = 0; i < info1.length; i++) {
    out += info1[i] + " ";
  }
  out1.innerHTML = out;
};

console.log("Task-2");

btn2.onclick = function () {
  info1[0] = "Sergsdsdsd";
  out2.innerHTML = `<p>Name - ${info1[0]}</p><p>Years - ${info1[1]}</p><p>Zodiak - ${info1[2]}</p><p>Month - ${info1[3]}</p><p>Bule - ${info1[4]}</p><div>Length - ${info1.length}</div>`;
};

console.log("Task-3");
