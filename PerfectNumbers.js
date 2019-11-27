export const classify = (input) => {
  if (input < 1) throw new Error('Classification is only possible for natural numbers.');
  let sum = 0;
  let factArray = factors(input);
  factArray.pop();
  for (let i = 0; i < factArray.length; i++){
    sum += factArray[i];
  }
if (sum == input) return 'perfect';
else if (sum > input) return 'abundant';
else return 'deficient';
};
const factors = input => [...Array(input + 1).keys()].filter(i=>input % i === 0);