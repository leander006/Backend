function fetch(url) {
  return new Promise(function (resolve, reject) {
    console.log("started downloaded file", url);
    setTimeout(() => {
      console.log("Downlading...");
      let data = "dummy data";
      resolve(data);
    }, 1000);
  });
}

const p1 = fetch("www.abc1.com");

const p2 = fetch("www.abc2.com");

const p3 = fetch("www.abc3.com");

Promise.all([p1, p2, p3]).then(function f(value) {
  console.log("downloading completed", value);
});
