function formatPhoneNumber(arr) {
  let numString;

  const numGroup1 = arr.slice(0, 3).join('');
  const numGroup2 = arr.slice(3, 6).join('');
  const numGroup3 = arr.slice(6).join('');

  numString = `(${numGroup1}) ${numGroup2}-${numGroup3}`;

  return numString;
}

module.exports = formatPhoneNumber;
