function* fetchAdv() {
  console.log("Inside generator");
  let x = 10;
  yield 10;
  console.log("Entering after first yield");
  yield "leander";
  console.log("Entering after second yield");
  const y = x + (yield 30);

  console.log("The value of y", y);
}

console.log("start");
const iter = fetchAdv();
console.log("caled generator");
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next(15));
