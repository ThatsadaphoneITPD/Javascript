//alert("Helle Builder")
//constant String, number boolean and null
const name4 = "Hui";
const age = 32;
//concatenation 
console.log(`My name ${name4} and age ${age}`);
//template string by backtick ` `
const Greeting = `My name ${name4} and Age ${age}`;
console.log(Greeting);
//Properties and Methods()
//get index number by .length
console.log(Greeting.length);
//method toUpperCase() and low()
const S = 'Hello New World';
console.log(S.toUpperCase());
console.log(S.toLowerCase());
console.log(Greeting.toUpperCase());
//method substring() form index to where index
console.log(S.substring(0,5));
console.log(S.substring(0,5).toUpperCase());
//method spilt('')
console.log(S.split(''));
//try to spilt(',') or move , out//very handy in database
const Sr= 'item, index, code,to split'
console.log(Sr.split(','));
//Array - Variables to hold multiple values
const fruits = ['Apple', 'Orange', 'preas'];
//add metods item in array
//1st way and 2nd push()
fruits.push('Mangos');
fruits[3] = 'Corns';
console.log(fruits);
//add new item in frist index of Array
fruits.unshift('Straberry');
//pop remove the last item in array
fruits.pop();
console.log(fruits);
//selection item in array
console.log(fruits[1]);
//chech something in array
console.log('Chech fruits in Array: '+ Array.isArray(fruits));
console.log('Chech str Hello in Array: '+ Array.isArray('Hello'));
//Get index of certain value
console.log('search item in array' + fruits.indexOf('Orange'));
console.log(fruits);
//object literals
const person = {
    name1: 'Bee',
    Age: 22,
    //array in object
    hobbies: ['Music', 'Anime', 'AI chartbot'],
    //object in object
    address:{
        street:'50 main st',
        city: 'Da Nang',
        state: 'vietnam'
    } 
}
//alert(person);//it will display obj Obj
console.log(person);
//select item in object
console.log('Check person name: ' + person.name1, person.Age);
//select 2nd index item of array in object
console.log(person.hobbies[1]);
//select 2nd index item of object in object
console.log(person.address.state);
//want those value in person as actual vaiable, could use const
//not assigning item but pulling these out 
const { name1, Age, address: {city}} = person;
//pull value out as actual var
console.log(name1);
//part ps6 as embedded object in actual vaiable as advance
console.log(city);
//add property in object
person.email = 'DayerirenW@gmail.com'
console.log(person);
//deal with arrays of objects
//create array todos with objects
const todos = [
    {
        id: 1,
        text: 'Take out box',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Date My GL out',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Depart to airport',
        isCompleted: false
    }
];
//test in conslo
console.log(todos);
//select 2nd index item object with special obj
console.log(`Select Obj in Arr: ${todos[1].text} `);
//Jason is a data format, that use int full stack Dev and API to sever
//this whole array todos as Bracket
//now this todos array, will be convert into Jason with script
const todoJSon = JSON.stringify(todos);
//check in console
console.log(todoJSon);

//For loop
for(let i = 0; i <= 5; i++){//use = after < for include 5 too
    console.log(`For Loop Number: ${i}`);
}
//While Loop
//declare variable outside loop
let i = 0;
//set condition 
while(i < 5){
console.log(`While Loop i in 5 Number ${i}`);
//must have increment i++ to end loop
i++;
}
//Loop the array
//how to loop array Todos
//Methods to loop array
//best
for(let i=0; i < todos.length; i++){
    console.log(`For Loop Todos array: ${todos[i].text}`);
}
//readable stucture of loop array
//given todo var of array todos
for(let todo of todos){
    console.log(`Readable loop array: ${todo.id}`);
}
//Next High Order Array menthods of interation with array
//forEach ,map, filter
//to creat new array base on condition

//array todos forEach, these high order array methods
//forEach
todos.forEach(function(todo){
    // take in as a parameter function then callback function 
    //take multi paramenter but frist one as var we want use as each item
    console.log(todo.text);
});
//map to return new array
const todoText = todos.map(function(todo){
    return todo.text;//this will retrun whole new array
});
console.log(todoText);
//fikter to return new array
const todoTextDone = todos.filter(function(todo){
    return todo.isCompleted === true;//retrun whole new array there is true
});
console.log(todoTextDone);
//functional programing data
//Let's chain two function to return new array
const todoChain = todos.filter(function(todo){
    return todo.isCompleted === true;//retrun whole new array there is true
    //let's chain this filter with map
}).map(function(todo){
    return todo.text;//get text. if ture 
})
console.log(todoChain);

