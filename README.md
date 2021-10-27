# employee-tracker-database

![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)

## An Employee Tracker Database Using Command Line Prompts & MySQL

## User Story

As a back end web developer, I want to create a database that stores employee information as well as departments, roles & salaries relevant to each employee so that I may organize my company's employee structure.

## Features

Using the Employee Tracker Database, back end web developers can access their company's employee structure using command line prompts. Upon app invocation, the user is given a list of options on how they would like to proceed. They may view, add, & update employees, departments, & roles within their company. Data points such as salary and department managers are also included.<br/>
<br/>
Future developments will include a delete function so users can create an entirely new database that is tailored specifically for their company. A front end will also be created so users that are not back end developers may view this information as well. Stay tuned!

## Table of Contents
  - [Installation](#installation)
  - [Languages](#languages-and-technologies-used)
  - [Questions](#questions)
  - [Contributors](#contributors)
  - [License](#license)
  - [Author](#author-notes)
  - [Screenshots](#application-screenshots)

## Installation

### Deployed Application

At the moment, this is a back end only application. Read below on how to invoke from the command line.

### Clone Repository

git clone git@github.com:lyndseyjw/employee-tracker-database.git

### Install Dependencies

All NPM packages required for this application are listed as dependencies in the package.json file. Run "npm i" in your terminal at the root directory to install all packages. Ensure you have Node.js installed on your machine.

### Start Application

To watch a video of how to invoke the application, I invite you to click here : https://drive.google.com/file/d/1Y8xz6AzSLeE4SS89jjYlznI2y-PvsYNw/view

## Languages and Technologies Used

Javascript, Node, NPMs, mySQL, Sequelize, Inquirer

## Questions

You may visit my Github at : https://github.com/lyndseyjw OR email lyndseyjwatson@gmail.com if you have any questions.

## Contributors

Lyndsey Watson

## License

This project is licensed under the terms of the MIT license. 

## Author Notes

This is a great backend tool that allows users to create a database of all the employees in their company. The information is returned as a table that organizes their information based on department, salary, role title, etc. I was inspired to create this application after learning how to create/update/delete tables within databases & it became a wonderful challenge of how to create relationships between multiple tables of the same database within mySQL. This application combines information over three tables & even combines data from the same table so as to give the user a cohesive response to their requests.

While quite a challenge, this was one of my favorite applications to create because it was a true testament to my problem-solving skills. I found such joy in coming up with many ways to solve problems & was so delighted to achieve a final result that is extremely user friendly and effective. 

This will be a stepping stone to more complex applications I plan to create using databases. As you can see from the deployment vide, any departments that are added are then displayed as choice options so soon the user will be able to create information in these tables completely of their own .. they will no longer have to use my starter examples.

This has also fueled my passion for full stack as I begin the process of implementing API requests & will soon bring an application where users can pull this data to the front end & it will no longer be solely for the use of backend web developers. Stay tuned for upcoming developments!

## Application Screenshots

npm run start : 
![Run Application](./assets/images/run-start.png)

View Departments :
![Add a Department](./assets/images/view-departments.png)

View Roles :
![Add a Department](./assets/images/view-roles.png)

View Employees :
![Add a Department](./assets/images/view-employees.png)

Add a Department :
![Add a Department](./assets/images/add-department.png)

Add a Role : 
![Add a Role](./assets/images/add-role.png)

Add an Employee : 
![Add an Employee](./assets/images/add-employee.png)

Update an Employee : 
![Update an Employee](./assets/images/update-employee.png)
