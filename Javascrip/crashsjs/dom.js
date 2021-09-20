


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput2 = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  //stop flash a value
  e.preventDefault();
  
  //condition input'A Value have or not
  if(nameInput2.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    //checking console
    console.log('you donot input any value');
    // Remove error after 3-6 seconds Messager
    setTimeout(() => msg.remove(), 6000);
  } else {
    //if have value then
    // Create new list item with user on html
    const li = document.createElement('li');
    //check on console
    console.log('have Create element list items into new li');
    console.log(li);
    // Add text node with input values on html
    li.appendChild(document.createTextNode(`Name: ${nameInput2.value}; Email: ${emailInput.value}`));

    // Add HTML
    //li.innerHTML = `<strong>${nameInput2.value}</strong>e: ${emailInput.value}`;

    // Append to ul affter id="users"
    userList.appendChild(li);

    // Clear fields
    //after done create and append in userlist 
    // it will delete input value into text input
    nameInput2.value = '';
    emailInput.value = '';
  }
}