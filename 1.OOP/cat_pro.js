var Animal = require('./animal_pro');

var animal = new Animal('Andy');
animal.showName();

// Inheritance
function Cat (name) {
  Animal.call(this, name);
};
Cat.prototype = new Animal();
// Override
Cat.prototype.makeSound = function () {
  console.log('meow~');
};

var cat = new Cat('Catty');
cat.makeSound();
cat.showName();
