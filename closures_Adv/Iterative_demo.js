function fetchNextEle(array) {
  let idx = 0;
  function next() {
    if (idx == array.length) {
      return undefined;
    }
    let ele = array[idx];
    idx++;
    return ele;
  }
  function hasNext() {
    if (array.length == idx) {
      return false;
    }
    return true;
  }
  return { next, hasNext };
}

let automaticFetcher = fetchNextEle([12, 23, 45, 67]);

while (automaticFetcher.hasNext()) {
  console.log(automaticFetcher.next());
}

// console.log(automaticFetcher.next());
// console.log(automaticFetcher.next());
// console.log(automaticFetcher.next());
// console.log(automaticFetcher.next());
