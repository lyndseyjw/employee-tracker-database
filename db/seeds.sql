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

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "James", "Smith", 4, null),
       (2, "Maria", "Garcia", 8, null),
       (3, "Elija", "Wang", 9, null),
       (4, "Amelia", "Lopez", 11, null),
       (5, "Leo", "Hassan", 16, null),
       (6, "Isabella", "Ren", 1, 1),
       (7, "Asher", "Bibi", 2, 1),
       (8, "Nushi", "Pak", 3, 1),
       (9, "Mohammed", "Kumari", 5, 2),
       (10, "Ana", "Sanchez", 6, 2),
       (11, "Robert", "Mandal", 7, 2),
       (12, "Jean", "Sharma", 10, 3),
       (13, "Carlos", "Ramirez", 12, 4),
       (14, "Elena", "de Oliveira", 13, 5),
       (15, "Fatima", "Ghosh", 14, 5),
       (16, "Sergey", "Uddin", 15, 5);
