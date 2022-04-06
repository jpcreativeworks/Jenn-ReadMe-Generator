const inquirer = require("inquirer");
const fs = require("fs");


function init() {
    inquirer.prompt([
        {
            type: 'input',
            massage: 'What is the title of your Project?',
            name: 'title',
        },
        {
            type: 'input',
            massage: 'What is a short discription of your Project?',
            name: 'discription',
        },
        {
            type: 'list',
            massage: 'ask for license',
            choices: ["MIT", "ISC", "APACHE 2.0", "GPL"],
            name: 'license',
        },
        {
            type: 'input',
            massage: 'What is your gitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            massage: 'What is your Installation instructions?',
            name: 'instructions',
        },
        {
            type: 'input',
            massage: 'What are you testing requirements?',
            name: 'requirements',
        },
        {
            type: 'input',
            massage: 'What is your email?',
            name: 'email',
        },
        {
            type: 'input',
            massage: 'What is your controbuters?',
            name: 'controbuters',
        },
        {
            type: 'input',
            massage: 'What is your usage?',
            name: 'usage',
        }
    ]).then(function (response) {
        console.log(response);

    })


}

init();