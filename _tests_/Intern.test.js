const Intern = require('../lib/Intern')

describe('class: Intern', () => {
    describe('internTest', () => {
        test('Should return the name of the intern', () => {
            const intern = new Intern('Deanna', 4, 'deanna.dewitt14@gmail.com', 'UNC Chapel Hill');
            expect(intern.getName()).toBe('Deanna');
        });

        test('Should return the id of the intern', () => {
            const intern = new Intern('Deanna', 4, 'deanna.dewitt14@gmail.com', 'UNC Chapel Hill');
            expect(intern.getId()).toBe(4);
        });

        test('Should return the email of the intern', () => {
            const intern = new Intern('Deanna', 4, 'deanna.dewitt14@gmail.com', 'UNC Chapel Hill');
            expect(intern.getEmail()).toBe('deanna.dewitt14@gmail.com');
        });

        test('Should return the role of the intern', () => {
            const intern = new Intern('Deanna', 4, 'deanna.dewitt14@gmail.com', 'UNC Chapel Hill');
            expect(intern.getRole()).toBe('Intern');
        });

        test('Should return the school of the intern', () => {
            const intern = new Intern('Deanna', 4, 'deanna.dewitt14@gmail.com', 'UNC Chapel Hill');
            expect(intern.getSchool()).toBe('UNC Chapel Hill');
        });
    });
});