// // var years = [1990, 1965, 1937, 2005, 1998];


// // function arrayCalc(arr, fn) {
// //     var arrRes = [];
// //     for (var i = 0; i < arr.length; i++) {
// //         arrRes.push(fn(arr[i]));
// //     }
// //     return arrRes;
// // }

// // function calculateAge(el) {
// //     return 2016 - el;
// // }

// // function isFullAage(el) {
// //     return el >= 18;
// // }

// // function maxHeartRate(el) {
// //     if (el >= 18 && el <= 81){
// //         return Math.round(206.9 - (0.67 * el));
// //     }else{
// //         return -1;
// //     }



// // }

// // var ages = arrayCalc(years, calculateAge);
// // var fullAges = arrayCalc(ages, isFullAage);
// // var rates = arrayCalc(ages,maxHeartRate);

// // console.log(ages);
// // console.log(fullAges);
// // console.log(rates);

///////////////////////////////////////////////////////////////

// // function interviewQuestion(job) {
// //     if (job === "designer")

// //     {
// //         return function (name) {
// //             console.log(name + ", can you please explain what UX design is ?");
// //         }
// //     } else if (job === "teacher") {
// //         return function (name) {
// //             console.log("What subject do you teach," + name + " ?");
// //         }

// //     } else {
// //         return function (name) {
// //             console.log("Hello" + name + ", what do you do?");
// //         }
// //     }
// // }


// // var teacherQuestion = interviewQuestion("teacher");

// // var designerQuestion = interviewQuestion("designer");


// // teacherQuestion("John");
// // designerQuestion("John");
// // designerQuestion("Jane");
// // designerQuestion("Mark");
// // teacherQuestion("John");
// // teacherQuestion("John");
// // teacherQuestion("John");


// // interviewQuestion("teacher")("Mark");

///////////////////////////////////////////////////////////////////////





// // function retirement(retirementAge) {
// //     var a = " year left until retirement.";
// //     return function (yearOfBirth) {
// //         var age = 2016 - yearOfBirth;
// //         console.log((retirementAge - age) + a);
// //     }
// // }

// // var retirementUS = retirement(66);
// // var retirementGermany = retirement(65);
// // var retirementIsland = retirement(67);

// // retirementGermany(1990);
// // retirementUS(1990);
// // retirementIsland(1990);

// // retirement(66)(1990);



///////////////////////////////////////////////////////////



// // function greet(whattosay) {

// //     return function (name) {
// //         console.log(whattosay + ' ' + name);
// //     }


// // }


// // var sayHi = greet("Hi");

// // sayHi("Toni");



// // function buildFunctions() {

// //     var arr = [];

// //     for (var i = 0; i < 3; i++) {

// //         arr.push(
// //             function () {
// //                 console.log(i);
// //             }
// //         )



// //     }

// //     return arr;
// // }


// // var fs = buildFunctions();

// // fs[0]();
// // fs[1]();
// // fs[2]();


// // function mapForEach(arr, fn) {

// //     var newArr = [];
// //     for (var i = 0; i < arr.length; i++) {
// //         newArr.push(
// //             fn(arr[i])
// //         )
// //     };


// //     return newArr;
// // }



// // var arr1 = [1, 2, 3];
// // console.log(arr1);

// // var arr2 = mapForEach(arr1, function (item) {
// //     return item * 2;
// // });


// // console.log(arr2);

// // var arr3 = mapForEach(arr1, function (item) {
// //     return item > 2;
// // });


// // console.log(arr3);



// // var checkPastLimit = function (limiter, item) {
// //     return item > limiter;
// // }

// // var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));

// // console.log(arr4);

// // var checkPastLimitSimplified = function (limiter) {
// //     return function (limiter, item) {
// //         return item > limiter;
// //     }.bind(this, limiter);
// // };

// // var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));

// // console.log(arr5);



// // var arr6 = _.map(arr1, function (item) {
// //     return item * 3
// // })

// // console.log(arr6);

// // var arr7 = _.filter([2, 3, 4, 5, 6, 7], function (item) {
// //     return item % 2 === 0;
// // });

// // console.log(arr7);


/////////////////////////////////////////////////////////

// // const years = [1990, 1965, 1982, 1937];

// // // ES5

// // var ages5 = years.map(function (el) {
// //     return 2016 - el;
// // });

// // console.log(ages5);


// // // ЕS6

// // let ages6 = years.map(el => 2016 - el);

// // console.log(ages6);

