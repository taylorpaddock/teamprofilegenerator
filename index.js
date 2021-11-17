const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

const generateHTML = require("./src/generateHTML");

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Who is the manager of this team?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID?",
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the managers office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number.");
                    return false;
                }
            }
        },
    ])
    .then(managerInput => {
        const { name, id, email, office } = managerInput;
        const manager = new Manager(name, id, email, office);
        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log('Adding Employees to the team...');

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please pick your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter employee name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your employee's ID?",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("Please enter employee ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your employee's email?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter employee email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your engineer's github username?",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does your intern attend?",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Would you like to add more employees?",
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confrimAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if(confrimAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile web page has sucessfully been created.")
        }
    })
};

addManager()
.then(addEmployee)
.then(teamArray => {
    return generateHTML(teamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});