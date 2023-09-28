let a = 10;

function f1() {
  console.log("global - " + a);
}
// f1();
// a = 99;
// f1();

//////////////////////////////////////

function f2() {
  let a = 333;
  console.log("local - " + a);
}
// f2();
// f1();

//////////////////////////////////////

function createStep(n = 0) {
  let count = n;

  return function () {
    count++;
    console.log(count);
  };
}

let step1 = createStep();
let step2 = createStep(200);
// step1();
// step1();
// step1();
// step2();
// step2();
// step2();
// step1();
// step1();

////////////////////////////////////////////////////////////////

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function closedBeg() {
  let s = 0;
  return function beggar() {
    s += randomInteger(0, 100);
    console.log(s);
    if (s >= 250) return;
    beggar();
  };
}

let beg = closedBeg();
let beg1 = closedBeg();
// beg();
// console.log("======================");
// beg1();

//////////////////////////////////

