console.log("leson 6");

// let out = document.querySelector(".out");
// console.log(out);

// for (let i = 0; i < 5; i++) {
//   for (let k = 0; k < 10; k++) {
//     out.innerHTML += k;
//   }

//   out.innerHTML += "<br>";
// }

// for (let i = 1; i < 10; i++) {

//   for (let k = 1; k < 10; k++) {
//     out.innerHTML += `${i}*${k}=${k * i}<br>`;

//   }
//   out.innerHTML += '<hr>';
// }

console.log("Tack-1");

let out1 = document.querySelector(".out1");

for (let i = 0; i < 3; i++) {
  for (let k = 0; k < 3; k++) {
    out1.innerHTML += "*";
  }
  out1.innerHTML += "_";
}

console.log("Tack-2");

let out2 = document.querySelector(".out2");

for (let i = 1; i <= 3; i++) {
  out2.innerHTML += `${i} <br>`;
  for (let k = 0; k < 3; k++) {
    out2.innerHTML += "*_";
  }

  out2.innerHTML += "<br>";
}

console.log("Tack-3");

let out3 = document.querySelector(".out3");

for (let i = 0; i < 4; i++) {
  out3.innerHTML += "<br>";

  for (let i = 0; i < 3; i++) {
    out3.innerHTML += "*_";
  }
}
