const checkPermutation=(str)=>{
    const strLetterCount = new Map()
    for(const s of str){
        if(strLetterCount.get(s)){
            // currentLetterValue = strLetterCount.get(s)
            // strLetterCount.set(s, currentLetterValue+1)
            // if(strLetterCount.get(s)%2 === 0){
                strLetterCount.delete(s)
            // }
        }else{
            strLetterCount.set(s,1)
        }
    }
    return strLetterCount.size <= 1
}

// We don’t really care how many times a character appears in the string, we just need to know whether the character appears an even or odd number of times.

checkPermutation("ool")

// I need to know that only one letter appears an even amounts of time 

// interviewCake approach 
// Finally, we just need to check if less than two characters don’t have a pair.

  function hasPalindromePermutation(theString) {

  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}

// after seeing this solution I improved mine as well ^ check it 