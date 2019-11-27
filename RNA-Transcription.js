export const toRna = (input) => {
  let resultArray = [];
  for (let i = 0; i < input.length; i++){
if (input[i] == "G"){
resultArray.push("C");
} else if (input[i] == "C"){
  resultArray.push("G");
} else if (input[i] == "T"){
  resultArray.push("A");
} else if (input[i] == "A"){
  resultArray.push("U");
} 
}
let resultString = resultArray.join("");
return resultString;
};
