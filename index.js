const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of you project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add the description of you project'
    },    
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation process of your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage for your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose license for your project',
        choices: ['The Unlicense', 
                'Apache License 2.0', 
                'MIT License', 
                'Mozilla Public License 2.0',
                'GNU General Publick License'
                ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide instruction for contributing'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instruction for testing your project'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please add your GitHub link for any questions'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please add your email link for any questions'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.promises.writeFile(fileName, data)
        .then(() => ({ ok: true }))
        .catch(err => Promise.reject(err));
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            var fileContent = generateMarkdown(answer);
            writeToFile('./newREADME.md', fileContent) 
                .then(() => console.log('README generated successfully'))
                .catch(error => console.error('Error generating README:', error));
        });
}

// function call to initialize program
init();
