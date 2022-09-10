const mergeMeetingsinO_n_Square=(meetingArray)=>{
    const resultedMeetingArray = []
    for(let i=0; i<meetingArray.length; i++){
        let meeting = meetingArray[i]
        console.log(meeting.startTime)
        if(resultedMeetingArray.length){
            for(let j=0;j<resultedMeetingArray.length;j++){
                let resultMeeting = resultedMeetingArray[j]
                console.log(" resultMeeting inside the if", resultMeeting.startTime, resultMeeting.endTime)
                console.log(" meeting inside the if", meeting.startTime, meeting.endTime)
                if (meeting.startTime<= resultMeeting.startTime && meeting.endTime<=resultMeeting.endTime){
                    console.log("hello")
                    resultMeeting.startTime = meeting.startTime
                } else if(resultMeeting.endTime >= meeting.startTime && meeting.endTime>=resultMeeting.endTime){
                    console.log("hi")
                    resultMeeting.endTime = meeting.endTime
                    
                }
            }
            if(resultedMeetingArray[resultedMeetingArray.length-1].startTime !== meeting.startTime && resultedMeetingArray[resultedMeetingArray.length-1].endTime !== meeting.endTime){
    
                resultedMeetingArray.push(meeting)
            }
        }else{
            resultedMeetingArray.push(meeting)
        }
        
    }
    return resultedMeetingArray
}

console.log(mergeMeetingsinO_n_Square(  [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ]))

const mergeMeetingsInOnLogN=(meetings)=>{
    // we achieve this by first sorting the array by startTime and then we can just try to merge one array at the time with the next one 
//     Then we walk through our sorted meetings from left to right. At each step, either:

// We can merge the current meeting with the previous one, so we do.
// We can't merge the current meeting with the previous one, so we know the previous meeting can't be merged with any future meetings and we throw the current meeting into mergedMeetings.

    // Create a deep copy of the meetings array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
    const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  
    // Sort by start time
    const sortedMeetings = meetingsCopy.sort((a, b) => {
      return a.startTime - b.startTime;
    });
  
    // Initialize mergedMeetings with the earliest meeting
    const mergedMeetings = [sortedMeetings[0]];
  
    for (let i = 1; i < sortedMeetings.length; i++) {
      const currentMeeting    = sortedMeetings[i];
      const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
  
      // If the current meeting overlaps with the last merged meeting, use the
      // later end time of the two
      if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
        lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
      } else {
  
        // Add the current meeting since it doesn't overlap
        mergedMeetings.push(currentMeeting);
      }
    }
  
    return mergedMeetings;
  
}