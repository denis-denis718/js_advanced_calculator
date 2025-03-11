'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(num) {
      return this.result + num;
    },

    subtract(num) {
      return this.result - num;
    },

    multiply(num) {
      return this.result * num;
    },

    divide(num) {
      return this.result / num;
    },

    operate(fn, num) {
      this.result = fn.call(this, num); // Применяем функцию с контекстом

      return this; // Чейнинг
    },

    reset() {
      this.result = 0;

      return this; // Чейнинг
    },
  };
}

module.exports = makeCalculator;
