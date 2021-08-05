// // //task 1 -printing output

// console.log("welcome to the Quiz ")
// console.log("--------------------")

// const readlineSync = require('readline-sync');
// let quizScore = 0;

// function playQuiz(questions, answers){

// let userAnswer = readlineSync.question(questions);

// if (userAnswer == answers)
// {
//   console.log("you are right")
//   quizScore = quizScore+1
//   console.log("your score is "+ quizScore)
// }
// else
// {
//   console.log("you are wrong")
//   quizScore = quizScore-1
//   console.log("your score is "+ quizScore)
// }
// }

// playQuiz("where do i work? " , "HP")
// playQuiz("where do i live? ", "MP")
// playQuiz("who is your best friend? ", "Anurag")
// playQuiz("which song do you like ? ", "yoyo")
// playQuiz("who motivates you? ", "prateek")
// playQuiz("MSD or anyone else? ", "MSD")

// console.log("your final score is "+ quizScore)
// // 

// let score =0
// function play(question,answer){
// let userAnswer =window.prompt(question)
// if (userAnswer == answer) {
//     console.log("you are right")
//     score++
//     console.log(score)
// }
// else {
// console.log("you are wrong")
// score--
// console.log(score)
// }
// }
// console.log("final score is :"+ " " +score)
// play("my name","anu")
// play("what i do ", "paint")
// play("what i eat ", "fruits")
// let foodItem =["milk","butter","bread","eggs"]
// console.log(foodItem)
// let numbers=[5,6,7,8,9,10]
// console.log(foodItem[0])
// console.log(foodItem[1])
// console.log(foodItem[2])
// console.log(foodItem[3])
// console.log(numbers[0])
// for(i=0; i<foodItem.length;i++)
// {
//     console.log(foodItem[i])
// }
// let superAero = {
//     name: "superman",
//     power :"100",
//     color: "red",
//     region: "Asia"
// }
// let superZero = {
//     name: "Batman",
//     power :"50",
//     color: "black",
//     region: "USA"
// }
// console.log(superHero.color)
// console.log(superHero.name)
// console.log(superHero.power)
// console.log(superHero.region)
// console.log("--------------------")
// console.log(superZero.color)
// console.log(superZero.name)
// console.log(superZero.power)
// console.log(superZero.region)
// console.log(superHero.power<superZero.power)
// let superHero = [superAero,superZero]
// for(i=0; i<superHero.length;i++)
// {
    // console.log(superHero[i])
    // console.log(superHero[i].color)
    // console.log(superHero[i].name)
    // console.log(superHero[i].power)
    // console.log(superHero[i].region)
    // let currentHero = superHero[i]
    // // console.log(currentHero)
    // console.log(currentHero.name)
    // console.log(currentHero.power)
    // console.log(currentHero.color)
    // console.log(currentHero.region)
// }

let userInput =window.prompt("Hey ! May I have your name")
console.log("Welcome"+" "+ userInput + " "+ "Lets Play the Quiz")
let score = 0
function play(question,answer){
    let userAnswer = window.prompt(question)

    if (userAnswer==answer)
    {
        console.log("you are right")
        score++
    } else{
        console.log("you are wrong")
        score--
    }
    console.log("final score is :"+  score)
}
    // play("my name","anu")
    // play("what i do ", "paint")
    // play("what i eat ", "fruit")   


let questionOne = {
    question: "PM of india",
    answer: "Modi Ji"
}
let questionTwo = {
    question :"President of india",
    answer:"Kovind Ji"
}

let questionBank = [questionOne,questionTwo]
for(i=0;i<questionBank.length;i++){
    // let currentQuestion = questionBank[i]
    // play(currentQuestion.question,currentQuestion.answer)
    play(questionBank[i].question,questionBank[i].answer)
}