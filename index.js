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
)}


const init = () => {
  console.log('Creating your README file');
  
  questions()
      .then((answers) => writeToFileAsync('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully created README.md'))
      .catch((err) => console.error(err));
};

// Function call to initialize program
init();



//promisify*


// const inquirer = require('inquirer');
// const fs = require('fs');


// const writeFileAsync = util.promisify(fs.writeFile);

// const promptUser = () =>
//   inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     }
//   ]);

// const generateHTML = (answers) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
//   <title>Document</title>
// </head>
// <body>
//   <div class="p-5 mb-4 bg-body-tertiary rounded-3">
//   <div class="container-fluid py-5">
//     <h1 class="display-5 fw-bold">Hi! My name is ${answers.name}</h1>
//     <p class="col-md-8 fs-4">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

// promptUser()
//   .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//   .then(() => console.log('Successfully wrote to index.html'))
//   .catch((err) => console.error(err));
