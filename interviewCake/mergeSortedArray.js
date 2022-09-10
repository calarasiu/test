// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// possible questions - > would the arrays always be populated, or it can also be that are empty or have 0 for 0 orders 
// are the arrays going to be used in other operations - do I need to create a third array tot store the result
                   
const mergeArrays=(arr1, arr2)=>{
    if(!arr1.length){
        return arr2
    } else if(!arr2.length){
        return arr1
    }

    // compare the first element of the first array with the second element and so on until I find a bigger element in the second array 
    // save the index of the bigger element 
    // insert the element of the 1st array before the biggest element (arr.splice(index, o-elements to delete, item to insert)) - in place alg
    // compare the second element of the array1 with the bigger element found in the previous round until I find a biggest element and repeat the steps above
    let biggestIndex = 0;
    for(let i = 0; i<arr1.length;i++){
        while(arr1[i]>arr2[biggestIndex]){
            biggestIndex++
            console.log("inside while")
        }
        arr2.splice(biggestIndex,0, arr1[i])
        console.log(i, "after the splice")
        biggestIndex++
    }
    return arr2
}

console.log(mergeArrays([1,3,6], [0,1,2,4]))

// Solution
// First, we allocate our answer array, getting its size by adding the size of myArray and alicesArray.

// We keep track of a current index in myArray, a current index in alicesArray, and a current index in mergedArray. So at each step, there's a "current item" in alicesArray and in myArray. The smaller of those is the next one we add to the mergedArray!

// But careful: we also need to account for the case where we exhaust one of our arrays and there are still elements in the other. To handle this, we say that the current item in myArray is the next item to add to mergedArray only if myArray is not exhausted AND, either:

// alicesArray is exhausted, or
// the current item in myArray is less than the current item in alicesArray

// the optimal solution is to have the merged array that will store our solution since neither one of our arrays are big enough to store the result and we'll have the double appends 
// The if statement is carefully constructed to avoid indexing past the end of an array, because JavaScript would give us undefined and we don't want to compare undefined with an integer. We take advantage of JavaScript's short circuit evaluation ↴ and check first if the arrays are exhausted.

// Complexity
// O(n) time and O(n)O(n) additional space, where nn is the number of items in the merged array.

// The added space comes from allocating the mergedArray. There's no way to do this " in place" ↴ because neither of our input arrays are necessarily big enough to hold the merged array.

// But if our inputs were linked lists, we could avoid allocating a new structure and do the merge by simply adjusting the next pointers in the list nodes!

function mergeArrays(myArray, alicesArray) {

    // Set up our mergedArray
    const mergedArray = [];
  
    let currentIndexAlices = 0;
    let currentIndexMine = 0;
    let currentIndexMerged = 0;
  
    while (currentIndexMerged < (myArray.length + alicesArray.length)) {
  
      const isMyArrayExhausted = currentIndexMine >= myArray.length;
      const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;
  
      // Case: next comes from my array
      // My array must not be exhausted, and EITHER:
      // 1) Alice's array IS exhausted, or
      // 2) The current element in my array is less
      //    than the current element in Alice's array
      if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
        (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {
  
        mergedArray[currentIndexMerged] = myArray[currentIndexMine];
        currentIndexMine++;
  
        // Case: next comes from Alice's array
      } else {
        mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
        currentIndexAlices++;
      }
  
      currentIndexMerged++;
    }
  
    return mergedArray;
  }