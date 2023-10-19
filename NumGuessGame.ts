import PromptSync from "prompt-sync";
import chalk from "chalk";
const prompt=PromptSync();
let cnt=1;
let score=0;
do {
    console.log(`Round ${cnt}`)
    let number:any=prompt(`Guess the Number between 1 to 10? `);
    const randomNumber=Math.floor (Math.random() * 10);
    if (number==randomNumber){
        console.log(chalk.blue(`Congratulations! You Win The Game.`));
     score++;
    }else{
         console.log(chalk.red(`Number is Wrong`))
         console.log(`Number is ${randomNumber}`)
     };
     cnt++;
} while (cnt<=3);
if (score<=2) {
    console.log(chalk.yellow(`The Game Is Over. Your score is ${score}/3.`));
}else{
    console.log(chalk.blue(`The Game Is Over. Your score is ${score}/3.`));
};

