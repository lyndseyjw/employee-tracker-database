const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
// const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
          let sql = 'SELECT * FROM department ';
          callData(sql);
        break;

        case 'View All Roles':
          let sql = 'SELECT role.id AS id, role.title AS title, department.name AS department, role.salary AS salary FROM role LEFT JOIN department ON role.department_id = department.id';
          callData(sql);
        break;

        case 'View All Employees':
          let sql = 'SELECT employee.id AS id, employee.first_name AS first_name, employee.last_name AS last_name, role.title AS title, department.name AS department, role.salary AS salary, CONCAT(employee.first_name, " ", employee.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN departments ON role.department_id = department.id LEFT JOIN employee ON employee.manager_id = employee.id';
          callData(sql);
        break;

        case 'Add a Department':
          let sql = '';
          callData(sql);
        break;

        case 'Add a Role':
          let sql = '';
          callData(sql);
        break;

        case 'Add an Employee':
          let sql = '';
          callData(sql);
        break;

        case 'Update an Employee Role':
          let sql = '';
          callData(sql);
        break;
      }
    })
}

function callData(sql) {  

  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);
    }
    console.table(result);
  });
}

choicePrompt();