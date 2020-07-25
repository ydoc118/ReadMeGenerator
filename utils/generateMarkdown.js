// function to generate markdown for README
function generateMarkdown(data) {
     return `# ${data.title}

## Description:
${data.description}

## Table of Contents:

* [Installation](##installation)
* [Information](##info)
* [License](##license)
* [Contributing](##contributing)
* [Tests](##test)
* [Questions](##questions)

## Installation

To install all necessary dependencies, run the following command:

" ${data.installation} "

## Information

${data.info}

## License

This project is licensed under the ${data.license} license.

## Contributing

To contribute to this repo, ${data.contributing}

## Tests

To run tests on the repo, run the following command:

" ${data.test} "

## Questions

If you have any questions or comments about the repo, please feel free to email me at ${data.email},
or visit my GitHub to see more of my work at [${data.username}](https://github.com/${data.username})

## Image of Repo

![Image of repo!](./utils/${data.imgSelect})

     `;
}
  
  module.exports = generateMarkdown;
  