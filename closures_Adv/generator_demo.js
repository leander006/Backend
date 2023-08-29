function* fetchNextEle() {
  console.log("I am inside a generator");
  yield 1;
  yield 2;
  console.log("Somewhere between the function");
  yield 4;
  yield 5;
}

const it = fetchNextEle();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
