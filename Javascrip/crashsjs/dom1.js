//check window bowser property
console.log(window);
// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// EVENTS
const btn = document.querySelector('.btn');
//btn.style.background = 'red';
// Mouse Event
btn.addEventListener('click', e => {
    //use perventDesfault() to stop click and get click not to flash
  e.preventDefault();
  //use .target to get actual element as id or className
  console.log('Click');
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
const nameInput1 = document.querySelector('#name');
nameInput1.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput1.value);
  console.log(e);
  console.log('Append event input e in container');
});