var itemList = document.querySelector('#items');
console.log(itemList.parentNode0);
itemList.parentNode.style.backgroundColor = '#f4f4f4';

console.log(itemList.parentElement);

console.log(itemList.lastelementchild);
itemList.lastElementChild.style.backgroundColor = 'yellow';

console.log(itemList.lastChild);

console.log(itemList.createChild);

console.log(itemList.firstChild);

console.log(itemList.firstElementChild);

console.log(itemList.nextSibling);

console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);

console.log(itemList.previousElementSibling);

var newDiv = document.createElement('div');

newDiv.className= 'hello';

newDiv.id = 'hello1';

newDiv.setAttribute('title', 'Hello Div');

var newDivText = document.createTextNode('Hello world');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


console.log(newDiv);



container.insertBefore(newDiv, h1);

