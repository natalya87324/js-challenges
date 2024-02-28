function findMissingNumber(nums) {
  let n = nums.length + 1;
  let expectedSum = n * (n + 1) / 2;
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  if (nums.length === 0) {
    return 1;
  } else if (!nums) {
    return undefined;
  } else {
    return expectedSum - actualSum;
  }

}

module.exports = findMissingNumber;
