// Write a function that takes an array of characters and reverses the letters in place
// questions:
// can it be an empty String
// how should the empty spaces be treated or the symbols
// where is the string comming from - does it need to be filtered first

const reverseString=(stringArray)=>{
    if(stringArray.length<=1){
        console.log("esti nebun")
        return stringArray
    }
    console.log("wtf")
    let j=stringArray.length-1
    for(let i=0; i<stringArray.length;i++){
        if(i<j){
            console.log(j)
            let temp = stringArray[i]
            stringArray[i]= stringArray[j]
            stringArray[j]=temp
            j--
        }
        console.log(j)
    }
    
    return stringArray

}

console.log(reverseString(["a","r","t","b"]))

// the cleaner solution

function reverse(arrayOfChars) {

    let leftIndex = 0;
    let rightIndex = arrayOfChars.length - 1;
  
    while (leftIndex < rightIndex) {
  
      // Swap characters
      const temp = arrayOfChars[leftIndex];
      arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
      arrayOfChars[rightIndex] = temp;
  
      // Move towards middle
      leftIndex++;
      rightIndex--;
    }
  }