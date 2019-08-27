const { HashMap } = require('./hashMap');

function main() {
  const arr = [
    {"Hobbit": "Bilbo"}, 
    {"Hobbit": "Frodo"},
    {"Wizard": "Gandolf"}, 
    {"Human": "Aragon"}, 
    {"Elf": "Legolas"}, 
    {"Maiar": "The Necromancer"},
    {"Maiar": "Sauron"}, 
    {"RingBearer": "Gollum"}, 
    {"LadyOfLight": "Galadriel"}, 
    {"HalfElven": "Arwen"},
    {"Ent": "Treebeard"},
  ];
  let lor = new HashMap();
  lor.MAX_LOAD_RATIO = 0.5;
  lor.SIZE_RATIO = 3;
  arr.forEach(item => {
    const type = Object.keys(item)[0];
    lor.set(type, item[type]);
  })
  return lor;
}

function removeDuplicates(string) {
  const strArr = str.split('');
  let strHash = new HashMap();
  strHash.MAX_LOAD_RATIO = 0.5;
  strHash.SIZE_RATIO = 3
  strArr.forEach()
  // how to implement using hashmap?
  /* 
    hash key, values??
    Value = index position of the string?
    
  */
}

function permutePalindrome() {

}

function anagramGrouping() {

}

function mainWithChain() {

}

module.exports = {
  main,
  removeDuplicates,
  permutePalindrome,
  anagramGrouping,
  mainWithChain,
}