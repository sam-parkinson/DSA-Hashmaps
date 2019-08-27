const HashMap = require('./hashMap');

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

module.exports = {
  main,
}