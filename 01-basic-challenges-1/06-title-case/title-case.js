function titleCase(str) {
  const stringArr = str.split(' ');
  
  const finalString = [];

  for (let i = 0; i < stringArr.length; i++) {
    let word = stringArr[i];
    word = word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase();

    finalString.push(word);
    
  }
 
  return finalString.join(" ");
  
}

module.exports = titleCase;
