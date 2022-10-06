const Employee = require('../lib/Employee')

describe('class: Employee', () => {
    describe('employeeTest', () => {
        test('Return the name of the employee', () => {
            const employee = new Employee('Deanna', 2, 'deanna.dewitt14@gmail.com');
            expect(employee.getName()).toBe('Deanna');
        });

        test('Return the id of the employee', () => {
            const employee = new Employee('Deanna', 2, 'deanna.dewitt14@gmail.com');
            expect(employee.getId()).toBe(2);
        });

        test('Return the email of the employee', () => {
            const employee = new Employee('Deanna', 2, 'deanna.dewitt14@gmail.com');
            expect(employee.getEmail()).toBe('deanna.dewitt14@gmail.com');
        });

        test('Return the role of the employee', () => {
            const employee = new Employee('Deanna', 2, 'deanna.dewitt14@gmail.com');
            expect(employee.getRole()).toBe('Employee');
        });
    });
});