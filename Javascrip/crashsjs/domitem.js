// MANIPULATING THE DOM as dynamic 
const ul = document.querySelector('.items');
console.log(ul);
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

