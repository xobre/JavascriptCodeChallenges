export const isIsogram = (word) => {
  word = word.toLowerCase();
  word = word.replace(/[^a-z0-9]/gi,'');
  let newSet = new Set(word);
  return newSet.size == word.length;
};