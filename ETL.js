export const transform = (letter) => {
  let blah = {};
  for (let [key, value] of Object.entries(letter)){
    for (let i = 0; i < value.length; i++){
      let newValue = value[i];
      newValue = newValue.toLowerCase();
      key = parseInt(key);
      blah[newValue]=key;
    }
  }
  return blah;
};