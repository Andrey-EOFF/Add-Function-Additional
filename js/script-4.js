// document.querySelector('button').onclick =  () => {
//   console.log(document.querySelector('#one').value);

//   document.querySelector('button').style.backgroundColor = document.querySelector('#one').value;

// }

// document.querySelector('#one').oninput = () => {

//     console.log(document.querySelector('#one').value);
//     document.querySelector('span').innerHTML = document.querySelector('#one').value;
// }

document.querySelector(".btn1").onclick = () => {
  console.log(document.querySelector("#i2").value);
  let myCheckBox = document.querySelector("#i2");

  if (myCheckBox.checked) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

document.querySelector(".btn2").onclick = (event) => {
  event.preventDefault();
  // let text = document.querySelector('#two');
  // console.log(text.value)
  // text.value = 'one';
  let form = document.querySelector("form");
  console.log(form);
  console.log(form.elements.two.value);
  console.log(form.elements.three.value);
};

const button = document.querySelector(".b-1");
const output = document.querySelector(".out-1");
function f1() {
  output.textContent = 1;
}

button.addEventListener("click", f1);

const input2 = document.querySelector(".i-2");
const output2 = document.querySelector(".out-22");

function f2() {
  output2.textContent = 2;
}

input2.addEventListener("click", f2);
