function fetch(url) {
  return new Promise(function (resolve, reject) {
    console.log("Enter fetch func");
    setTimeout(() => {
      console.log("Downlading...");
      let data = "dummy data";
      reject(data);
    }, 1000);
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
    }, 2000);
  });
}

fetch("www.google.com")
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
  })
  .catch(function f(err) {
    console.log("Error is", err);
  })
  .finally(function f() {
    console.log("Exceuting finallly");
  });
