console.log(10 == "10");
// true

console.log(10 === "10");
// false

console.log(undefined == null);
// true

console.log(undefined === null);
// false

console.log(NaN === NaN);
// false

console.log(10 - "10");
// 0

console.log(10 + "10");
// 1010

console.log({} == {});
// false

let xi = {};
console.log(xi == xi);
// true

a = 5;
if (a == true) {
  console.log("hi there!");
}
if (a) {
  console.log("hi hello!");
}
// hi hello!
/*
      5 is true 
      and when we perform coersion(ToNumber) on 5 we get 1 so logically
      we are doing 5==1 so false no loop is run
*/

// To find NaN

let x = "NaN";

console.log(isNaN(x) ? "NaN" : "Not NaN");
/*
      isNaN performs coersion so it give NaN to many non NaN number
*/

console.log(typeof x == "number" && isNaN(x) ? "NaN" : "Not NaN");
//    We stricted it by given first condition

console.log(Number.isNaN(x) ? "NaN" : "Not NaN");
//    Utility function always works fine for all condition
