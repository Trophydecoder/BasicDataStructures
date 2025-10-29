const array = [15, 6, 45, 13, 60, 10];

function mergersort(array) {
  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergersort(left), mergersort(right));
}

function merge(left, right) {
  const sortedArray = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
}

console.log(mergersort(array));
