export const validate = (number) => {
  let numDigits = number.toString().length;
  let sum = 0;
  for (let i = 0; i < numDigits; i++) {
    let digit = Number(String(number).charAt(i));
    sum += Math.pow(digit, numDigits);
  }
  return sum === number;
};