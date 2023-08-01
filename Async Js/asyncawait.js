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

async function processing() {
  let downloadeddata = await fetch("www.google.com");
  console.log("downloading await done");
  let file = await writeToFile(downloadeddata);
  console.log("writing await done");
  let uploadedRes = await uploadToFile(file, "www.google.com");
  console.log("uploading await done");

  console.log("Uploaded response is ", uploadedRes);
  return true;
}

processing();

Promise.all([])