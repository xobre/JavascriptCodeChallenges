export class Anagram {
  constructor(input) {
    this.input = input;
  }

  matches(words) {
    let result = []; // empty array to input results
    for (let i=0; i<words.length; i++) { // loop though array
      if (this.input.toLowerCase() == words[i].toLowerCase() && this.input.length == words[i].length) break; // words are not anagrams of themselves
      let regularizedString1 = this.input.toLowerCase().split('').sort().join('').trim(); //sort input word
      let regularizedString2 = words[i].toLowerCase().split('').sort().join('').trim(); //sort given words
      if (regularizedString1 === regularizedString2) { //compare the two
        result.push(words[i]); // add anagram 
      }
    }
    return result;
  }
}