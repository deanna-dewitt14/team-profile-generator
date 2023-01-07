const inquirer = require('inquirer');
const fs = require('fs');
inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const questions = [];

/* function init(){
	return inquirer
	.prompt([
	{
		type: 'input',
		name: 'managerName',
		message: 'What is your name?'
	},
	{
		type: 'input',
		name: 'id',
		message: 'What is your employee ID number?'
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email address?'
	},
	{
		type: 'input',
		name: 'managerOfficeNumber',
		message: 'what is the office number?'
	},
	{
		type: 'loop',
		name: 'team',
		message: 'Want to add another team member?',
		questions: [
			{
			type: 'list',
			name: 'employeeType',
			choices: ['Engineer','Intern']
			},
			{
			type: 'input',
			name: 'employeeName',
			message: 'What is the employees name?',
			},
			{
			type: 'input',
			name: 'employeeID',
			message: 'What is the employees ID?'
			},
			{
			type: 'input',
			name: 'employeeEmail',
			message: 'What is the employees email address?',
			},
			{
				type: 'input',
				name: 'githubUN',
				message: 'What is employees GitHub username?',
				when: (team) => team.employeeType === 'Engineer'
			},
			{
				type: 'input',
				name: 'internSchool',
				message: 'What is the name of Interns School?',
				when: (team) => team.employeeType === 'Intern'
			},
		],
	}
	])
	.then(answers => {
		var manager = new Manager(answers.managerName, answers.id,answers.email, answers.officeNumber);
		var engineer = [];
		var interns = [];

		answers.team.forEach(function(e){
			if (e.employeeType === 'Engineer') {
				const engineer = new Engineer(e.employeeName, e.employeeID, e.employeeEmail, e.githubUN);
				engineers.push(engineer);
			}else if (e.employeeType === 'Intern'){
				const intern = new Intern(e.employeeName, e.employeeID, e.employeeEmail, e.internSchool);
				interns.push(intern);
			}
		});
	var managerCard = generateManagerCard(manager);
	var engineerCard = generateEngineerCard(engineer);
	var internCard = generateInternCard(intern);
	var html = generateHtml(managerCard, engineerCard, internCard);

	writeToFile(html);
	})
}
function writeToFile(html) {
	fs.writeToFile('index.html', html, function (err) {
		if (err) throw err;
		console.log("Creating Team!");
});	
}

init(); */ 

function init() {
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee ID number?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
      },
      {
        type: 'loop',
        name: 'team',
        message: 'Add another team member?',
        questions: [
            {
                type: 'list',
                name: 'employeeType',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'employeeId',
                message: 'What is the employees ID?',
            },
            {
                type: 'input',
                name: 'employeeName',
                message: 'What is the employees name?',

            },
            {
                type: 'input',
                name: 'employeeEmail',
                message: 'What is the employees email address?',
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: 'What is the employees GitHub username?',
                when: (teamMember) => teamMember.employeeType === 'Engineer'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What is the name of the employees school?',
                when: (teamMember) => teamMember.employeeType === 'Intern'
            },
        ],
      }
    ])
    .then(projectData => {
        var manager = new Manager(projectData.managerName, projectData.id, projectData.email, projectData.officeNumber);
        var engineers = [];
        var interns = [];

        projectData.team.forEach(function(e) {
            if (e.employeeType === 'Engineer') {
                const engineer = new Engineer(e.employeeName, e.employeeId, e.employeeEmail, e.githubUsername);
                engineers.push(engineer);
            } else if (e.employeeType === 'Intern') {
                const intern = new Intern(e.employeeName, e.employeeId, e.employeeEmail, e.internSchool);
                interns.push(intern);
            }
        });

        var managerCard = generateManagerCard(manager);
        var engineersCard = generateEngineersCard(engineers);
        var internsCard = generateInternsCard(interns);
        var html = generateHtml(managerCard, engineersCard, internsCard);

        writeToFile(html);
    })
}

function writeToFile(html) {
    fs.writeFile('index.html', html, function (err) {
        if (err) throw err;
        console.log('Generating Team Members...');
    });
}

init();