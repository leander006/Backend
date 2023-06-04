// Var
console.log(z);

function fun() {
  console.log(x);
  var x = 10;
  console.log("x");
}

{
  var y = 29;
  console.log(y);
}
var z = 10;
if (true) {
  var z = 90;
}

if (false) {
  var a = 20;
}
fun();
console.log("a ", a);
console.log("z ", z);
console.log("x ", x); // error because it got functional scope

// Let

// console.log(x); // Errro no global scope
{
  let y = 10;
  console.log(y);
}

function fun() {
  console.log("Let in functions ", x);
  let x = 10;
  console.log("x");
}
fun();
console.log(y); // Error

let x = 10;
console.log(x); // 10

// Const same as let no reassignmnet allowed

const z = 20;

z = 20;

console.log("z ", z);
