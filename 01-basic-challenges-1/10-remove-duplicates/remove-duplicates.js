function removeDuplicates(arr) {

  const withoutDuplicates = [];

  for (let i = 0; i < arr.length; i++) {
    
    if(!withoutDuplicates.includes(arr[i])) {
      withoutDuplicates.push(arr[i]);
    }
  }
  return withoutDuplicates;
}
module.exports = removeDuplicates;
