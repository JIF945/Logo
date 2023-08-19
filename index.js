// TODO: Include packages needed for this application

const logo = require("./lib/logo");
// const shape = require("./lib/logo");
const { square, triangle, circle} = require("./lib/shapes");
const inquirer = require('inquirer');
const {writeFile} = require("fs/promises");
const logo = require("./lib/logo");




// TODO: Create an array of questions for user input
const generateLOGO = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'what initials would you like to be on the logo.(1-3 characters)'
    
        },
        {
            type: 'input',
            name: 'textcolor',
            message: 'color of text? hexadecimal numbers are allowed'
    
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a logo shape',
            choices: ['circle','square', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'what color would you like your logo to be?'
        },
    ])
    .then((response) => {
        console.log(response);
    
        let logoShape;
    
        if(response.shape === 'circle'){
            logoShape = new circle();
        }
    
        if(response.shape === 'triangle'){
            logoShape = new triangle();
        }
    
        if(response.shape === 'square'){
            logoShape = new square ();
        }
    
        logoShape.setColor(response.shapeColor)
        // logoText.setText(response.shapeText)
    
        const shape = new logo ();
     logo.setText(response.text, response.textColor);
     logo.setShape(logoShape);
     return writeFile("./examples", logo.render());
    }) .then(() => {
        console.log(" logo created and places in the examples folders");
    })

};
 



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(fileName, data);
// }  

// TODO: Create a function to initialize app

// function init() {
//     inquirer
//     .prompt(questions)
//     .then((answers) => {
//     console.log(answers)
//     const template = generateMarkdown(answers)
//     writeToFile('README.md', generateMarkdown(answers));
//     });
// }

// Function call to initialize app
generateLOGO();


// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');