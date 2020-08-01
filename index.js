var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user
const imgFile = fs.readdirSync("./utils/")
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your E-mail address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "licence",
        choices: [
            "MIT",
            "APACHES 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        default: "npm i",
        name: "installation"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        default: "npm test",
        name: "test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "info"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    },
    {
        type: "confirm",
        message: "Would you like to include any pictures with this README?",
        name: "images"
    },
    {
        when: function(response) {
            return response.images;
        },
            type: "list",
            message: "Please select which image you would like to include.",
            choices: imgFile,
            name: "imgSelect"
        
    }
    


];


// function to write README file
function writeToFile(fileName) {
    inquirer.prompt(questions)

    .then((data) => {
        var markdown = generateMarkdown(data);
        fs.writeFile(fileName, markdown, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log('Generating your README...');
        })    
    })
}

// function to initialize program
function init() {
    writeToFile("README.md");
}


// function call to initialize program
init();