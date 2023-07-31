function find(val) {
  return new Promise(function (resolve, reject) {
    console.log("Enter promise");
    setTimeout(() => {
      console.log("Timer completed");
      if (val % 2 == 0) {
        resolve("Even");
      } else {
        reject("Odd");
      }
    }, 10000);
    console.log("Somewhere ");
  });
}

// let y = find(4);
// setTimeout(() => {
//   console.log("Timer completed");
//   console.log(y);
// }, 10000);

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

function writeToFile(data) {
  return new Promise(function (resolve, reject) {
    console.log("writing in file");
    setTimeout(() => {
      console.log("Writing...");
      let data = "File.txt";
      resolve(data);
    }, 3000);
  });
}

function uploadToFile(name, url) {
  return new Promise(function (resolve, reject) {
    console.log("uploading data in url");
    setTimeout(() => {
      console.log("Uploading...");
      let result = "SUCCESS";
      resolve(result);
    }, 5000);
  });
}

let fetchPromise = fetch("www.google.com");

// fetchPromise.then(function process(value) {
//   console.log("Fetch promise done");
//   console.log("Writing data ", value);
//   let writePromise = writeToFile(value);
//   writePromise.then(function process(value) {
//     console.log("Writing promise done");
//     console.log("Writing data ", value);
//     let uploadPromise = uploadToFile(value, "www.google.com");
//     uploadPromise.then(function process(value) {
//       console.log("Uploading promise done");
//       console.log("Uploading status ", value);
//     });
//   });
// });

x = fetchPromise
  .then(function promise(value) {
    console.log("value is", value);
    return value;
  })
  .then(function process(value) {
    return writeToFile(value);
  })
  .then(function process(value) {
    console.log("value is", value);
    return uploadToFile(value);
  });
