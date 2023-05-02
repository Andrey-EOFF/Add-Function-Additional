console.log("Start Lesson 3");

let a = 7;

if (a !== 9) {
  // console.log('Это правильно')
} else {
  // console.log('Это НЕ ВЕРНО')
}

const buttonOk = document.querySelector(".btn-age");
const inputAge = document.querySelector(".age");

buttonOk.onclick = () => {
  let num = +inputAge.value;
  console.log(num);
  if (num >= 16 && num < 60) {
    console.log("Welcome");
  } else if (num > 60) {
    console.log("Оно тебе нужно???");
  } else {
    console.log("Вийди звидси розбыйник");
  }

};

let b = 10;
console.log(b < 11 && b > 5);

console.log('lesson 1')
const btnGo = document.querySelector('.btn1');
const inputNumber = document.querySelector('.number1');
const out1 = document.querySelector('.out-1');

btnGo.onclick = () => {

  let a = +inputNumber.value;
  if ( a == 4 ) {
    out1.innerHTML = true;
  }
  else {
    out1.innerHTML = false;
  }
  };
   
  console.log('lesson 2');

  const btn2 = document.querySelector('.btn-2');
  const out2 = document.querySelector('.out-2');
  let a21 = 111; 
  let a22 = 7;
  
   btn2.onclick = () => {
        if (a21 > a22) {
          out2.innerHTML = a21;
        }
        else {
          out2.innerHTML = a22;
        }
      };




  console.log('lesson 3');

  const button = document.querySelector('.b-3');
  const output = document.querySelector('.out-3');
  const input1 = document.querySelector('.i-31');
  const input2 = document.querySelector('.i-32');

  function f3 () {

    let a = input1.value;
    let b = input2.value;

    if (a > b) {
      output.innerHTML = a;
    }
    else {
      output.innerHTML = b;
    }
  }
  button.onclick = f3;