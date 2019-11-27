export class PhoneNumber {
  constructor(... phone) {
    this._phoneNumber = phone;
  }

  number() {
    const regex = /\D+/gm;
    this._phoneNumber = this._phoneNumber.toString();
    let removedText = this._phoneNumber.replace(regex, '');
    if (removedText.length < 10 || removedText.length > 11) return null;
    
    if (removedText.length == 11){
      if (removedText[0] != 1) return null;
      else if (removedText[0] == 1) removedText = removedText.slice(1, removedText.length);
    }
    if (removedText.length == 10){
      if (removedText[0] == 1 || removedText[0] == 0) return null;
      else if (removedText[3] == 1 || removedText[3] == 0) return null;
      else return removedText;
    }
    return removedText;
  }
}