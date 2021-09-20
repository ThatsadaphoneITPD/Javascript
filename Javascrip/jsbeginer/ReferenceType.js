//ojbject
let Name3 = "BeeDev3";
let age1 = 20;
// declare person object as reference
let person = {
    Name3, //or Name3 = "bee"
    age
};
//another way to write this property

//Dot Notation as concise shorter of default choice 
person.Name3 = "John";//change "Beedev3" to john

//Bracket Notation
//use as not know target property of user interface
//they might select the name property to access
//that might have other variable 
//as selectProper
let selectProper = 'Name3';
person[selectProper] = "Mary";// john to Mary

console.log(person.Name3);