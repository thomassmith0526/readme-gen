// TODO: Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  switch (license) {
    case "BSD 3-Clause License":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "Eclipse Public License 2.0":
      return "[![License](https://img.shields.io/badge/License-EPL%202.0-brightgreen.svg)](https://www.eclipse.org/legal/epl-2.0/)";
    case "MIT":
      return "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "WTFPL":
      return "[![License](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/)";
    case "zLib License":
      return "[![License](https://img.shields.io/badge/License-zLib-brightgreen.svg)](https://opensource.org/licenses/Zlib)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  const licenseLink = {
    'BSD 3-Clause License': '(https://opensource.org/licenses/BSD-3-Clause)',
    'Eclipse Public Kicense 2.0': "(https://www.eclipse.org/legal/epl-2.0/)",
    'MIT': "(https://opensource.org/licenses/MIT)",
    'WTFPL': "(http://www.wtfpl.net/)",
    'zLib License': "(https://opensource.org/licenses/Zlib)",
    noLicenses: {},
  };
   
  return licenseLink[license] || ''
 }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.License);
  const link = renderLicenseLink(data.license)
  console.log(badge)
  return `# ${data.readMe}
  ## GitHub repo User Name
  ${data.userGitHubName}
  ### Email
  ${data.userEmail}
   ## Table of Contents
  * [Installation](#Installation)
  * [Description](#Description)
  * [Lincese](#Lincese)
  * [Test](#Test)
  * [Contributing](#Contributing)
 ## Installation
 To install the corrcet dependencies, run the following command<br>
 \`\`\`${data.command}\`\`\`
 ## Description
  ${data.description}
## Lincese
  ${badge}
  ${link}
  ${data.License}
## Test
  ${data.test}
## Contributing
  ${data.contributing}
## Screen Shots
## Question
  If you have any questions please ${data.userEmail}. You can find more of ${
    data.userName
  } work at ${data.userGitHubName}
`;
}
// renderLicenseBadge()
// renderLicenseLink()
module.exports = generateMarkdown;
