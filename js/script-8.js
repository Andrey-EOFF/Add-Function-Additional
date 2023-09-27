// Pure function (чистые функции) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function squad(n) {
  return n ** 2;
}
squad(4);

//NO Pure function (НЕ чистые функции) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const out1 = document.querySelector(".out-1");

function squadNoPure(n) {
  out1.textContent = squad(n);
}

squadNoPure();

// function showAlert() {
//   alert("Hello Alert");
// }
// showAlert();

function year() {
  let today = new Date();
  //   console.log(today);
  let year = today.getFullYear();
  //   console.log(year);
  let time = today.getTime();
  //   console.log(time);
  let day = today.getDate();
  //   console.log(day, year);
}
year();

function hello() {
  console.log("hello");
}
hello.hi = "lll";

console.log(hello.hi);
/////////////////////////////////////////////////////
function pOdd() {
  console.log("odd");
}
function pEven() {
  console.log("even");
}

function myNumber(n, odd, even) {
  if (n % 2 === 0) {
    return even;
  } else {
    return odd;
  }
}

let s = myNumber(5, pOdd, pEven);
console.log(s);
s();
