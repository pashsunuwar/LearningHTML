// class Dog extends Pet {
//     constructor(name, tricks) {
//       super(name); // Calls the super constructor and assigns the attribute.
//       this._tricks = tricks;
//     }
//     play() {
//       console.log(`${this._name} wants to show you his tricks!`);
//     }
  
//     tricks() {
//       console.log(`${this._name} can do a ${this._tricks}`);
//     }
//     speak() {
//       super.speak();
//       console.log(`WOOOOOOOOOF`); // Overrides parent function call();
//     }
//   }
  
//   let doggy = new Dog("Bark Wahlberg", "Backflip");
//   doggy.hungry();
//   doggy.speak();

// class Teacher extends Person {
//     constructor(name, gender, age, interests, bio, greeting){
//         super(name, gender, age, interests, bio, greeting);
//     }
// }

// class Student extends Person {
//     constructor(name, gender, age, interests, bio, greeting){
//         super(name, gender, age, interests, bio, greeting);
//     }
// }
// let person1 = new Person


// let mathsteacher = new Teacher("Mr Adams", "Male", 37, "rugby", "I teach maths", "Hello")
// mathsteacher.greetings();
// mathsteacher.buydrinks();

// let newstudent = new Student("Bee", "Female", 7, "painting", "I like food", "Hiiii")
// newstudent.greetings();
// newstudent.buydrinks();

// function multiply(x){
//     return function (y) {
//         return x*y;
//     }
// }

// let multi2 = multiply(2);
//  console.log(multi2(20));
// let multi5 = multiply(5);
//  console.log(multi5(100)); //closure

//  function person() {
//     let name = "Billy";
//     return {
//       getName: function () {
//         return name;
//       },
//       setName: function (newName) {
//         name = newName;
//       },
//     };
//   }
//   let personA = person();
//   console.log(personA.getName());
//   personA.setName("Bob Joe");
//   console.log(personA.getName());

//    //we create a new promise
//    let newProm = new Promise((resolve,reject)=>{
//     let a = 1+0;
//     if (a==2){
//         //we say what happens in the success outcome
//         resolve("Success");
//     }else{
//         //we say what happens in the reject outcome
//         reject("Failed");
//     }
// })

// //we then pass the value from resolve or reject and we set it to message.
// //.then() is executed if Fulfilled/successful.
// newProm.then((message)=>{
//     console.log(`This is in the then block and the status is: ${message}`);
//     //.catch() is executed if rejected/failed.
// }).catch((message)=>{
//     console.log(`This is in the catch block and the status is: ${message}`);
// //.then can be chained and will execute regardless of the outcome.
// }).then(()=>{
//     console.log("I will take place regardless of what happened before.");
// })


//cookie

// let name = prompt('Enter ur name');
// let exdays = promt ('enter a number');
// let date = new date;
// date.setTime(date.getTime()+(exdays*24*60))

//
function something(){
    console.log('hi');
}
console.log(something());


const params = new URLSearchParams(window.location.search)
console.log(params);