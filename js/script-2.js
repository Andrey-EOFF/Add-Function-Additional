console.log('Start');

let a = 6;
let b = 'Hello';
// console.log(a);


let inputIn = document.querySelector('.input-in');
let buttonGo = document.querySelector('.btn-go');
let inputInfo = document.querySelector('.out');


buttonGo.onclick = function () {
    // console.log('button work');
    // console.log(inputIn.value);
    let valueInput = inputIn.value; //let valueInput = +inputIn.value; (+ переводит в числа)
    console.log(valueInput);
    inputInfo.innerHTML = valueInput;
    inputIn.value = ' ';
}


