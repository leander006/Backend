console.log(x);

var x = function gun() {
  console.log("gun");
};

x(); // global

// gun(); // Not global

/* 
      Recursion is tricky
      Are hard to debug
*/

// Not anonymous

function factorial(n) {
  return n < 1 ? 1 : n * factorial(n - 1);
}

console.log([1, 2, 3, 4, 5].map(factorial));

// If anonymous then how to call it in recursion