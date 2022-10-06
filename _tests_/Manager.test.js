const Manager = require('../lib/Manager')

describe('class: Manager', () => {
    describe('managerTest', () => {
        test('Should return the name of the manager', () => {
            const manager = new Manager('Deanna', 1, 'deanna.dewitt14@gmail.com', 1);
            expect(manager.getName()).toBe('Deanna');
        });

        test('Should return the id of the manager', () => {
            const manager = new Manager('Deanna', 1, 'deanna.dewitt14@gmail.com', 1);
            expect(manager.getId()).toBe(1);
        });

        test('Should return the email of the manager', () => {
            const manager = new Manager('Deanna', 1, 'deanna.dewitt14@gmail.com', 1);
            expect(manager.getEmail()).toBe('deanna.dewitt14@gmail.com');
        });

        test('Should return the role of the manager', () => {
            const manager = new Manager('Deanna', 1, 'deanna.dewitt14@gmail.com', 1);
            expect(manager.getRole()).toBe('Manager');
        });
    });
});