console.log("Hello Andriy!!!");

console.info("Hello !!!" + ' Добавил');

// alert('Hello'); // ctrl+l


document.getElementById('out').innerHTML = 'GGG';
document.getElementById('out').innerHTML = 'Привет, пробуем innerHTML';
document.getElementById('out').innerHTML = '<p>Добавили параграф</p>';

document.querySelector('.texttwo').innerHTML = 'Change text';
document.querySelector('#one').innerHTML = 'Change content';


let a = document.querySelector('#one');
a = document.getElementById('out');

a.innerHTML = '99999';

let header =document.querySelector('.text-content');

header.innerHTML = 'JavaScript-start'