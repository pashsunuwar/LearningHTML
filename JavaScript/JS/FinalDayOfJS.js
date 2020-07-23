// // higher function
// let grades = [
//     {name: 'John', grade: 8, sex: 'M'},
//     {name: 'Sarah', grade: 12, sex: 'F'},
//     {name: 'Bob', grade: 16, sex: 'M'},
//     {name: 'Johnny', grade: 2, sex: 'M'},
//     {name: 'Cyrus', grade: 4, sex: 'M'},
//     {name: 'Paula', grade: 18, sex: 'F'},
//     {name: 'Jeff', grade: 5, sex: 'M'},
//     {name: 'Jennifer', grade: 13, sex: 'F'},
//     {name: 'Courtney', grade: 15, sex: 'F'},
//     {name: 'Jane', grade: 9, sex: 'F'}
// ]

// let isBoy = student => student.sex === "M";
// let isGirl = student => student.sex === "F";

// let getBoys = grades => (grades.filter(isBoy));
// let getGirls = grades => (grades.filter(isGirl));

// let average = grades => (grades.reduce((acc,curr)=>{ acc + curr.grade}, 0) / grades.length);

// let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
// let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

// let highestGrade = maxGrade(grades);
// console.log(highestGrade);

// let lowestGrade = minGrade(grades);
// console.log(lowestGrade);

// let boysHighestGrade = maxGrade(getBoys(grades))
// console.log(boysHighestGrade);

// let girlsHighestGrade = maxGrade(getGirls(grades))
// console.log(girlsHighestGrade);

// let boysLowestGrade = minGrade(getBoys(grades))
// console.log(boysLowestGrade);

// let girlsLowestGrade = minGrade(getGirls(grades))
// console.log(girlsLowestGrade);

// localStorage.setItem("userName", "Sideshow Bob");
// localStorage.setItem("email", "sideshowbob@gmail.com");

// sessionStorage.setItem("key", "value");
// sessionStorage.setItem("authLogin", "ad872sjgf3w943u27qwASECntfgiqa03743tqo3ithoijav64723VA4E")

// sessionStorage.removeItem("authLogin");

// sessionStorage.clear;

// function myPara(){
// let myPara = document.querySelector("p.pid")
// let a = document.getElementById("pid").innerHTML= "Hello World";
// }

// doSomething(function (result) {
//     doSomethingElse(result, function (newResult) {
//         doThirdThing(newResult, function (finalResult) {
//             console.log(`Got the final result ${finalResult}`);
//         }, failureCallBack);
//     }, failureCallBack);
// }, failureCallBack);