//Conditional
//If..Else..
//declare value x y
const x = 10;
const y = 13;
// signh == is mean just equl if change 10 into str but still ture
// signh === is mean datatype if change 10 into str will false
if(x == 10){
 console.log(`x is ${x} `);
}else{
    console.log('x value is not 10');
}
//most devper use this triple equal
//bc can match erorr actual datatype
//use === condition
const x1 = '10';
if(x1 === 10){//this will return nothing
    //case of x1 not datatype as int but is str
    console.log('X1 is 10 int');
} else{
    console.log('x1 is not int datatype');
}
//multiple condition 
//by using signh || as or
//wether one of two case ture will return value
if(x > 11 || y > 12 ){
 console.log('X more than 11 or y more than 12');
}
//by using signh && calls end as double ampersand 
//both two cases must be ture, so it will return value
if(x > 11 && y > 12 ){
    console.log('both double ampersand of X more than 11 or y more than 12');
} else if (x > 9 && y > 10){
    console.log('both double ampersand of X more than 9 and y more than 10');
}else{
    console.log('one or both XY is not greater anything');
}
//Nesting If.. statements
//Nesting If eqaul && IF and && is cleaner than  below
if(x > 5){
    if(y>10){
        console.log('both Nested condition of X more than 5 and y more than 10');

    }
}
//Ternary operator
//Next format of using Ternary operator by signh mark of ?
//declare new x
const x2 = 10;
//given color and question mark as ? represent 'Then this is ture?'
//x2 >10 ? is if condition then variable Red else Blue 
const color = x2 > 10 ? 'Red False' : 'Blue True';
console.log(`Get color if X2 > 10? : ${color} `);

//Switches 
//way to evaluate condition 
//use color above to evaluate by switch
//or declare new color1
const color2 = 'green';
//we can use both conditions color or color2 in switch
switch(color){
    //declare each case of color
    case 'Red False':
        console.log('color is red');
        break;
    case 'Blue True':
        console.log('color is blue');
        break;
    default:
        console.log('color Not Red or Blue');
        break;
}

//Function
//Next using Function

function addNum(Num1, Num2){
    console.log(Num1 + Num2);
}
//call function
addNum(1,2)
//set default value in func's paramenter
function addNum2(Num1 = 5 , Num2 = 3){
    console.log(Num1 + Num2);
}
//if have nothing, it will pass default value
addNum2()
//overwirte the default value if we put value
addNum2(60, 8)

//most using return in function on cosole
function addNum3(Num1 = 5 , Num2 = 3){
    return Num1 + Num2;
}
//but addNum3 will not print in cosole
console.log(addNum3(5,23));

//Arrow function sytle as datatype fucn => as a fat arrow
//using as equal sign
//not need assigned var or curly brace {}
const addNum4 = (Num1 = 1, Num2 = 5) => {
    console.log(Num1 * Num2);
}
addNum4(5, 9)
// Arrow fucn woth no curly brace {}
const ArrowfuncNoCurlyBrace = (Num1 = 1, Num2 = 5) => Num1 * Num2;
console.log( ArrowfuncNoCurlyBrace(2, 6));

//Use arrow function Array of todos 's item text
todos.forEach((todo) => console.log(todo.text))

//Object-Oriented or OOP
// declare constructor function as pototype to construct object
//declare person object
function Person(fristName, lastName, Age3, BD){
    //set parameter as object's perporties
    this.fristName = fristName;
    this.lastName =lastName;
    this.Age3 = Age3;
    //trun Bridata object str into date obj
    //by use New Data()
    this.BD = new Date(BD);
    //other way we can add methods fucntion
    this.getBirthYear = function(){
        return this.BD.getFullYear();
    }   
    this.getFullName = function(){
        return `${this.fristName} ${this.lastName}`;
    }
}
//we can attach metods and proerty to prototype func
//by not use or not have function within constructor 
Person.prototype.getbirthyear = function(){
    return this.BD.getFullYear();
}
Person.prototype.getfullname = function(){
    return `${this.fristName} ${this.lastName}`;
}
//Instantiate object Person
//create var and new Person array
//created a custom perosn construntor
//Birdate in sting but can turn to date obj by new Date(Birdate)
const Person1 = new Person('Free guy', 'Dude', 23, '3-20-1999');
console.log(Person1);
console.log('Person: '+ Person1.fristName);
//get actual date obj then use any methods to convert to year 
console.log('Person Year: '+ Person1.BD.getFullYear());
//test built-in method in constructor
console.log(`Call Person constuctor's func: Year of ${Person1.getBirthYear()}, FullName: ${Person1.getFullName()}`);
//test built-out of prototype obj method out of con
console.log(`Call Pototype's func: Year of ${Person1.getbirthyear()}, FullName: ${Person1.getfullname()}`);

//Class
//create Dog
class Dog {
    //declare constructor 
    constructor(fristName, lastName, Age3, BD){
        //set parameter as object's perporties
        this.fristName = fristName;
        this.lastName =lastName;
        this.Age3 = Age3;
        //by use New Data()
        this.BD = new Date(BD);
    }
    //add any method in class
    getDogYear(){
        return this.BD.getFullYear();
    }   
    getDogName(){
        return `${this.fristName} ${this.lastName}`;
    }
}
const Dog1 = new Dog('DogBoss', 'Dude', 13, '3-20-2002');
console.log(Dog);
//test Class method
console.log(`Call Class's func: Year of ${Dog1.getDogYear()}, FullName: ${Dog1.getDogName()}`);