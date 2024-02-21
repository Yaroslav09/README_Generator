// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  # ${data.title}

  ## Description
  ### ${data.description}

  ## Table of Contents
  ### ${data.tableOfContents}
  
  ## Installation
  ### ${data.installation}
  
  ## Usage
  
  ## License
  
  ## Contributing
  
  ## Tests

  ## Questions

`;
}

module.exports = generateMarkdown;
