const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

const writeToFile = util.promisify(fs.writeFile)


// array of questions for user
const questions = () => {
    inquirer.prompt([
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
    message: 'What is this project is about?'
},
{
    type: 'input',
    name: 'license',
    message: 'What license is using?',
    default: 'MIT'
}

]
)}

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
  
   
  }

// function call to initialize program

init();


//promisify*

