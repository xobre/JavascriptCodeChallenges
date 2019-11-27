export const parse = (input) => {
  let temp = []
  input = input.replace(/-/g, " ");
  input = input.replace(/_/g, "");
  let splitArray = input.split(" ");
  for (let i = 0; i < splitArray.length; i++){
    temp.push(splitArray[i].charAt(0));
  }
  let result =temp.join('');
  result = result.toUpperCase();
return result;
};