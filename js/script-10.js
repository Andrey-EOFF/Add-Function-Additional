let t = 0;

function f1() {
  t++;
  console.log(t);

  if (t === 100) {
    return;
  }
  f1();
}

// f1();
function f2() {
  let out = "";
  for (let i = 1; i < 30; i++) {
    out += i + " ";
  }
  console.log(out);
}

f2();

let i = 0;
let out = " ";

function f3() {
  i++;
  out += i + " ";

  if (i > 50) return;
  f3();
}

f3();
// console.log(out);

function factorial(n) {
  if (n === 0) {
    return 1; // Базовий випадок: факторіал 0 дорівнює 1
  } else {
    return n * factorial(n - 1); // Рекурсивний виклик функції з меншим значенням
  }
}

// console.log(factorial(6)); // Виведе 120 (5! = 5 * 4 * 3 * 2 * 1)

function fibonacci(n) {
  if (n <= 1) {
    return n; // Базовий випадок: для n <= 1, число Фібоначчі дорівнює n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2); // Рекурсивний виклик функції для попередніх двох чисел
  }
}

// console.log(fibonacci(3));
// console.log(fibonacci(10));

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let s1 = 0;
function moneyRec() {
  let m = randomInteger(0, 100);
  console.log("add " + m);
  s1 += m;
  console.log("sum " + s1);
  if (s1 >= 300) return;
  moneyRec();
}

// moneyRec();

function moneyCycel() {
  let s2 = 0;
  for (let i = 0; true; i++) {
    let m = randomInteger(0, 100);
    console.log("add " + m);
    s2 += m;
    console.log("sum " + s2);
    if (s2 >= 300) return;
  }
}

// moneyCycel();


