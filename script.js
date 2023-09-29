'use strict';

//** Scope and the Scope Chain */

// Child scopes can reach back to parent scopes, but not the other way around.

//Scoping asks the question - where do variabls live? or where can we access a certain variable, and where not?

// only let an dconst cariable are block-scoped. vaeruable declared with a car end up in the closest function scope

// In javascript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code function and blocks are written

// Every scope always has access to all the variable from all its outer scopes. this is the scope chain!

// when a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable its looking for . this is called variable lookup.

// the scope chain is a one-way street. a scope will never, ever have access to the variables of an inner scope.

// the scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes.

// the scope chain has nothing to do with the order in which function were called. it does not affect the scope chain at all.

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
