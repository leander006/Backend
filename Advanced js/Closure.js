function task(task) {
  console.log("Task start");
  setTimeout(function fun() {
    console.log("Completed ", task);
  }, 3000);
  console.log("Task end");
}

console.log("Starting");
task("Asssignment");
console.log("Ending");

function task() {
  console.log("Task start");
  for (let i = 0; i < 3; i++)
    setTimeout(function fun() {
      console.log(`i:${i}`);
    }, 3000);
}
/**
 * 1
 * 2
 * 3
 */

task();

function task1() {
  console.log("Task start");
  for (var i = 0; i < 3; i++)
    setTimeout(function fun() {
      console.log(`i:${i}`);
    }, 3000);
}

/**
 * 3
 * 3
 * 3
 */

task1();
