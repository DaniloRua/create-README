// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Overview
${data.overview}

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#preview)
3. [License](#License)
4. [Tests](#Tests)
5. [Contact](#Contact)

## Installation

- Clone the repository
- Install using npm packages ${data.install}

## Usage

- After installation type a command line ${data.command}
- Answer the questions
![screenshot](./assets/screenshot.png)

## License
Licensed under the [${data.license}](https://github.com/${data.user}/${data.title}/blob/master/LICENSE.txt) license.

## Tests

- Run test using command line ${data.test}

## Contact
- GitHub: [${data.user}](https://github.com/${data.user})
- Email: <${data.email}>
`
}

module.exports = generateMarkdown;
