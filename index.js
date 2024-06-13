// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Texas/texas");
// TODO: Create an array of questions for user input
function promptUser(){
return inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your readMe?",
      name: "readMe",
    },

    {
      type: "input",
      message: "What is your name?",
      name: "userName",
    },

    {
      type: "input",
      message: "What is your github username?",
      name: "userGitHubName",
    },

    {
      type: "input",
      message: "what is your email?",
      name: "userEmail",
    },

    {
      type: "input",
      message: "Give us a short description of the project",
      name: "description",
    },

    {
      type: "list",
      message: "What type of License do you want to use?",
      name: "License",
      choices: [
        "BSD 3-Clause License",
        "Eclipse Public License 2.0",
        "MIT",
        "WTFPL",
        "zLib License",
        "none",
      ],
    },
    {
      type: "input",
      message:"What command do you use to run the dependencies?",
      name: "command"
    },

    {
      type: "input",
      message: "Test command?",
      name: "test",
    },

    {
      type: "input",
      message: "What are you contributing to the repo?",
      name: "contributing",
    },
  ])
}
 
  
function writeREADME(data) {
      fs.writeFileSync('README.md', data);
    }

  async function init() {
    try{
      const userInput = await promptUser();
      const readmeContent = generateMarkdown(userInput);
      writeREADME(readmeContent);
      console.log('README file created successfully!')
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  init()
//     const fileName = `${data.readMe}.md`;
//     function writeToFile(fileName, data) {
//       fs.writeFile(fileName, JSON.stringify(data, null, "\t"), (err) =>
//         err ? console.error(err) : console.log("Message Logged!")
//       );
//     }
    
//   });

// // TODO: Create a function to write README file

// // // TODO: Create a function to initialize app
// function init() {
//   inquirer.prompt(questions).then((response) => {
//     let markdown = generateMarkdown(response);
//     writeToFile("testReadMe.md", markdown);
//   });
 
// }
// init()
// // // Function call to initialize app

// // inquirer
// //   .prompt([
// //     {
// //       message: 'Press ENTER to continue...',
// //       name: 'enterKey'
// //     }
// //   ]);
