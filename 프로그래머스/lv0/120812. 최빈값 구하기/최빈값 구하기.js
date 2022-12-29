function solution(array) {
  let hashMap = {};
  let hashArr = [];

  for (const i of array) {
    hashMap[i] = hashMap[i] ? hashMap[i] + 1 : 1;
  }

  hashArr = Object.entries(hashMap);
  hashArr.sort((a, b) => b[1] - a[1]);

  console.log(hashArr);

  if (hashArr.length > 1 && hashArr[0][1] === hashArr[1][1]) {
    return -1;
  } else {
    return parseInt(hashArr[0][0]);
  }
}