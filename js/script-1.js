function testFunction() {
  const x = 5;
  const y = 10;
  console.log(x + y);
}

function hello() {
  console.log("Hello Andrey");
  testFunction();
}

function testFunction2() {
  function t3() {
    console.log("function t3");
  }
  t3();
  console.log("name testFunction 2");
}

hello();
testFunction2();
// t3(); не будет обнаружена

function unixTime() {
  let time = Math.floor(new Date().getTime());
  console.log(time);
}

unixTime();

function randomInt() {
  const min = 100;
  const max = 300;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(rand);
}

randomInt();
randomInt();

// console.log(randomInt);

// function randomInt() {
//     console.log('Одно название')
// }

let min = 100000;
let max = 300000;

function rand() {
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(rand);
}

rand();

min = 10;
max = 20;
rand();

let c = 9;
function count() {
  c++;
  console.log(c);
}

count();
count();
count();
count();
count();
count();

const out1 = document.querySelector(".out-1");
out1.addEventListener("click", blockWidth);

// out1.onclick = count;

let w = 150;
function blockWidth() {
  w++;
  out1.style.width = w + "px";
}

blockWidth();
console.log("task-1");
console.log("task-2");
console.log("task-3");
