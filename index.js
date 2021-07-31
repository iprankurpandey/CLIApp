// //task 1 -printing output

console.log("welcome to the Quiz ")
console.log("--------------------")

const readlineSync = require('readline-sync');
let quizScore = 0;

function playQuiz(questions, answers){

let userAnswer = readlineSync.question(questions);

if (userAnswer == answers)
{
  console.log("you are right")
  quizScore = quizScore+1
  console.log("your score is "+ quizScore)
}
else
{
  console.log("you are wrong")
  quizScore = quizScore-1
  console.log("your score is "+ quizScore)
}
}

playQuiz("where do i work? " , "HP")
playQuiz("where do i live? ", "MP")
playQuiz("who is your best friend? ", "Anurag")



 
