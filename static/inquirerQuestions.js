const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your readme?',
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a Title!');
                    return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project',
        validate: (descInput) => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a Description!');
                    return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install your application? (INSTALLATION)',
        validate: instInput => {
            if (instInput) {
                return true;
            } else {
                console.log('Please enter an installation guide!');
                    return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write out usage Information',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter usage Information!');
                    return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are contribution guidelines for this project?',
        validate: contrInput => {
            if (contrInput) {
                return true;
            } else {
                console.log('Please enter your Contributions Guidelines!');
                    return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write test instructions',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please write test instructions!');
                    return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license',
        choices: [
            'Creative commons',
            'Attribution',
            'Attribution non-commercial'
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github user URL?',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a github username url');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter an email address!');
                return false;
            }
        }
    },
];

module.exports = questions;