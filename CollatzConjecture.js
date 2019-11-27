export const steps = (input, count = 0) => {
  if (input <= 0) {
    throw new Error('Only positive numbers are allowed');
  }
  if (input == 1) {
    return count;
  }
  
  else if (input % 2 == 0 ) {
    input = input / 2; 
    count ++ ;
    return steps(input ,count);
  }
  else 
  {
    input = input * 3 + 1;
    count ++ ;
    return steps(input, count);
  }
};