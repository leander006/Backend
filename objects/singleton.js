// Singleton object is object define by using constructor

const obj = new Object();

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Cloning
//Source,targets
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const obj4 = { ...obj1, ...obj2 };
console.log(obj4);

console.log(Object.keys(obj4));
console.log(Object.values(obj4));

console.log(obj4.hasOwnProperty("ad"));
