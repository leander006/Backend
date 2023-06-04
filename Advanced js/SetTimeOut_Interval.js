let id1 = setTimeout(() => {
  console.log("TimeOut first");
}, 10000);

let id2 = setTimeout(() => {
  console.log("TimeOut second");
  clearTimeout(id1); // Removes id1 setTimeOut
}, 5000);

id1; // Wait for 10 sec then execute

id2;

let id3 = setInterval(() => {
  console.log("Interval");
}, 3000);

let id4 = setInterval(() => {
  clearInterval(id3); // Remove interval after 13 milliseconds
}, 13000);

id3;
id4;
