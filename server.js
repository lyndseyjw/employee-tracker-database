const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
// const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let departmentName;
let roleId;
let managerId;

function getData(sql) {  

  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);
    }
    console.table(result);
  });
}

function postData(sql) {
  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);
    }
    console.log(`Successfully added to the database`);
  });
}

function departmentEntry() {
  inquirer 
    .prompt([
      {
        type: 'input',
        message: "What is the name of the department?",
        name: 'department',
      },
    ])
    .then(function(data) {

      let sql = `INSERT INTO department (name) VALUES ("${data.department}")`;
      postData(sql);
    })
}

function roleEntry() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the name of the role?",
        name: 'role',
      },
      {
        type: 'input',
        message: "What is the salary of the role?",
        name: 'salary',
      },
      {
        type: 'list',
        message: 'Which department does the role belong to?',
        name: 'department_id',
        choices: ["Production", "Web Development", "Marketing", "Accounting and Finance"],
      },
    ])
    .then(function(data) {
      
      switch (data.department_id) {

        case 'Production':
          departmentName = 1;
        break;

        case 'Web Development':
          departmentName = 2;
        break;

        case 'Marketing':
          departmentName = 3;
        break;

        case 'Accounting and Finance':
          departmentName = 4;
        break;
      }

      let sql = `INSERT INTO role (title, department_id, salary) VALUES ("${data.role}", ${departmentName}, ${data.salary})`;
      postData(sql);
    })
}

function employeeEntry() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the employee's first name?",
        name: 'first_name',
      },
      {
        type: 'input',
        message: "What is the employee's last name?",
        name: 'last_name',
      },
      {
        type: 'list',
        message: "What is the employee's role?",
        name: 'role_id',
        choices: ["Machine Setup Specialist", "Maintenance Personnel", "Machine Operator", "Production Manager", "Front-End Web Developer", "Back-End Web Developer", "Full Stack Web Developer", "Web Development Manager", "Project Manager", "Analytics Specialist", "Brand Manager", "Marketing Analyst", "Payroll", "Financial Statements", "Tax and Compliance", "Finance Manager"],
      },
      {
        type: 'list',
        message: "Who is the employee's manager?",
        name: 'manager_id',
        choices: ["James Smith", "Maria Garcia", "Elija Wang", "Amelia Lopez", "Leo Hassan"],
      },
    ])
    .then(function(data) {

      switch (data.role_id) {

        case 'Machine Setup Specialist':
          roleId = 1;
        break;

        case 'Maintenance Personnel':
          roleId = 2;
        break;

        case 'Machine Operator':
          roleId = 3;
        break;

        case 'Production Manager':
          roleId = 4;
        break;

        case 'Front-End Web Developer':
          roleId = 5;
        break;

        case 'Back-End Web Developer':
          roleId = 6;
        break;

        case 'Full Stack Web Developer':
          roleId = 7;
        break;

        case 'Web Development Manager':
          roleId = 8;
        break;

        case 'Project Manager':
          roleId = 9;
        break;

        case 'Analytics Specialist':
          roleId = 10;
        break;

        case 'Brand Manager':
          roleId = 11;
        break;

        case 'Marketing Analyst':
          roleId = 12;
        break;

        case 'Payroll':
          roleId = 13;
        break;

        case 'Financial Statements':
          roleId = 14;
        break;

        case 'Tax and Compliance':
          roleId = 15;
        break;

        case 'Finance Manager':
          roleId = 16;
        break;
      }

      switch (data.manager_id) {

        case 'James Smith':
          managerId = 1;
        break;

        case 'Maria Garcia':
          managerId = 2;
        break;

        case 'Elija Wang':
          managerId = 3;
        break;

        case 'Amelia Lopez':
          managerId = 4;
        break;

        case 'Leo Hassan':
          managerId = 5;
        break;
      }

      let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${data.first_name}", ${data.last_name}, ${roleId}, ${managerId})`;
      postData(sql);
    })
}

function choicePrompt() {
  inquirer 
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
      }
    ])
    .then(function(data) {

      switch(data.choice) {

        case 'View All Departments':
          let sql = `SELECT * FROM department`;
          getData(sql);
        break;

        case 'View All Roles':
          let sql = `SELECT role.id AS id, role.title AS title, department.name AS department, role.salary AS salary FROM role LEFT JOIN department ON role.department_id = department.id`;
          getData(sql);
        break;

        case 'View All Employees':
          let sql = `SELECT employee.id AS id, employee.first_name AS first_name, employee.last_name AS last_name, role.title AS title, department.name AS department, role.salary AS salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id`;
          getData(sql);
        break;

        case 'Add a Department':
          departmentEntry();
        break;

        case 'Add a Role':
          roleEntry();
        break;

        case 'Add an Employee':
          employeeEntry();
        break;

        case 'Update an Employee Role':
          let sql = '';
          callData(sql);
        break;
      }
    })
}

choicePrompt();