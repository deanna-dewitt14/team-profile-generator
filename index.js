const inquirer = require('inquirer');
const fs = require('fs');

const questions = [];

function init(){
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
		message: 'What is your eployee ID number'
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
		message: 'Want to add another team memeber?',
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
}