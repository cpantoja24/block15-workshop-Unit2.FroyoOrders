// Prompt the user for a list of froyo flavos separated by commas.
const userInputString = prompt(
    'Please enter a list of froyo flavors seperated by a comma',
    'vanilla,strawberry,coffee,coffee'
  );

// Split the string of flavors into an array of strings.
const stringArray = userInputString.split(",");

console.log(stringArray);

