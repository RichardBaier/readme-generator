const getLicenseData = require('./getLicenseData');

// Function that generates markdown for README
function generateMarkdown(data) {
    const {title, description, installation, usage, contributions, tests, license, github, email} = data;

    const {badge: licenseBadge, text: licenseText, link: licenseLink} = getLicenseData(license);

    const readmeContent = 
        `${licenseBadge}
    # ${title}
    ## Description
    ${description}
    ## Table of Contents
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [Contributions](#contributions)
    4. [Test Instructions](#test-instructions)
    5. [License](#license)
    6. [Questions](#questions)
    <a name='installation'></a>
    ## Installation
    ${installation}
    <a name='usage'></a>
    ## Usage
    ${usage}
    <a name='contributions'></a>
  ## Contributions  
  ${contributions}  
  <a name='test-instructions'></a>
  ## Test Instructions  
  ${tests}
  <a name='license'></a>
  ## License  
  ${licenseLink}  
  ${licenseText}
  <a name='questions'></a>
  ## Questions  
  If you have any further questions you may contact me at:  
  GitHub: [My GitHub](${github})  
  Email: ${email}`;

  return readmeContent;
}

module.exports = generateMarkdown;