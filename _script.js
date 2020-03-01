let box = document.getElementById('userParams'),
div = document.createElement('div'),
text = document.createTextNode('Тут был я!');

div.classList.add('skills');

document.body.appendChild(div);

document.body.removeChild();

console.log(div);