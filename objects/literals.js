const sym = Symbol("my key");

const jsUser = {
  name: "leander",
  age: 23,
  id: 1,
  [sym]: Symbol("my key"),
  email: "a@gmail.com",
  "last name": "dsilva", // we cannot use obj.key in this case
};

// Normally we used obj.key but we should start using obj["key"]

// console.log(jsUser["email"]);
// console.log(jsUser["last name"]);
// console.log(typeof jsUser[sym]);

jsUser["email"] = "b@gmail.com";
// console.log(jsUser["email"]);

Object.freeze(jsUser);

jsUser["greeting"] = function () {
  console.log("user is working");
};

console.log(jsUser.greeting());
