/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.


*/
// GameObject
class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game`;
    }
}

// CharacterStats
class CharacterStats extends GameObject {
    constructor(charAttributes) {
        super(charAttributes);
        this.healthPoints = charAttributes.healthPoints;
        this.name = charAttributes.name;
    }
    takeDamage() {
        return `${this.name} took damage.`
    }
}

//Humanoid

class Humanoid extends CharacterStats {
    constructor(humanAttributes) {
        super(humanAttributes);
        this.team = humanAttributes.team;
        this.weapons = humanAttributes.weapons;
        this.language = humanAttributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`
    }
}


//Hero/Villain constructor

class Hero extends Humanoid {
    constructor(heroAttributes) {
        super(heroAttributes);
        this.damageAmount = heroAttributes.damageAmount;
    }
    doDamage(otherCharacter) {
        otherCharacter.healthPoints -= this.damageAmount;
        if (otherCharacter.healthPoints <= 0) {
            return otherCharacter.destroy();
        }
        console.log(`${this.name} attacks ${otherCharacter.name} for ${this.damageAmount} damage and leaves them with ${otherCharacter.healthPoints} health points!`)
    }
}

class Villain extends Hero {
    constructor(villainAttributes) {
        super(villainAttributes);
        this.specialDamage = villainAttributes.specialDamage;
    }
    specialAttack(otherCharacter) {
        otherCharacter.healthPoints -= this.specialDamage;
        console.log(`${this.name} attacks ${otherCharacter.name} with a special attack for ${this.specialDamage} damage and leaves ${otherCharacter.name} with ${otherCharacter.healthPoints} health points!`)
        if (otherCharacter.healthPoints <= 0) {
            otherCharacter.destroy();
        }
    }
}


//Characters
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

// Stretch task: 

const FlameWarrior = new hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 5,
    },
    hp: 20,
    name: 'Ryo Sanada',
    faction: 'Ronin Warriors',
    weapons: [
        'Sword',
        'White Blaze',
    ],
    language: 'Japanese',
});

const Talpa = new villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 3,
    },
    hp: 20,
    name: 'Talpa, The Dark Emperor',
    faction: 'Nether Realm',
    weapons: [
      'Double-Edged Swords',
      'Dark Warlords',
    ],
    language: 'Ancient',
  });
  

//Ready, Fight!
theHero.doDamage(theVillain);
theVillain.doDamage(theHero);
theVillain.specialAttack(theHero);
theHero.doDamage(theVillain);
theVillain.doDamage(theHero);
theHero.doDamage(theVillain)