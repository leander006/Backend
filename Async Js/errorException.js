function fetch(url) {
  return new Promise(function (resolve, reject) {
    console.log("Enter fetch func");
    setTimeout(() => {
      console.log("Downlading...");
      let data = "dummy data";
      resolve(data);
    }, 7000);
  });
}

x = fetch("www.google.com");

// x.then(
//   function success(value) {
//     console.log("Value is ", value);
//   },
//   function error(err) {
//     console.log("Error is ", err);
//   }
// );

x.then(function success(value) {
  console.log("Value is ", value);
}).catch(function error(err) {
  console.log("Error is ", err);
});
