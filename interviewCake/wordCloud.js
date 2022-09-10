// You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.

// To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a dictionary ↴ , where the keys are words and the values are the number of times the words occurred.

// Think about capitalized words. For example, look at these sentences:

//   'After beating the eggs, Dana read the next step:'
// 'Add milk and eggs, then add flour and sugar.'
// What do we want to do with "After", "Dana", and "add"? In this example, your final dictionary should include one "Add" or "add" with a value of 22. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

// Assume the input will only contain words and standard punctuation.

const buildWordCloud=(sentence)=>{
    const wordCloud = new Map()
    const words = sentence.split(/\b/)
    words.forEach(element => {
        if(wordCloud.get(element)){
            let wordValue = wordCloud.get(element)
            wordCloud.set(element, wordValue+=1)
        }else if(wordCloud.get(element[0].toUpperCase() + element.substring(1))){
            let capitalizedWordValue = wordCloud.get(element[0].toUpperCase() + element.substring(1))
            const capitalizedWord = element[0].toUpperCase() + element.substring(1)
            wordCloud.set(capitalizedWord, capitalizedWordValue+=1)
        }else{
            wordCloud.set(element, 1)
        }
    });

    console.log(wordCloud)
}

buildWordCloud("Cliff's finished his cake and paid the bill.Bill finished his cake at the edge of the cliff.")