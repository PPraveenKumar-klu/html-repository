// // 1. var, let and const keywords


// // 2. arrow functions
// function add(a, b) {
//     return a + b;
// }


// document.writeln(add(10,20));

// // nameless/ anonymous function / expression function
// const add1 = function(a, b) {
//     return a + b;
// };

// document.writeln(add1(100,200));


// const add2 = (a,b)=> {
//     return a+b;
// }


// const add3 = (a,b)=> {
//     return (a+b);
// }

// document.writeln(add3(20,30));

// // 3.destructuring operator

// // destructuring of an array
// let arr = [10,20,30,40,50];

// const [a,b,c] = arr;
// document.writeln("a = "+a+ " b= "+ b+ " c= "+ c);

// // destructuring of an object

// let Person = {
//     'name' : "Hari",
//     'city' : "Hyderabad",
//     'country' : "India"
// }

// let {name, city} = Person;

// document.writeln("name = "+name+ " city= "+ city);


// 4. spread operator (...)

// let a = [1,2,3,4,5];

// let b = [6,7,8,9,10];

// // a.push(20);
// let arr1 = a; // old way

// let arr2 = [...a];

// document.writeln(a+"  "+arr1+"  "+arr2);


// let combinedArray = a.concat(b); // old way
// let combinedArray1 = [...a, 20, ...b,30,40] //new way
// document.writeln("combinedArray = "+combinedArray);
// document.writeln("combinedArray1 = "+combinedArray1);


// // 5 .Template Literal

// let name = "Ravi";
// let age = 20;

// document.writeln("Name is "+name+" age is :"+age+"<br>"); // old way
// document.writeln(`Name is : ${name} and age is ${age} <br>`); // using template literal


// const person = {
//     'name' : "kiran",
//     'age' : 25
// }

// document.writeln("Name is :"+person.name+" age is :"+person.age+"<br>");

// document.writeln(`${JSON.stringify(person)}. Name is : ${person.name}`);


// 6 . classes in JS

class Person {
    // 'name' : "kiran",
    // 'age' : 25
    constructor(name,age){
        this.name = name;
        this.age = age; 
        document.writeln("Person object created <br>");
    }
    walk = function() {
        document.writeln("person is walking");
    }
}

const p1 = new Person("kiran",25); // object will get created.
p1.walk();
document.writeln(`Name is : ${p1.name} and age is ${p1.age} <br>`); //?

