const prompt = require('prompt');
const colors = require('colors/safe');

prompt.message = colors.rainbow(`
    Welcome to the Course Cataloge

`);
prompt.delimiter = colors.yellow(":");

prompt.start();

const userOptions = [
    {
      name: "userInput",
      description: 
      colors.yellow(`
      Please choose an action from the following:
        1. View All Classes Available.
        2. View One Class
        `),
      pattern: /^[1-2]/,
      message: colors.red("Selection not valid: must only be numbers 1-2")
    }
  ];

  prompt.get(userOptions, (err, result) => {
    if( err) { return onError(err)}
    console.log(result.userInput);
  });
