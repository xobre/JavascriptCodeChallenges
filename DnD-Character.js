export const abilityModifier = (x) => {
  if (x >= 19) throw new Error('Ability scores can be at most 18');
  if (x <= 2) throw new Error("Ability scores must be at least 3");
  let y = Math.floor((x - 10) / 2);
  return y;
};

export class Character {
  constructor (){
    this._strength = Character.rollAbility();
    this._charisma = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
  }

  static rollAbility() {
    let x = Math.floor(Math.random() * 16) + 3;
    return x;
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
  let hp = abilityModifier(this._constitution);
  hp += 10;
  return hp;
  }
}