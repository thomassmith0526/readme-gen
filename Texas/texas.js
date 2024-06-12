// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const apacheLicense = 'Apache license 2.0'
// const eclipseLicense = 'Eclipse Public License 2.0'
// const mit = 'MIT'
// const wtfpl = 'WTFPL'
// const zLibLicense = 'zLib License'
// const noLicenses = 'none'
function renderLicenseBadge(license) {
  if (!license) {
    return [];
  }
  const badge = {
    apacheLicense:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    eclipseLicense:
      "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    wtfpl:
      "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
    zLibLicense:
      "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
  };
  console.log(badge.mit);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    apacheLicense: "https://apache.org/licenses/LICENSE-2.0.txt",
    eclipseLicense: "https://www.eclipse.org/legal/epl-2.0/",
    mit: "https://www.mit.edu/~amini/LICENSE.md",
    wtfpl: "http://www.wtfpl.net/",
    zLibLicense: "https://zlib.net/zlib_license.html",
    noLicenses: {},
  };
  console.log(licenseLink.zLibLicense);
  if (license && license.link) {
    return license.link;
  } else {
    return null;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.readMe}
  ## GitHub repo User Name
  ${data.userGitHubName}
  ### Email
  ${data.userEmail}
   ## Table of Contents
  * [Description](#Description)
  * [Lincese](#Lincese)
  * [Test](#Test)
  * [Contributing](#Contributing)
 ## Description
  ${data.description}
  ## Lincese
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  ${data.License}
  ## Test
  ${data.command}
  ## Contributing
  ${data.contributing}
  #Screen Shots
  #Question
  If you have any questions please ${data.userEmail}>. You can find more of ${
    data.userName
  } at ${data.userGitHubName}




`;
}
// renderLicenseBadge()
// renderLicenseLink()
module.exports = generateMarkdown;
