// Global scope

var name = "leander";

function greet() {
  console.log(`Hello`, name);
}

function fun() {
  console.log(`Have fun!`, name);
}

greet();
fun();

// Function scope

var name = "leander";

function greet() {
  var x = 10;
  console.log(`Hello`, x);
  function test() {
    console.log(x);
  }
  test();
}

function fun() {
  console.log(`Have fun!`, name);
}

greet();
// console.log(`Testing function scope ` + x); // error
// Block scope

{
  x = 10;
  console.log(x);
}

console.log("Testing block scope ", x); // no error