// // ages6 = years.map((el, index) => `Age element ${index +1}:${2016-el}.`);

// // console.log(ages6);


// // ages6 = years.map((el, index) => {
// //     const now = new Date().getFullYear();
// //     const age = now - el;
// //     return `Age element ${index +1}:${age}.`;
// // });

// // console.log(ages6);

///////////////////////////////////////////////////////////////////

// // ES5

// // var box5 = {
// //     color: "green",
// //     position: 1,

// //     clickMe: function () {

// //         var self = this;

// //         document.querySelector(".green").addEventListener("click", function () {
// //             var str = "This is box number " + self.position + " and it is " + self.color;
// //             alert(str);
// //         });
// //     }
// // }

// // box5.clickMe();

// //ES6



// // const box6 = {
// //     color: "green",
// //     position: 1,

// //     clickMe: function () {



// //         document.querySelector(".green").addEventListener("click", () => {
// //             var str = "This is box number " + this.position + " and it is " + this.color;
// //             alert(str);
// //         });
// //     }
// // }



// // box6.clickMe();

// /*
// const box66 = {
//     color: "green",
//     position: 1,

//     clickMe: () => {



//         document.querySelector(".green").addEventListener("click", () => {
//             var str = "This is box number " + this.position + " and it is " + this.color;
//             alert(str);
//         });
//     }
// }

// box66.clickMe();
// */



///////////////////////////////////////////////



// function Person(name) {
//     this.name = name;
// }

// // ES5
// Person.prototype.myFriends5 = function (friends) {

//     var arr = friends.map(function (el) {

//         return this.name + " is friends with " + el;

//     }.bind(this));



//     console.log(arr);


// }

// var friends = ["Bob", "Jane", "Mark"];

// new Person("John").myFriends5(friends);

// //ES6

// Person.prototype.myFriends6 = function (friends) {

//     var arr = friends.map(el =>

//         `${this.name} is friends with  ${el}`);





//     console.log(arr);


// }

// new Person("Mike").myFriends6(friends);
////////////////////////////////////////////////////////

// var john = {
//     name: "John",
//     age: 26,
//     job: "teacher",
//     presentation: function (style, timeOfDay) {

//         if (style === "formal") {
//             console.log(`Good ${timeOfDay} Ladies and gentlemen! I'm ${this.name} ,I'm a  ${this.job} and I'm ${this.age}  years old. `);
//         } else if (style === "friendly") {
//             console.log(`Hey! Whats up Ladies and gentlemen! I'm ${this.name} ,I'm a  ${this.job} and I'm ${this.age}  years old. Have a nice ${timeOfDay}. `);

//         }
//     }
// };

// var emily = {
//     name: "Emily",
//     age: 35,
//     job: "designer"
// };


// john.presentation("formal", "morning");

// john.presentation.call(emily, "friendly", "afternoon");


// // john.presentation.apply(emily, ["friendly", "afternoon"]);


// var johnFriendly = john.presentation.bind(john, "friendly");

// johnFriendly("morning");

// johnFriendly("night");

// var emilyFormal = john.presentation.bind(emily, "formal");

// emilyFormal("afternoon");

////////////////////////////////////////////////////////////

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (let index = 0; index < arr.length; index++) {
//         arrRes.push(fn(arr[index]));

//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(limit, el) {
//     return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);

// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);

// console.log(fullJapan);

////////////////////////////////////////////
// (function () {

//     function Question(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     }

//     Question.prototype.displayQuestion = function () {
//         console.log(this.question);

//         for (var i = 0; i < this.answers.length; i++) {
//             console.log(i + " : " + this.answers[i]);

//         }
//     }

//     Question.prototype.checkAnswer = function (ans) {
//         if (ans === this.correct) {
//             console.log("Correct answer!");
//         } else {
//             console.log("Wrong answer. Try again.")
//         }
//     }

//     var q1 = new Question(`Is JavaScript the coolest programming language in the world?`, ["Yes", "No"], 0);

//     var q2 = new Question(`What is teacher name of this courses?`, ["John", "Micheal", "Jonas"], 2);

//     var q3 = new Question(`What does best describe coding`, ["Boring", "Hard", "Fun", "Tedious"], 2);


//     var questions = [q1, q2, q3];

//     var n = Math.floor(Math.random() * questions.length);

//     questions[n].displayQuestion();

//     var answer = parseInt(prompt('Please select the correct answer.'));

//     questions[n].checkAnswer(answer);
// })();
