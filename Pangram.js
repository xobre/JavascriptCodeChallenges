export const isPangram = (word) => {
  if (word == "") return false;
  word = word.toLowerCase();
  word = word.replace(/[^a-z]/gi,'');
  let newSet = new Set(word);
  if (newSet.size < 26) return false;
  else return true;
};