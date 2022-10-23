function checkArrayType(arr) {
  let arr1 = arr.map(e=>typeof e);
  return [...new Set(arr1)].length === 1;
}
console.log(checkArrayType([3,6,7,3]));