#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const YourSentence: { sentence: string } = await inquirer.prompt([
  {
    name: "sentence",
    message: "Please Enter Your Sentence Or Paragraph to count words",
    type: "input",
  },
]);

const wordsCheck = YourSentence.sentence.trim().split(" ");
let Words = YourSentence.sentence;

console.log(
  `\nYour Sentence: "${chalk.bold.underline.blackBright.bgWhite(Words)}".`
);
console.log(
  `Words Contain in your sentence: ${chalk.underline.white(wordsCheck.length)}`
);
