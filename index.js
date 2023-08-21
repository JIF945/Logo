// TODO: Include packages needed for this application

const logo = require("./lib/logo");
const { square, triangle, circle} = require("./lib/shapes");
const inquirer = require('inquirer');
const {writeFile} = require("fs/promises");





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
      
    
        const shape = new logo ();
     shape.setText(response.text, response.textcolor);
     shape.setShape(logoShape);
     return writeFile("./examples/logo.svg", shape.render());
    }) .then(() => {
        console.log(" logo created and places in the examples folders");
    })

};
 
// Function call to initialize app
generateLOGO();


