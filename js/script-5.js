const array = [3, 4, 5, 8, 1, 9];
const out1 = document.querySelector(".out-1");
const out2 = document.querySelector(".out-2");
const out3 = document.querySelector(".out-3");

function f1(arr, myFunc, block) {
  arr[2] = arr[2] * 2;
  myFunc(arr, block);
}

function callbackFunc(arrcall, blockcall) {
  let out = "";
  for (let i = 0; i < arrcall.length; i++) {
    out += arrcall[i] + "--";
  }
  blockcall.innerHTML = out;

  // //////////////////////////////////////////////////////

  //   let out = "";
  //     for (const arr of array) {
  //         out += arr + ' ';
  //     }
  //     out1.innerHTML = out;

  // ////////////////////////////////////////////////

  // out1.innerHTML = array;
}

f1(array, callbackFunc, out1);
