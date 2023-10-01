'use strict';

const jonas1 = {
  firstName: 'Jonas1',
  year: 1991,
  calcAge1: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);

    // isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas1.greet();
jonas1.calcAge1();
