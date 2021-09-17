INSERT INTO department (name)
VALUES ("Production"),
       ("Web Development"),
       ("Marketing"),
       ("Accounting and Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Machine Setup Specialist", "$43,000", 1),
       ("Maintenance Personnel", "$100,456", 1),
       ("Machine Operator", "$57,676", 1),
       ("Production Manager", "$106,910", 1)
       ("Front-End Web Developer", "$105,660", 2),
       ("Back-End Web Developer", "$150,350", 2),
       ("Full Stack Web Developer", "$171,006", 2),
       ("Web Development Manager", "$96,366", 2)
       ("Project Manager", "$72,540", 3),
       ("Analytics Specialist", "$77,017", 3),
       ("Brand Manager", "$106,000", 3),
       ("Marketing Analyst", "$77,017", 3),
       ("Payroll", "$53,191", 4),
       ("Reporting and Financial Statements", "$68,000", 4),
       ("Tax and Compliance", "$111,750", 4);
       ("Finance Manager", "120,000",4)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Smith", 4),
       ("Maria", "Garcia", 8),
       ("Elija", "Wang", 9),
       ("Amelia", "Lopez", 11)
       ("Leo", "Hassan", 16),
       ("Isabella", "Ren", 1, 4),
       ("Asher", "Bibi", 2, 4),
       ("Nushi", "Pak", 3, 4),
       ("Mohammed", "Kumari", 5, 8),
       ("Ana", "Sanchez", 6, 8),
       ("Robert", "Mandal", 7, 8),
       ("Jean", "Sharma", 10, 9),
       ("Carlos", "Ramirez", 12, 11),
       ("Elena", "de Oliveira", 13, 16),
       ("Fatima", "Ghosh", 14, 16),
       ("Sergey", "Uddin", 15, 16),