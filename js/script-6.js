const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const out1 = document.querySelector(".out-1");
const out2 = document.querySelector(".out-2");
const out3 = document.querySelector(".out-3");

let count = 0;

function f1() {
  console.log(count);
  console.log(this);
  this.textContent = count;
  count++;
}

btn1.addEventListener("click", f1);

const f2 = () => {
  console.log(count);
  console.log(this);
  //   this.textContent = count;
  count++;
};

btn2.addEventListener("click", f2);

// call !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// f1.call(document.querySelector(".btn1"));
// f1.call(document.querySelector(".btn1"));
// f1.call(document.querySelector(".btn2"));

function f3(count) {
  console.log(count);
  console.log(this);
  this.textContent = count;
}

btn3.addEventListener("click", () => {
  count++;
  f3.call(btn2, count);
});

function sum1(a, b) {
  this.innerHTML = a + b;
}

const arrx = [10, 5];
btn2.addEventListener("click", () => {
  sum1.call(out1, 10, 5);
  sum1.apply(out2, arrx);
});

////////bind !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const f4 = f1.bind(out3);
f4();

btn4.addEventListener("click", f4);

const sum2 = sum1.bind();
