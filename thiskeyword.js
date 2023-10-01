'use strict';

console.log(this);

const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge1(1991);

const calcAge1Arrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge1Arrow(1991);

const jonas1 = {
  year: 1991,
  calcAge1: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas1.calcAge1();

const matilda = {
  year: 2017,
};

matilda.calcAge1 = jonas1.calcAge1;
matilda.calcAge1();

const f = jonas1.calcAge1;
// f();
