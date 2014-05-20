
// Constructor Pattern
function Animal (name) {
    this.name = name;
};

// Prototype Pattern
Animal.prototype = {
  setName: function (name) {
    this.name = name;
  },
  makeSound: function () {
  },
  showName: function () {
    console.log(this.name);
  }
}

module.exports = Animal;
