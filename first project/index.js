const axios = require("axios");

async function fetch() {
  //   const res = await axios.get(
  //     "https://www.omdbapi.com/?t=don&i=tt3896198&apikey=b0d1b442"
  //   );
  //   console.log(res.data);
}

fetch();

const fs = require("fs");
const transform = require("stream");

let fileStream = fs.createReadStream(__dirname + "/index.txt");
let outStream = process.stdout;

let middleStream = new transform.Transform({
  transform(chunk, enc, nextCB) {
    let modifiedChunk = chunk.toString().toUpperCase();
    this.push(modifiedChunk);
    setTimeout(nextCB, 1000);
  },
});

fileStream.pipe(middleStream).pipe(outStream);
