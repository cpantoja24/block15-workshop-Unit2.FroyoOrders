// Prompt the user for a list of froyo flavos separated by commas.
const userInputString = prompt(
    'Please enter a list of froyo flavors seperated by a comma. No spaces!',
    'vanilla,strawberry,coffee,chocolate,pomegranate'
  );

// Split the string of flavors into an array of strings.
const stringArray = userInputString.split(",");

console.log(stringArray);

// Build an object to track which flavors you have observed so far
const flavorCounter = (array) => {
    const flavors = {
        vanilla: 0,
        strawberry: 0,
        coffee: 0,
        chocolate: 0,
        pomegranate: 0
    }
// Iterate through the array of flavors and update object
    for (let i = 0; i < array.length; i++) {
        const flavor = array[i];

        if (flavor === 'vanilla' || flavor === 'Vanilla') {
            flavors.vanilla += 1;
        } else if (flavor === 'strawberry' || flavor === 'Strawberry') {
            flavors.strawberry += 1;
        } else if (flavor === 'coffee' || flavor === 'Coffee') {
            flavors.coffee += 1;
        } else if (flavor === 'chocolate' || flavor === 'Chocolate') {
            flavors.chocolate += 1
        } else if (flavor === 'pomegranate' || flavor === 'Pomegranate') {
            flavors.pomegranate += 1;
        } else {
            return "We don't carry that flavor."
        }
    }
        return flavors;
}

console.table(flavorCounter(stringArray))