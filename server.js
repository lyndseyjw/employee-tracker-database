const inquirer = require('inquirer');
const mysql = require('mysql2');

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
let roleArray = ["Machine Setup Specialist", "Maintenance Personnel", "Machine Operator", "Production Manager", "Front-End Web Developer", "Back-End Web Developer", "Full Stack Web Developer", "Web Development Manager", "Project Manager", "Analytics Specialist", "Brand Manager", "Marketing Analyst", "Payroll", "Financial Statements", "Tax and Compliance", "Finance Manager"];
let managerArray = ["James Smith", "Maria Garcia", "Elija Wang", "Amelia Lopez", "Leo Hassan"];

function getData(sql) {  

  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);
    }
    console.table({...result});
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

      for (let i = 0; i < departmentArray.length; i++) {
        
        switch (data.department_id) {

          case departmentArray[i]:
            departmentId = (i + 1);
          break;
        }
      }

      sql = `INSERT INTO role (title, department_id, salary) VALUES ("${data.role}", ${departmentId}, ${data.salary})`;
      roleArray.push(`${data.role}`)
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
        choices: [...roleArray],
      },
      {
        type: 'list',
        message: "Who is the employee's manager?",
        name: 'manager_id',
        choices: [...managerArray],
      },
    ])
    .then(function(data) {

      for (let i = 0; i < roleArray.length; i++) {
        
        switch (data.role_id) {

          case roleArray[i]:
            roleId = (i + 1);
          break;
        }
      }

      for (let i = 0; i < managerArray.length; i++) {
        
        switch (data.manager_id) {

          case managerArray[i]:
            managerId = (i + 1);
          break;
        }
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
        choices: [...roleArray],
      },
    ])
    .then(function(data) {

      // const nameArray = data.employeeName.split(" ");
      // let first_name = nameArray[0];
      // let last_name = nameArray[1];

      for (let i = 0; i < employeeArray.length; i++) {
        
        switch (data.employeeName) {

          case employeeArray[i]:
            employeeId = (i + 1);
          break;
        }
      }

      for (let i = 0; i < roleArray.length; i++) {
        
        switch (data.roleName) {

          case roleArray[i]:
            roleId = (i + 1);
          break;
        }
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