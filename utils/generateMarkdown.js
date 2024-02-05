// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Overview
${data.overview}

## Preview
![screenshot](./assets/screenshot.jpg)

## License
Licensed under the [${data.license}](https://github.com/${data.user}/${data.title}/blob/master/LICENSE.txt) license.

## Contact
- GitHub: [${data.user}](https://github.com/${data.user})
- Email: <${data.email}>
`

}

module.exports = generateMarkdown;
