const inquirer = require("inquirer");
const fs = require("fs");


function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your Project?',            
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is a short discription of your Project?',            
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license',
            choices: ["MIT", "ISC", "APACHE 2.0", "GPL"],
            
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your gitHub username?',            
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'What is your Installation instructions?',            
        },
        {
            type: 'input',
            name: 'requirements',
            message: 'What are you testing requirements?',            
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',            
        },
        {
            type: 'input',
            name: 'contributers',
            message: 'Who were your contributers?',            
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is your usage?',            
        },
        {
            type:'checkbox',
            name: 'installation',
            message: 'What needs to be installed?',
            choices: ["Node.js", "Inquirer.js", "Markdown Preview VSC Extension", "Visual Studio Code"],
            
        },

    ]).then(function (response) {
        console.log(response);
        const filefinish = `
# Title : ${response.title}

## Description:
${response.description}

### Table Of Contents
* [Installation](#installation)
* [Contributers](#contributers)
* [Requirements](#requirements)
* [Email](#email)
* [Usage](#usage)
* [Username](#username)
* [License](#license)

#### Installation:
${response.installation}

#### Contributers
${response.contributers}

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