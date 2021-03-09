// TODO: Include packages needed for this application
const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {type:"input", name:"title", message: "What is the title of your project?"},
    {type:"input", name:"description", message: "what is your description of your project?"},
    {type:"input", name:"installation", message: "How do you install your project?"},
    {type:"input", name:"usage", message: "How does someone use your project?"},
    {type:"input", name:"contributing", message: "How do you did contrinbute to the project?"},
    {type:"input", name:"tests", message: "How do I tests?"},
    {type:"input", name:"github", message: "What is your github username?"},
    {type:"input", name:"email", message: "What is your email?"},
    {type:"list", name:"license", message: "What is your github username?",choices:["BSD","MIT","none"]}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const location = path.join(__dirname,fileName)
    fs.writeFileSync(location,data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data =>{
        console.log(data);
        writeToFile("README.md",generateMarkdown(data))
    }) 
}

// Function call to initialize app
init();
