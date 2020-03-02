let box = document.getElementById('userParams'),
div = document.createElement('div'),
text = document.createTextNode('Тут был я!');

div.classList.add('skills');

document.body.appendChild(div);

document.body.removeChild();

document.body.innerHTML = 'Текст появился по волшебству';

console.log(div);