function uniqueCheck(string){
  let checkString = "";
  for(i=0; i < string.length; i++) {
    if(checkString.includes(string[i])) {
    } else {
      checkString += string[i]
    }
  }
  
  if (string != checkString){
    return false;
  } else {
    return true;
  }
}

console.log(uniqueCheck("copyright"));
console.log(uniqueCheck("abba"));
console.log(uniqueCheck("bbcc"));
console.log(uniqueCheck("abcdef"));