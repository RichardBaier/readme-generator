const licenseObjects = require('../static/licenseObjects');

function getLicenseData(license) {
    switch(license) {
        case 'Creative commons':
            return licenseObjects[0];
        case 'Attribution':
            return licenseObjects[1];
        case 'Attribution non-commercial':
            return licenseObjects[2];
    }
}

module.exports = getLicenseData;