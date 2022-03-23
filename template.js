// Variables:
const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');

// Variable to track count
var count = 0;
counter.innerHTML = count;

// Increment count
increment.addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
});
// Decrement count
decrement.addEventListener('click', () => {
    count--;
    counter.innerHTML = count;
});
// Reset count
reset.addEventListener('click', () => {
    count = 0;
    counter.innerHTML = count;
});







 



