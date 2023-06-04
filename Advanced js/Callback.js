function fun(/* parameter */ x, /* Callback function recieved*/ fn) {
  for (var i = 0; i < x; i++) {
    console.log(i);
  }
  fn();
}

fun(
  10,
  /* Callback function passed */ function log() {
    console.log("Outside logger");
  }
);

let arr = [1, 2, 3, 4, 5];
let ar = arr.map(
  /* Callback function */ function (v, i) {
    console.log(v, i);
    return v * v;
  }
);

console.log(arr);
console.log(ar);

function mapper(arr, fn) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    let res = fn(arr[i], i);
    result.push(res);
  }

  return result;
}

let a = [1, 2, 3, 4, 5];

let x = mapper(a, function map(v, i) {
  return v * v * v;
});

console.log(x, a);
