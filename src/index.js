module.exports = function longestConsecutiveLength(array) {
  if (array.length < 2)
    return array.length;
  let result = 1;
  let arr = array.sort((a, b) => {
    return a - b;
  });

  for (let i = 1, c = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 === arr[i]) {
      c++;
      if (c > result)
        result = c;
    } else if (arr[i - 1] === arr[i])
      continue;
    else {
      c = 1;
    }
  }
  return result;
};