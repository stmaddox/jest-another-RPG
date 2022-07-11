module.exports = function() {
    this.name = 'health';
    this.value = 20;
};

const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

console.log(new Potion());