// You're working on a secret team solving coded transmissions.

// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.

const reverseWords=(wordsArray)=>{
    if(wordsArray.length<=1){
        return wordsArray
    }

    wordsArray.join("").split(" ")
    let leftIndex = 0
    let rightIndex = wordsArray.length-1
    while(leftIndex<rightIndex){
        let temp = wordsArray[leftIndex]
        wordsArray[leftIndex] = wordsArray[rightIndex]
        wordsArray[rightIndex] = temp

        leftIndex++
        rightIndex--
    }

    return wordsArray.join(" ")
}

console.log(reverseWords([ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ]))

// The naive solution of reversing the words one at a time had a worst-case O(n^2) runtime. That's because swapping words with different lengths required "scooting over" all the other characters to make room.

// To get around this "scooting over" issue, we reversed all the characters in the message first. This put all the words in the correct spots, but with the characters in each word backward. So to get the final answer, we reversed the characters in each word. This all takes two passes through the message, so O(n)O(n) time total.

// This might seem like a blind insight, but we derived it by using a clear strategy:

// Solve a simpler version of the problem (in this case, reversing the characters instead of the words), and see if that gets us closer to a solution for the original problem.

function reverseWords(message) {

    // First we reverse all the characters in the entire message
    reverseCharacters(message, 0, message.length - 1);
    // This gives us the right word order
    // but with each word backward
  
    // Now we'll make the words forward again
    // by reversing each word's characters
  
    // We hold the index of the *start* of the current word
    // as we look for the *end* of the current word
    let currentWordStartIndex = 0;
    for (let i = 0; i <= message.length; i++) {
  
      // Found the end of the current word!
      if (i === message.length || message[i] === ' ') {
  
        // If we haven't exhausted the string our
        // next word's start is one character ahead
        reverseCharacters(message, currentWordStartIndex, i - 1);
        currentWordStartIndex = i + 1;
      }
    }
}
  
function reverseCharacters(message, leftIndex, rightIndex) {

// Walk towards the middle, from both sides
    while (leftIndex < rightIndex) {

        // Swap the left char and right char
        const temp = message[leftIndex];
        message[leftIndex] = message[rightIndex];
        message[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
}