// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require('inquirer');
const { default: Choices } = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project'

    },
    {
        type: 'input',
        name: 'about',
        message: 'What is your project about?'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use'
    },
    {
        type: 'input',
        name: 'credits',
        message: " list collaborators, third party assets or tutorials used to to make this project. "
    },
    {
        type: 'list',
        name: 'license',
        message: 'List any license used for the project if you are unsure refer to (https://choosealicense.com/)',
        choices: ['none', 'MIT', 'GNU', 'Apache', 'moxilla',]
    },
    {
        type: 'input',
        name: 'email', 
        message: 'enter your email'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub profile name '
    }

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}  

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
    console.log(answers)
    const template = generateMarkdown(answers)
    writeToFile('README.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
