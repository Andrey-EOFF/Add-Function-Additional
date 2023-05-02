console.log("leson 5");

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// let div = document.querySelectorAll(".one");
// console.log(div);

// // div.style.background = 'red';

// for (let i = 0; i < div.length; i++) {
//   console.log(div[i]);
//   div[i].style.background = "red";
//   div[i].onclick = two;
// }

// function two() {
//   console.log("Work");
// }

// let b = document.getElementsByClassName("one");
// console.log(b);

// for (let i = 0; i < b.length; i++) {
//   b[i].style.border = "3px solid black";
// }

// document.querySelector('.btn5').onclick = () => {
//     let r = document.querySelectorAll('input[type="radio"]');

//     console.log(r);

//     for (let i = 0; i < r.length; i++) {
//         if (r[i].checked) {
//             console.log(r[i].value);
//         }

//     }
// }

// let out = '';
// for (let i = 0; i < 10; i++) {
//     if (i == 6) continue;
//    out += i + ' ';
//     if (i == 8) break;

// }
// document.querySelector('#out').innerHTML = out;

const btn5 = document.querySelector(".btn-5");
const out5 = document.querySelector(".out-5");

function t5() {
  let str = "";
  for (let i = 1; i <= 16; i++) {
    str += i + "_";
  }
  out5.innerHTML = str;
}

btn5.addEventListener("click", t5);

const btn51 = document.querySelector(".btn-5_1");
const out51 = document.querySelector(".out-5_1");

function t51() {
  let str = "";
  for (let i = 12; i <= 38; i = i + 2) {
    str += i + "_";
  }
  out51.innerHTML = str;
}

btn51.addEventListener("click", t51);

const btn52 = document.querySelector(".btn-5_2");
const out52 = document.querySelector(".out-5_2");

function t52() {
  let str = "";
  for (let i = 25; i >= 7; i--) {
    str += i + "_";
    console.log(str);
  }
  out52.innerHTML = str;
}

btn52.addEventListener("click", t52);
