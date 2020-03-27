const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const readline = require('readline');
const generateHTML = require("./generateHTML");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("whati is your GitHub username?", function (name) {
    rl.question("what is your favorite color?", function (color) {

        const queryUrl = `https://api.github.com/users/${name}/repos?per_page=100`;
        console.log(color);

        axios.get(queryUrl).then(function (res) {
            const titles = res.data.map(function (repo) {
                console.log(titles);
                return repo.name;
            });

            const titlesString = titles.join("\n");

            fs.writeFile("repos.txt", titlesString, function (err) {
                if (err) {
                    throw err;
                }

                console.log(`Saved ${titles.length} repos`);

                rl.close();
            });
        });
    });
});




// });


// inquirer
//     .prompt({
//         type: "input",
//         name: "username",
//         message: "what is your Github username?",

//         type: "input",
//         color: "color",
//         message: "What is your favorite color?"

//     })

// function init() {
//     inquirer.prompt(questions)
//     // console.log("searching.....");

// }

// // .then(function ({ username }) {
// const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

// axios.get(queryUrl).then(function (res) {
//     const titles = res.data.map(function (repo) {
//         return repo.name;
//     });

//     const titlesString = titles.join("\n");

//     fs.writeFile("repos.txt", titlesString, function (err) {
//         if (err) {
//             throw err;
//         }

//         console.log(`Saved ${titles.length} repos`);
//     });
// });
// ;

// init()