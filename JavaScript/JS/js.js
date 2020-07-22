// // document.write("Hello world!!!")
// // document.write("Hello there!")
// // window.alert("Is this annoying?")
// // document.write('Learning JavaScript')
// // var x = "string";
// // let y = "anything it wants to be";
// // const myC = "js";

// // function doSomething(){
// //     console.log(bar); // undefined
// //     console.log(foo); // ReferenceError
// //     var bar = 1; 
// //     let foo = 2;
// // }

// // // let a = Array();
// // // let b= Array(10);
// // // let c = Array("Tom", "Bob", "Harry");
// // // let d = Array["Jim", "Bob", "Bam"];

// // const[a,b,c,...rest]=myArr;
// // console.log(myArr[0], myArr[4]);


// // console.log(`This is my array. My first value is ${myArr[0]} and the second value is ${myArr[4]}`)

// // const[a,b,c,d,e] = myArr;
// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log(d);

// // const person = {
// //     firstName: 'Bob',
// //     lastName: 'Gunner',
// //     country: 'UK',
// //     city: 'Dover'
// // };
// // let {firstName, lastName, country, city} = person
// // console.log(`My first name is ${firstName} and my second name is ${lastName} and I live in ${city}`) ;

// // const rgb = [200];
// // const [red = 255, green, blue = 255] = rgb;
// // console.log(`R: ${red}, G: ${green}, B: ${blue}`);

// // let red = 100;
// // let green = 200;
// // let blue = 50;
// // const rgb = [200, 255, 100];
// // [red, green] = rgb;
// // console.log(`R: ${red}, G: ${green}, B: ${blue}`);
// // //output: R: 200, G: 255, B: 50

// function someFunction() {
//     hello = "Billy Bob Joe";
//   }
// someFunction();
// //if --->let<--- hello = "..."   console.log(hello); // ReferenceError: hello is not defined
// console.log(hello); // Billy Bob Joe

// hello = "who is billy?";
// console.log(hello);  // Who is Billy?


// let check = false;

// function changeCheck() {
//   check = true;
// }
// changeCheck();
// console.log(check); // True

// //
// //
// function test() {
//     flag = true;
//     alert(flag);
//     test1();
//     alert(flag);
//   }
//   function test1() {
//     flag = false;
//     return;
//   }
// //   First we invoke test();
// //   We declare a variable called flag and set the value to true - it doesn't contain the keyword let/const therefore we assume it is a global variable
// //   Alert the value of flag --> true
// //   Invoke and drop into test1();
// //   Update the value of flag to false - again it has global scope
// //   Return to previous position in test();
// //   Alert the value of flag --> false.

// //
// //

// function test() {
//     flag = true;
//     alert(flag);
//     test1();
//     alert(flag);
//   }
//   function test1() {
//     let flag = false;
//     return;
//   }
  
// function subCalc(num1, num2) {
//     return num1 - num2;
// }
// console.log(subCalc(345,7462))

// const welcome = function(name, age, gender){
//     return console.log(`My name is ${name}, i am ${age} years old and of gender ${gender}`);
// }
// welcome("Felix Cited", 20, "Male");

// class Pet{
//     constructor(petName){
//         this._name = petName;
//         this._eaten = false;
//     }
//     hungry(){
//         if(!this._eaten){
//             console.log(`${this._name} is hungry`);
//         }else{
//             console.log(`${this._name} has eaten!`);
//         }
//     }
//     eating(){
//         console.log(`${this._name} is eating`);
//         this._eaten = true;
//     }
//     speak() {
//         console.log(`${this._name} says hello`)
//     }
// } 

// let pup = new Pet("Pup-eroni")
// pup.hungry();
// pup.eating();
// pup.speak();
// pup.hungry();

// class Person {
//     constructor(name, gender, age, interests, bio, greeting){
//     this._name = name;
//     this._gender = gender;
//     this._age = age;
//     this._interests = interests;
//     this._bio = bio;
//     this._greeting = greeting;
//     }
//     greetings(){
//         console.log(`${this._greeting}, my name is ${this._name} and i like ${this._interests}`)
//     }
//     buydrinks(){
//         if (this._age >= 18) {
//             console.log(`Im ${this._age}, you dont need to see my id`)
//         }else{
//             console.log(`Sorry you are not old enough to buy a drink`)
//         }
//     }
// }