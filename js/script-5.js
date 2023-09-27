const array = [3, 4, 5, 8, 1, 9, 0];
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
    out += arrcall[i] + "-";
  }
  blockcall.innerHTML = out;
}

function callbackFunc2(arrcall, blockcall) {
  let out = "";
  for (let i = 0; i < arrcall.length; i++) {
    out += arrcall[i] + "*";
  }
  blockcall.innerHTML = out;
}

f1(array, callbackFunc, out1);
f1(array, callbackFunc2, out2);

function squad(item) {
  return item ** 2;
}

// const arr2 = array.map(squad);
// callbackFunc(arr2, out3);

const arr2 = array.map((item) => item ** 2);
callbackFunc(arr2, out3);

// callback!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// async function pageLoader(callback) {
//   const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   callback(data);
// }
// function pageLoader(callback) {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => callback(json));
// }

// function getAjax(data) {
//   console.log("Запит");
//   console.log("Відповідь сервера");
//   console.log(data);
// }
// pageLoader(getAjax);

// Без колбека!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function pageLoader() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => {
//       console.log("Запит на сервер");
//       console.log("Відповідь сервера");
//       console.log(json);
//       fetch("https://jsonplaceholder.typicode.com/users/" + json.userId)
//         .then((respons) => respons.json())
//         .then((json) => {
//           console.log("Запит на сервер");
//           console.log("Відповідь сервера");
//           console.log(json);
//         });
//     });
// }

// pageLoader();

// UPDATE WHITH CALLBACK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const urlTest = "https://jsonplaceholder.typicode.com/todos/1";

function pageLoader(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => callback(json));
}

function getAjax(data) {
  console.log("Запит");
  console.log("Відповідь сервера");
  console.log(data);
  pageLoader(
    "https://jsonplaceholder.typicode.com/users/" + data.userId,
    showUser
  );
}

function showUser(user) {
  console.log(user);
}
pageLoader(urlTest, getAjax);
