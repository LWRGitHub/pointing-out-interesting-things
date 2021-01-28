/*
 *******************************************************************************
 * 
 * 1. Reading over the code that follows. It looks like the Following will 
 *    be printed:
 *    'Hello there, Ducky'
 *    'MAKE SCHOOL IS AWESOME!!!' 
 *    & YES, When you run the code with node challenge2.js thats what is  
 *    printed
 * 
 * 
 * 2. What happens if greet() fails? Make it fail by changing 'name' to a number
 *    instead of a string. What happens? Does uppercaser() still run?
 *    it prints:
 *    'Received an error!'
 *    'Name must be a string!'
 *    & Clearlly uppercase() doesn't run
 * 
 * 
 * 3. What happens if greet() succeeds and uppercaser() fails? Modify your code
 *    to achieve this result by changing the values of 'name' and 'my_str' and
 *    run the code again.
 *    It prints:
 *    'Hello there, Ducky'
 *    'Received an error!'
 *    'Argument to uppercaser must be string'
 * 
 * 
 * 4. spacer(str) method that takes a string as input and returns the 
 *    input string with a space added between each character. 
 *    E.g. 'foo' -> 'f o o'
 *    & only has one catch() block
 * 
 *******************************************************************************
 */

function spacer(str) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof str === 'string') { 
        resolve(str.split('').join(' '));
      } else {
        reject('The word must be a string!');
      }
    }, 1000);
  });
}

 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 1000);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 1500);
    });
}

name = "Ducky"
my_str = "Make School is Awesome!!!"

greet(name)
    .then((greetResult) => {
        console.log(greetResult)
        return uppercaser(my_str);
    })
    .then((uppercaserResult) => {
        console.log(uppercaserResult)
        return spacer(name);
    })
    .then((spacerResult) => {
        console.log(spacerResult)
    })
    .catch((err) => {
        console.log('Received an error!')
        console.log(err);
    });
