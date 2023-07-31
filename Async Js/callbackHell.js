function fetchFunc(url, fn) {
  console.log("Starting dowloading");
  setTimeout(() => {
    console.log("Done downloading");
    let response = "Dummy data";
    fn(response);
  }, 3000);
}

function writeToFile(data, fn) {
  console.log("Starting writing");
  setTimeout(() => {
    console.log("Writing...");
    let data = "filename.txt";
    fn(data);
  }, 3000);
}

function uploadFile(name, fn) {
  console.log("Started uploading");
  setTimeout(() => {
    console.log("Uploading...");
    let status = "SUCCESS";
    fn(status);
  }, 3000);
}

// This is callback hell example where we call callback inside a callback inside a callback

fetchFunc("www", function download(res) {
  let response = res;
  console.log("Response is ", response);
  writeToFile(response, function getName(name) {
    let na = name;
    console.log("File name is ", name);
    uploadFile(na, function uplaod(status) {
      console.log("Status is ", status);
    });
  });
});
