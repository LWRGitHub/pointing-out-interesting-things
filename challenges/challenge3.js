/*
 *******************************************************************************
 * 
 * 1. Reading over the `greetAndUppercase` function. 
 *    I can see the Async/Await function set up in a user friendly familiar way. 
 *    The return type is a promise.
 * 
 * 
 * 2. Run block #1 with `node challenge3.js` to see what using 
 *    `greetAndUppercase` as a normal function would look like, we see It prints 
 *    a pending promise.
 * 
 * 
 * 3. Runing block #2 we see the code prints out:
 *    'HELLO THERE, DUCKY'
 * 
 * 
 * 4.Using your solution from Part 3 you can see that the 'spacer' method prints:
 * 
 *    'H E L L O   T H E R E ,   D U C K Y'
 * 
 * 
 *******************************************************************************
 */


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
      }, 500);
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
        }, 500);
    });
}

async function greetAndUppercase(name) {
    greeting = await greet(name)
    uppercasedGreeting = await uppercaser(greeting)
    return uppercasedGreeting
}

async function spacer(str) {
    strSpaced = await str.split('').join(' ')
    return strSpaced
}

// Block #1
result = greetAndUppercase('Ducky')
console.log(result)

// Block #2
greetAndUppercase('Ducky')
    .then(function(result) {
        console.log(result)
        return spacer(result);
    })
    .then(function(spacerResult) {
        console.log(spacerResult)
    })
    .catch(function(err) {
        console.log(err)
    })