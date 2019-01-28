/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.


*/

function GameObject(attributes){
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
  }
  
  GameObject.prototype.destroy = function() {
    console.log(`Object was removed from the game`)
  }
    
  function CharacterStats(characterattributes){
    //This binds the "this" keyword to GameObject
    GameObject.call(this, characterattributes);
    this.healthPoints = characterattributes.healthPoints;
    this.name = characterattributes.name;
  }
  
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage`;
  }
  

  function Humanoid(humanAttributes) {
    CharacterStats.call(this, humanAttributes);
    this.team = humanAttributes.team;
    this.weapons = humanAttributes.weapons;
    this.damage = humanAttributes.damage;
    this.language = humanAttributes.language;
  }
  Humanoid.prototype = Object.create(CharacterStats.prototype);
 
  Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}`;
  }
  Humanoid.prototype.attack = function (objectToAttack) {
    if (objectToAttack.healthPoints <= 0) {
      objectToAttack.destroy();
      console.log(`${objectToAttack.name} has been destroyed`);
    } else {
      objectToAttack.healthPoints -= this.damage;
      console.log(`
      ${this.name} attacked ${objectToAttack.name} for ${this.damage}\n
      ${objectToAttack.name} is now at ${objectToAttack.healthPoints} Health Points`);
    }
  }
 
  Humanoid.prototype.isAlive = function () {
    if(this.healthPoints > 0){
      this.alive = true;
    }else{
      this.alive = false;
      console.log(`${this.name} has been defeated!`)
    }
  }
  
  Humanoid.prototype.printStatistics = function () {
    console.log(`
    ===${this.name}=== \n
    Current Health: ${this.healthPoints} \n
    Weapons Available: ${this.weapons}
    ==================
    `)
  }
      
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Kento Rei Fang',
    team: 'Mage Warrior',
    weapons: [
      'Staff',
    ],
    language: 'Anime J',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sage Date',
    team: 'Ancient Warriors',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Anime J',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Rowen Hashiba',
    team: 'Ronin Warriors',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Ancient Japanese',
});

    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Kento Rei Fang
    console.log(swordsman.team); // Ancient Warriors
    console.log(mage.weapons); // Staff
    console.log(archer.language); // Ancient Japanese
    console.log(archer.greet()); // Rowen Hashiba offers a greeting in Ancient Japanese.
    console.log(mage.takeDamage()); // Kento Rei Fang took damage.
    console.log(swordsman.destroy()); // Sage Date was removed from the game.