const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFileAsync = util.promisify(fs.writeFile)

// array of questions for user
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of the repo?'
    },
    {
      type: 'input',
      name: 'user',
      message: 'What is the name of your GitHub?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'overview',
      message: 'What is this project about?'
    },
    {
      type: 'input',
      name: 'license',
      message: 'What license is using?',
      default: 'MIT'
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What command should be run to install dependencies?',
      default: 'NPM i'
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should be run to rus tests?',
      default: 'NPM test'
    }
  ]
  )
}
//function to initialize creation process
const init = () => {
  console.log('Creating your README file');

  questions()
    .then((answers) => writeToFileAsync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully created README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize program
init();
