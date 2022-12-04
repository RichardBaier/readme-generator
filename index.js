const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = require('./static/inquirerQuestions');

function writeToFile(fileName, data) {
    const fileData = generateMarkdown(data);
    fs.writeFile(fileName, fileData, (error) => {
        if(error){
            return console.log(error)
        }
        console.log("Readme Written Successfully!");
    });
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToFile('README.md', answers));
}

init();