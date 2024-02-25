function displayLikes(names) {
  let name1 = names[0];
  let name2 = names[1];
  let name3 = names[2];

  if (names.length === 0) {
    return 'no one likes this';
  } else if (names.length === 1) {
    return `${name1} likes this`;
  } else if (names.length === 2) {
    return `${name1} and ${name2} like this`;
  } else if (names.length === 3) {
    return `${name1}, ${name2} and ${name3} like this`;
  } else if (names.length > 3) {
    return `${name1}, ${name2} and ${names.length - 2} others like this`;
  }
}

module.exports = displayLikes;
