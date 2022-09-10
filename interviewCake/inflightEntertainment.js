// You've built an inflight entertainment system with on-demand movie streaming.

// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

// questions:
//     are they going to watch just 2 movies
//     can they watch the same movie twice
//     optimize for runtime over memory

const checkMovies=(flightLength, moviesList)=>{
    const movies = new Map()

    for(const movie in moviesList){
        movies.set(moviesList[movie], true)
    }
    for(const movie in moviesList){
        if(movies.get(flightLength-moviesList[movie])){
            return true
        }
        
    }

    return false
}

console.log(checkMovies(100, [50, 100, 20, 30, 60]))

// ^ this approach will make us show the same movie twice if in the moviesList there are 2 movies with the same lengths that sum up to the flightLength

// instead we need to add to the Set the movies we already saw and return true only if we find in the set the matching movie length for a next movie 

// We make one pass through movieLengths, treating each item as the firstMovieLength. At each iteration, we:

// See if there's a matchingSecondMovieLength we've seen already (stored in our movieLengthsSeen set) that is equal to flightLength - firstMovieLength. If there is, we short-circuit and return true.
// Keep our movieLengthsSeen set up to date by throwing in the current firstMovieLength.

function canTwoMoviesFillFlight(movieLengths, flightLength) {

    // Movie lengths we've seen so far
    const movieLengthsSeen = new Set();
  
    for (let i = 0; i < movieLengths.length; i++) {
      const firstMovieLength = movieLengths[i];
  
      const matchingSecondMovieLength = flightLength - firstMovieLength;
      if (movieLengthsSeen.has(matchingSecondMovieLength)) {
        return true;
      }
  
      movieLengthsSeen.add(firstMovieLength);
    }
  
    // We never found a match, so return false
    return false;
  }

//   We know users won't watch the same movie twice because we check movieLengthsSeen for matchingSecondMovieLength before we've put firstMovieLength in it!

// What We Learned
// The trick was to use a set to access our movies by length, in O(1)O(1) time.

// Using hash-based data structures, like objects or sets, is so common in coding challenge solutions, it should always be your first thought. Always ask yourself, right from the start: "Can I save time by using an object?"

// Bonus
// - What if we wanted the movie lengths to sum to something close to the flight length (say, within 20 minutes)?
// - What if we wanted to fill the flight length as nicely as possible with any number of movies (not just 2)?
// - What if we knew that movieLengths was sorted? Could we save some space and/or time?