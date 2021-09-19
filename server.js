const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Naej777my',
    database: 'cms_db'
  },
  console.log(`Connected to the cms_db database.`)
);

let sql;
let departmentId;
let roleId;
let employeeId;
let managerId;
let employeeArray = ["James Smith", "Maria Garcia", "Elija Wang", "Amelia Lopez", "Leo Hassan", "Isabella Ren", "Asher Bibi", "Nushi Pak", "Mohammed Kumari", "Ana Sanchez", "Robert Mandal", "Jean Sharma", "Carlos Ramirez", "Elena de Oliveira", "Fatima Ghosh", "Sergey Uddin"];
let departmentArray = ["Production", "Web Development", "Marketing", "Accounting and Finance"];

function getData(sql) {  

  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);
    }
    result.json
    console.table(result);
    choicePrompt();
  });
}

function postData(sql) {
  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);
    }
    console.log(`Successfully added to the database`);
    choicePrompt();
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

      sql = `INSERT INTO department (name) VALUES ("${data.department}")`;
      departmentArray.push(`${data.department}`)
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
        choices: [...departmentArray],
      },
    ])
    .then(function(data) {

      switch (data.department_id) {

        case departmentArray[0]:
          departmentId = 1;
        break;

        case departmentArray[1]:
          departmentId = 2;
        break;

        case departmentArray[2]:
          departmentId = 3;
        break;

        case departmentArray[3]:
          departmentId = 4;
        break;

        case departmentArray[4]:
          departmentId = 5;
        break;

        case departmentArray[5]:
          departmentId = 6;
        break;

        case departmentArray[6]:
          departmentId = 7;
        break;

        case departmentArray[7]:
          departmentId = 8;
        break;
      }

      sql = `INSERT INTO role (title, department_id, salary) VALUES ("${data.role}", ${departmentId}, ${data.salary})`;
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

      sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${data.first_name}", "${data.last_name}", ${roleId}, ${managerId})`;
      employeeArray.push(`${data.first_name} ${data.last_name}`)
      postData(sql);
    })
}

function employeeUpdate() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: "Which employee's role do you want to update?",
        name: 'employeeName',
        choices: [...employeeArray],
      },
      {
        type: 'list',
        message: "Which role do you want to assign the selected employee?",
        name: 'roleName',
        choices: ["Machine Setup Specialist", "Maintenance Personnel", "Machine Operator", "Production Manager", "Front-End Web Developer", "Back-End Web Developer", "Full Stack Web Developer", "Web Development Manager", "Project Manager", "Analytics Specialist", "Brand Manager", "Marketing Analyst", "Payroll", "Financial Statements", "Tax and Compliance", "Finance Manager"],
      },
    ])
    .then(function(data) {

      // const nameArray = data.employeeName.split(" ");
      // let first_name = nameArray[0];
      // let last_name = nameArray[1];

      // switch (data.employeeName) {

      //   case "James Smith":
      //     employeeId = 1;
      //   break;

      //   case "Maria Garcia":
      //     employeeId = 2;
      //   break;

      //   case "Elija Wang":
      //     employeeId = 3;
      //   break;

      //   case "Amelia Lopez":
      //     employeeId = 4;
      //   break;

      //   case "Leo Hassan":
      //     employeeId = 5;
      //   break;

      //   case "Isabella Ren":
      //     employeeId = 6;
      //   break;

      //   case "Asher Bibi":
      //     employeeId = 7;
      //   break;

      //   case "Nushi Pak":
      //     employeeId = 8;
      //   break;

      //   case "Mohammed Kumari":
      //     employeeId = 9;
      //   break;

      //   case "Ana Sanchez":
      //     employeeId = 10;
      //   break;

      //   case "Robert Mandal":
      //     employeeId = 11;
      //   break;

      //   case "Jean Sharma":
      //     employeeId = 12;
      //   break;

      //   case "Carlos Ramirez":
      //     employeeId = 13;
      //   break;

      //   case "Elena de Oliveira":
      //     employeeId = 14;
      //   break;

      //   case "Fatima Ghosh":
      //     employeeId = 15;
      //   break;

      //   case "Sergey Uddin":
      //     employeeId = 16;
      //   break;
      // }

      switch (data.roleName) {

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

      sql = `UPDATE employee SET role_id = ${roleId} WHERE id = "${employeeId}"`
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
          sql = `SELECT id AS id, name AS department FROM department`;
          getData(sql);
        break;

        case 'View All Roles':
          sql = `SELECT role.id AS id, role.title AS title, department.name AS department, role.salary AS salary FROM role LEFT JOIN department ON role.department_id = department.id`;
          getData(sql);
        break;

        case 'View All Employees':
          sql = `SELECT employee.id AS id, employee.first_name AS first_name, employee.last_name AS last_name, role.title AS title, department.name AS department, role.salary AS salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id`;
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
          employeeUpdate();
        break;
      }
    })
}

choicePrompt();

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});