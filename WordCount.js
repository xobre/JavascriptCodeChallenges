export class Words {
  count(input) {
    let words = input.trim().toLowerCase().split(/\s+/); // use regex to split on any length of white space
    let result = {};
    for (let index = 0; index < words.length; index++) {
      if (!result.hasOwnProperty(words[index])) {
        result[words[index]] = 1;
      } else {
        result[words[index]] ++;
      }
    }
    return result;
  }
}