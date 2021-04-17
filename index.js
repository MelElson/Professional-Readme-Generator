// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const util = require('./utils/generateMarkdown');

// TODO: Create an array of response for user input
//const response = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'GitHub username? ',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your email Address? ',
      name: 'email',

    },
    {
      type: 'input',
      message: 'What is the project name? ',
      name: 'project',

    },
    {
      type: 'input',
      message: 'What is the short description of your project?: ',
      name: 'description',

    },
    {
      type: 'list',
      message: 'What license should your project have?: ',
      name: 'license',
      choices: [
        'MIT',
        'Apache2.0',
        'GPL3.0',
        'BSD3',
        'None',
      
      ]
      //this should be a list
    },
    {
      type: 'input',
      message: 'What command should be run to install the program?: ',
      name: 'install',
      default: 'npm i'
      //npm i should be a default if left blank
    },
    {
      type: 'input',
      message: 'What command should be run to run tests?: ',
      name: 'tests',
      default: 'npm run tests',
      //nmp tests should be a default if left blank
    },
    {
      type: 'input',
      message: 'What does user need to know about using this repo?: ',
      name: 'usingRepo',

    },
    {
      type: 'input',
      message: 'What does user need to know about contributing to repo?: ',
      name: 'contributing',

    },
  ])
  // TODO: Create a function to write README file
  //function writeToFile(fileName, data) {

  //}

  .then(function(response)  {
  
    
  fs.writeFile('README.md',
`
# Title 
${response.project}
# Description 
${response.description}
## Table of Contents
1. [Title](#Title)
2. [Description](#Description)
3. [Installation](#Installation)
4. [Usage](#Usage)
5. [License](#License)
6. [Contributing](#Contributing)
7. [Tests](#Tests)
8. [Questions](#Questions)
# Installation
${response.install}
# Usage
${response.usingRepo}
# License
![badge](https://img.shields.io/badge/license-${response.license}-brightgreen)
This application is covered by the ${response.license} license. 

# Contributing 
${response.contributing}
# Tests
${response.tests}  
# Questions:
## GitHub User name: 
${response.name}
### Link to GitHub:
 https://github.com/MelElson/Professional-Readme-Generator 
## Email address: 
${response.email}
## Code
![Changed HTML](./assets/images/ScreenshotGenerator.png)
### Walkthrough
![Demo of README](./assets/images/README.gif)
`, (err) =>
  err ? console.log(err) : console.log('README Created Successfully!'))
})

  
// //TODO: Create a function to initialize app
// function init() {

// }

// // Function call to initialize app
// init();
