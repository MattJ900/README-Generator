// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)  
## Description
${data.description}
## Table of Contents
* [installation](#installation)
* [usage](#usage)
* [contributing](#contributing)
* [Tests](#Tests)
* [license](#license)
* [questions](#questions)
## installation
${data.installation}
## usage
${data.usage}
## contributing
${data.contributing}
## tests
${data.tests}
## license
${data.license}
## questions
You can contact me at https://github.com/${data.github} or ${data.email}
`;
}

module.exports = generateMarkdown;
