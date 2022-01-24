// const joke = require("give-me-a-joke");
// const figlet = require("figlet");
// const colors = require('colors');

// joke.getRandomDadJoke((joke) => console.log(joke.green));

// figlet(`Dad joke incoming`, function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data.zebra);
// });

import { franc, francAll } from "franc";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const langs = require("langs");
const colors = require("colors");

const input = process.argv[2] || "English language will be default";
const langCode = franc(input, {minLength: 3});

if (langCode === 'und') {
    console.log("Could not match a language. Please try again with a larger sample".red);

} else {
    const language = langs.where("3", langCode);

    if (!language) { 
        console.log("No language name found! Try with more sample text.".red)
    } else {
        console.log(`Our best guess is: ${language.name}`.green)
    }
}
