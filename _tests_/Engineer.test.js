const Engineer = require('../lib/Engineer')

describe('class: Engineer', () => {
    describe('engineerTest', () => {
        test('Should return the name of the engineer', () => {
            const engineer = new Engineer('Deanna DeWitt', 1, 'deanna.dewitt14@gmail.com', 'deanna-dewitt14');
            expect(engineer.getName()).toBe('Deanna DeWitt');
        });

        test('Should return the id of the engineer', () => {
            const engineer = new Engineer('Deanna DeWitt', 1, 'deanna.dewitt14@gmail.com', 'deanna-dewitt14');
            expect(engineer.getId()).toBe(1);
        });

        test('Should return the email of the engineer', () => {
            const engineer = new Engineer('Deanna DeWitt', 1, 'deanna.dewitt14@gmail.com', 'deanna-dewitt14');
            expect(engineer.getEmail()).toBe('deanna.dewitt14@gmail.com');
        });

        test('Should return the role of the engineer', () => {
            const engineer = new Engineer('Deanna DeWitt', 1, 'deanna.dewitt14@gmail.com', 'deanna-dewitt14');
            expect(engineer.getRole()).toBe('Engineer');
        });

        test('Should return the github of the engineer', () => {
            const engineer = new Engineer('Deanna DeWitt', 1, 'deanna.dewitt14@gmail.com', 'deanna-dewitt14');
            expect(engineer.getGithub()).toBe('deanna-dewitt14');
        });
    });
});