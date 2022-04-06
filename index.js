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
            name: 'description',
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
        },
        {
            type:'checkbox',
            message: 'What needs to be installed?',
            choices: ["Node.js", "Inquirer.js", "Markdown Preview Enhanced in VSC"],
            name: 'installation',
        },

    ]).then(function (response) {
        console.log(response);
        const filefinish = `
# Title : ${response.title}

## Description:
${response.description}

### Table Of Contents
* [Installation](#installation)
* [Controbuters](#controbuters)
* [Requirements](#requirements)
* [Email](#email)
* [Usage](#usage)
* [Username](#username)
* [License](#license)

#### Installation:
${response.installation}

#### Controbuters
${response.controbuters}

#### Requirements
${response.requirements}

#### License
![Badge](https://img.shields.io/badge/license-${response.license}-green.svg)

#### Usage
${response.usage}

##### Email
${response.email}

##### Username
[Github Profile](https://github.com/${response.username})

###### Questions?
Please reach out with any questions or possible improvments at jp.graphics.011@gmail.com. Thank you!
        `  
        fs.writeFile("README.md", filefinish, (err) => {
            err ? console.log(err) : console.log('Success!');
        })
    })


}

init();