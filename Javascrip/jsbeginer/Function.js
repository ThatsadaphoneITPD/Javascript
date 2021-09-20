//declare function keywor with name
// and parametwe name as input
//thid function is performing a task 
function greet(name, lastName) {
    console.log('Hello Duce, ' + name + ' ' + lastName);
    alert('Hi, USER ' + name + ' ' + lastName)
}

//calculating a valuse
function square(Number){
    return (Number * Number) / 2;
    
}

greet('Bee', 'Big-bro');
console.log('Calculat = ', square(4));
//alert output in website
alert(square(5));

// use function to display in HTML after body below
//document.body.innerHTML = 'Calculate = ' + square(5);