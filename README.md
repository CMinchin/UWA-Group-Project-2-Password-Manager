# UWA-Group-Project-2-Password-Manager

  ![Badge](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

A password manager is a computer program that allows users to store, generate, and manage their passwords for local applications and online services. A password manager assits in generating and retrieving complex passwords, storing such passwords in an encrypted database, or calculating them on demand. A password manager (or a web browser) can store all your passwords securely, so the user don't have to worry about remembering them. This allows the user to use unique, strong password for all their important accounts (rather than using the same password for all of them, which they should never do). We use Node.js and Express.js to create a RESTful API.  Use Handlebars.js as the template engine. Use MySQL and the Sequelize ORM for the database.Have both GET and POST routes for retrieving and adding new data. Use one new library, package, or technology that we haven’t discussed. Have a folder structure that meets the MVC paradigm. Include authentication (express-session and cookies). Protect API keys and sensitive information with environment variables. Be deployed using Heroku (with data). Responsive and interactive (i.e., accept and respond to user input).

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

## Usage

GIVEN a functional Express.js API.
As a user :
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

## Demo

https://drive.google.com/file/d/1wiov2ISIq4G28YvjXmK6J8Ot-Sb3zSec/view

## Credits
- https://github.com/Simon-Xu-Lan

- https://github.com/sam-ngu

- https://github.com/cupacheeno

## License
    This application is covered by the MIT license.

---
## Badges
![Badge](https://img.shields.io/badge/License-MIT-blue.svg)
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Features

n/a

## Contributing

Pull request are welcome, you can make a constribution at the bottom of any docs page to make small changes such as a typo, sentence fix or a broken link. For major changes, please open an issue first to discuss what you would like to change.

## Tests

- In Insomnia shows the application's GET routes to return all categories, all products, and all tags being tested: 
  ![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.]

- In Insomnia shows the application's GET routes to return a single category, a single product, and a single tag being  tested: 
  ![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”]

- In Insomnia shows the application's POST, PUT, and DELETE routes for categories being tested:
  ![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”]

## Questions

If you have any Question you can email us or find us on GitHub

- Marc, email:
on GitHub: https://github.com/Fishgif

- Charles Tran, email: charles.tran.96@gmail.com
on GitHub: https://github.com/CharlesTran96

- Cameron Minchin, email: cameron.minchin@gmail.com
on GitHub: https://github.com/TheEpicHamster


- Bambang, email: djaja@iinet.net.au
on GitHub: https://github.com/B-smd

