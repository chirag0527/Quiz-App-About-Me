let readlineSync = require('readline-sync');
let name = readlineSync.question("Tell me your name : ");
console.log('\n')
let score = 0;
console.log(`Welcome ${name}, let's see how much you know about Chirag`)
console.log('\n')

function QA(question,answer){

 let userAnswer = readlineSync.question(question);

 if(userAnswer.toLowerCase() === answer.toLowerCase()){
   console.log('\n')
   console.log("That's Correct!")
   score+=2 ;
   console.log(` Your current score: ${score} `)
   console.log("--------------")
 } else {
   console.log('\n')
   console.log(" Oh no that's wrong ")
   score-=1 ;
   console.log(`The answer is: ${answer}`)
   console.log(` Your current score: ${score} `)
   console.log("--------------")
 }
}
 console.log(` Your score is: ${score} `)
  console.log("--------------")


let questions = [{
  question : " Do I like to Sing ",
  answer : "No"
}, {
  question : " What's my favourite movie? ",
  answer : "Avengers Infinity War"
},{
  question : " What's my favourite color ? ",
  answer : "Red"
}
];

for(i=0; i < questions.length; i++){
  let currentQuestion = questions[i];
  QA(currentQuestion.question,currentQuestion.answer)
};

let mcqs = [
  {
   array : ["GTA","Valorant","League of Legends","Fortnite"],
  question : " What's my favourte videogame ",
  answer : "GTA"
}, {
  array : ["1","4","0","2"],
  question : " How many times have I failed in a subject",
  answer : "0"
}
];

function MCQ(question,array,answer){
  let userAnswer = readlineSync.keyInSelect(array,question);
  console.log('\n')
  if(array[userAnswer] === answer){
    console.log("You are right !!");
    score+=2 ;
    console.log(` Your current score: ${score} `)
    console.log("--------------")
  }else{
    console.log(" Oh no that's wrong ")
    console.log(`The answer is: ${answer}`)
    score-=1 ;
    console.log(` Your current score: ${score} `)
    console.log("--------------")
  }
};

for(i=0;i<mcqs.length;i++){
currques = mcqs[i]
MCQ(currques.question,currques.array,currques.answer)
}

if(score>5){
  console.log(`Your final score: ${score}`)
  console.log("Damn! You know me well")
}else{
  console.log(`Your final score: ${score}`)
  console.log("You dont know me that well :(")
}