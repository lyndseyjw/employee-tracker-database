INSERT INTO department (name)
VALUES ("Production"),
       ("Web Development"),
       ("Marketing"),
       ("Accounting and Finance");

INSERT INTO role (title, department_id, salary)
VALUES ("Machine Setup Specialist", 1, 43000),
       ("Maintenance Personnel", 1, 100456),
       ("Machine Operator", 1, 57676),
       ("Production Manager", 1, 106910),
       ("Front-End Web Developer", 2, 105660),
       ("Back-End Web Developer", 2, 150350),
       ("Full Stack Web Developer", 2, 171006),
       ("Web Development Manager", 2, 96366),
       ("Project Manager", 3, 72540),
       ("Analytics Specialist", 3, 77017),
       ("Brand Manager", 3, 106000),
       ("Marketing Analyst", 3, 77017),
       ("Payroll", 4, 53191),
       ("Financial Statements", 4, 68000),
       ("Tax and Compliance", 4, 111750),
       ("Finance Manager", 4, 120000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Smith", 4, null),
       ("Maria", "Garcia", 8, null),
       ("Elija", "Wang", 9, null),
       ("Amelia", "Lopez", 11, null),
       ("Leo", "Hassan", 16, null),
       ("Isabella", "Ren", 1, 1),
       ("Asher", "Bibi", 2, 1),
       ("Nushi", "Pak", 3, 1),
       ("Mohammed", "Kumari", 5, 2),
       ("Ana", "Sanchez", 6, 2),
       ("Robert", "Mandal", 7, 2),
       ("Jean", "Sharma", 10, 3),
       ("Carlos", "Ramirez", 12, 4),
       ("Elena", "de Oliveira", 13, 5),
       ("Fatima", "Ghosh", 14, 5),
       ("Sergey", "Uddin", 15, 5);
