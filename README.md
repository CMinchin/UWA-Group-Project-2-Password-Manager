

# UWA-Group-Project-2-Password-Manager

  ![Badge](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

As a group of four: Marc, Cameron, Charles and Bambang, with a group name is: "MACACHABA". We created a Password Manager and deploy to Heroku with the app name is "TRAPPER KEYper". Our password manager can store, generate, and manage the passwords and online services. It is generating and retrieving complex passwords, storing such passwords in an encrypted database, or calculating them on demand. Our password manager (online services) can store all your passwords securely, so you don't have to worry about remembering them. This allows the user to use unique, strong password for all their important accounts (rather than using the same password for all of them, which they should never do). We use Node.js and Express.js to create a RESTful API.  Use Handlebars.js as the template engine. Use MySQL and the Sequelize ORM for the database.Have both GET and POST routes for retrieving and adding new data. Use one new library, package, or technology that we haven’t discussed. We use the Advanced Encryption Standard (AES) to encrypt sensitive data and decrypt , MD5 Hashing, Bcrypt. Have a folder structure that meets the MVC paradigm. Include authentication (express-session and cookies). Protect API keys and sensitive information with environment variables. Be deployed using Heroku (with data). Responsive and interactive (i.e., accept and respond to user input).

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](questions)

## Installation

- Install `.gitignore` and include `node_modules` and `.DS_Store`, then Install `npm` to acquire inquirer package

- Install `npm install --save mysql2` to use the [MySql2] and `npm i sequelize` to use the [sequelize] to connect your Express.js API to a MySQL database and also `npm i dotenv` the [dotenv] package to use environment variables to store sensitive data. 

- Install `npm install bcrypt` to hash password, and `npm install express-session` and `npm install connect-session-sequelize` packages to add authentication.


## Usage

- Sign up and create a master password
- Create a strong master password at least 16 character.
- Install the software and app
- Create and store log-in credentials for all your many online services.
- You can change your password and the password manager create and store a new, much stronger password.
- If you get email that your password has been compromised, simply go back to password manager and will generate the new strong password for you 

## Demo

- [Presentation](https://www.canva.com/design/DAFBgGIuqWk/qAjPPeiOTIg7ot--mJUIYg/edit?utm_content=DAFBgGIuqWk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

- [Heroku trapperkeyper app](https://trapperkeyper.herokuapp.com/)

## Credits

- [Simon-Xu-Lan](https://github.com/Simon-Xu-Lan)

- [Sam-Ngu](https://github.com/sam-ngu)

## License

    This application is covered by the MIT license.

---
## Badges

![Badge](https://img.shields.io/badge/License-MIT-blue.svg)

## Features

n/a

## Contributing

Pull request are welcome, you can make a constribution at the bottom of any docs page to make small changes such as a typo, sentence fix or a broken link. For major changes, please open an issue first to discuss what you would like to change.

## Tests

Install `npm i -D nodemon` and change on package json "script": {"watch": "nodemon server.js"}, then run `npm run watch`, so test it everytime you make the code. Also you can check on mysql workbench for your work.

## Questions

If you have any Question you can email us or find us on GitHub:

- Marc, email: fischerbootcamp@gmail.com, 
on GitHub: [Fishgif](https://github.com/Fishgif)

- Charles Tran, email: charles.tran.96@gmail.com, 
on GitHub: [CharlesTran96](https://github.com/CharlesTran96)

- Cameron Minchin, email: cameron.minchin@gmail.com, 
on GitHub: [TheEpicHamster](https://github.com/TheEpicHamster)


- Bambang, email: djaja@iinet.net.au, 
on GitHub: [B-smd](https://github.com/B-smd)
