class Animal {
    name: string;
    age: number;
    sound: string;
  
    constructor(name: string, age: number, sound: string) {
      this.name = name;
      this.age = age;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(`${this.name} says ${this.sound}`);
    }
  }
  
  class Mammal extends Animal {
    constructor(name: string, age: number, sound: string) {
      super(name, age, sound);
    }
  
    giveBirth() {
      console.log(`${this.name} gives birth to live young`);
    }
  }
  
  class Bird extends Animal {
    constructor(name: string, age: number, sound: string) {
      super(name, age, sound);
    }
  
    layEggs() {
      console.log(`${this.name} lays eggs`);
    }
  }
  
  class Fish extends Animal {
    constructor(name: string, age: number, sound: string) {
      super(name, age, sound);
    }
  
    swim() {
      console.log(`${this.name} swims`);
    }
  }
  
  
  const lion = new Mammal("Lion", 5, "Roar");
  lion.makeSound();
  lion.giveBirth();
  
  const eagle = new Bird("Eagle", 2, "Screech");
  eagle.makeSound();
  eagle.layEggs();
  
  const salmon = new Fish("Salmon", 1, "Bloop");
  salmon.makeSound();
  salmon.swim();
  