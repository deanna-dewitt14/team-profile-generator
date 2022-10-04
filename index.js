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
	]

	)
}