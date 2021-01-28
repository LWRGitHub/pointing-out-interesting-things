/*
 *******************************************************************************
 * - delay time in the `snooze` function for first part needs to be 2000 ms
 * 
 * 1. The code with print first "Step 1", then "Step 3" and then "Step 2"
 *    because of the setTimeout.
 * 
 * 
 * 2. Run this code using `node challenge1.js` You finde that it prints:
 *    "Step 1"
 *    "Step 3"
 *    "Step 2"
 * 
 * 
 * 3. Changeing the delay time from 2000 ms to 0 makes me think the script 
 *    would print "Step 1", then "Step 2", and then "Step 3"
 *    But acually as you can see when you run this code using 
 *    `node challenge1.js` You finde that it prints:
 *    "Step 1"
 *    "Step 3"
 *    "Step 2"
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

