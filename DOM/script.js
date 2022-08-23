var h1Element = document.querySelector('h1');
h1Element.style.color = 'blue';
var bodyElement = document.querySelector('body');
var isYellow = false;
/*setInterval (function(){
if (isYellow) 
bodyElement.style.background = 'white';
else bodyElement.style.background = 'yellow';
isYellow = !isYellow
},1000);*/
var pElement = document.getElementById('pId');
console.log(pElement);
var bElement = document.getElementsByClassName('background');
console.log(bElement);
console.log(bElement[1]);
var gElement = document.getElementsByTagName('p');
console.log(gElement);
var allElement = document.querySelectorAll('p');
console.log(allElement);
allElement.style.color = 'blue';