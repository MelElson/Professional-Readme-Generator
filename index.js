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
      message: 'Email Address? ',
      name: 'email',

    },
    {
      type: 'input',
      message: 'Project name? ',
      name: 'project',

    },
    {
      type: 'input',
      message: 'What is short description of your project?: ',
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
      message: 'What should be run to install dependencies?: ',
      name: 'dependencies',
      //this should be a default
    },
    {
      type: 'input',
      message: 'What should be run to run tests?: ',
      name: 'tests',
      //this should be a default
    },
    {
      type: 'input',
      message: 'What does user need to know about using this repo?: ',
      name: 'using',

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

  .then((response) => 
  fs.writeFile('README.md',
`
# Project Title 
${response.project}
# Description 
${response.description}
## Table of Contents
1. [Title](#title)
2. [Description](#Description)
3. [Installation](#Installation)
4. [Usage](#Usage)
5. [License](#License)
6. [Tests](#Tests)
6. [Questions](#Questions)
# Installation
${response.dependencies}
# Usage
${response.using}
# License
![badge](https://img.shields.io/badge/license-${response.license}-brightgreen)
This application is covered by the ${response.license} license. 

# Contributing 
Pull requests are encouraged. Please make sure to update as appropriate 
# Tests
${response.tests}
# Questions:
## GitHub User name: 
${response.name}
## Email address: 
${response.email}
## Code
![Changed HTML](./assets/images/ScreenshotGenerator.png)
`, (err) =>
  err ? console.log(err) : console.log('README Created!'))
);



// TODO: Create a function to initialize app
// function init() {

// }

// // Function call to initialize app
// init();
