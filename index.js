#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
async function welcome() {
    let rainbowtittle = chalkAnimation.rainbow("Lets start Calculator");
    await sleep();
    rainbowtittle.stop();
    console.log(` _____________________
      |  _________________  |
      | | JO           0. | |
      | |_________________| |
      |  ___ ___ ___   ___  |
      | | 7 | 8 | 9 | | + | |
      | |___|___|___| |___| |
      | | 4 | 5 | 6 | | - | |
      | |___|___|___| |___| |
      | | 1 | 2 | 3 | | x | |
      | |___|___|___| |___| |
      | | . | 0 | = | | / | |
      | |___|___|___| |___| |
      |_____________________|`);
}
await welcome();
async function askQuestion() {
    const answer = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "which operation you want to perform? /n",
            choices: ["Addition", "Subtraction", "Multipication", "Division"],
        },
        {
            type: "number",
            name: "num1",
            message: "Enter Number1:"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Number2:",
        }
    ]);
    if (answer.operator == "Addition") {
        console.log(chalk.yellow(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`));
    }
    else if (answer.operator == "Subtraction") {
        console.log(chalk.yellow(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`));
    }
    else if (answer.operator == "Multipication") {
        console.log(chalk.yellow(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`));
    }
    else if (answer.operator == "Division") {
        console.log(chalk.yellow(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`));
    }
}
//askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "Restart",
            message: "Do you Want to Continue? press y or n:",
        });
    } while (again.Restart == "Y" || again.Restart == "y" || again.Restart == "yes" || again.Restart == "YES");
}
startAgain();
