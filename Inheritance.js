var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " says ").concat(this.sound));
    };
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(name, age, sound) {
        return _super.call(this, name, age, sound) || this;
    }
    Mammal.prototype.giveBirth = function () {
        console.log("".concat(this.name, " gives birth to live young"));
    };
    return Mammal;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, sound) {
        return _super.call(this, name, age, sound) || this;
    }
    Bird.prototype.layEggs = function () {
        console.log("".concat(this.name, " lays eggs"));
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, sound) {
        return _super.call(this, name, age, sound) || this;
    }
    Fish.prototype.swim = function () {
        console.log("".concat(this.name, " swims"));
    };
    return Fish;
}(Animal));
var lion = new Mammal("Lion", 5, "Roar");
lion.makeSound();
lion.giveBirth();
var eagle = new Bird("Eagle", 2, "Screech");
eagle.makeSound();
eagle.layEggs();
var salmon = new Fish("Salmon", 1, "Bloop");
salmon.makeSound();
salmon.swim();
