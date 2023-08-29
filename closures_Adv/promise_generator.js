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

function doAfterReceiving(value) {
  let future = iter.next(value);
  console.log("future is ", future);
  if (future.done) return;
  future.value.then(doAfterReceiving);
}

function* steps() {
  const downloadedFile = yield fetch("wwww.google.com");
  console.log("Downloaded data", downloadedFile);
  const writingData = yield writeToFile(downloadedFile);
  console.log("Writng this ", writingData);
  const uploadedRes = yield uploadToFile(writingData);
  console.log("uploaded content", uploadedRes);
}

const iter = steps();
const future = iter.next();
future.value.then(doAfterReceiving);
