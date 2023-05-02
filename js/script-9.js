

const one = document.querySelector('.text');

one.style.width = '150px';
one.style.paddingBottom = '50px';

console.log(one.style);
one.classList.add('text2');
one.classList.remove('text2');
const toggle = document.querySelector('.toggle');

// toggle.onclick = function () {
//     this.classList.toggle('text2');
// }

console.log(one.getAttribute('data'));
console.log(document.querySelector('link').getAttribute('href'));

one.setAttribute('data-num', 6);


let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
    
    gas[i].onclick = function () {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log(gallons * amount);
    }
}

let a = document.createElement('div');
a.innerHTML = 'hello!';
a.classList.add('text2');
a.onclick = function () {
    alert('Hello');
}
document.querySelector('.test3').appendChild(a);
console.log(a)

console.log('Task-1');
const btn1 = document.querySelector('.btn1');
const out1 = document.querySelector('.out-1')

btn1.onclick = function () {
    out1.style.width = '200px';
    out1.style.height = '90px';
}

console.log('Task-2');

const btn2 = document.querySelector('.btn2');
const out2 = document.querySelector('.out-2')

btn2.onclick = function () {
    this.classList.toggle('bg-orange');
    out2.style.height = '90px';
}


console.log('Task-3');

const btn3 = document.querySelector('.btn3');
const out3 = document.querySelector('.out-3')

btn3.onclick = function () {
    out3.style.height = '90px';
    out3.classList.remove('bg-orange');

}
