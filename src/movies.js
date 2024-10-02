// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    
    const mappedArray = moviesArray.map(function(object){
        
        return object.director
        
    });
    return mappedArray;

    // const filtered = [...new Set(mappedArray)];
      
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenMovies = moviesArray.filter(function (element){
        return element.director === "Steven Spielberg" && element.genre.includes("Drama");
    })

    return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
  const totalScore = moviesArray.reduce(function (curr, object){
   
    return curr + (object.score || 0);
  },0)

  const totalAverage = totalScore / moviesArray.length;

  return Number(totalAverage.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   const dramaMovies = moviesArray.filter(function (element){
    return element.genre.includes("Drama");
   })

    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedArray = [...moviesArray];

    orderedArray.sort(function (a,b){
        if (a.year === b.year){
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    })

    return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titlesArray = moviesArray.map(movie => movie.title
    );
    const orderedArray = titlesArray.sort((a, b) => a.localeCompare(b));
    if (orderedArray.length < 20){
        return orderedArray
    }
    return orderedArray.slice(0,20)
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    function convertDurationToMinutes(duration) {
        // Use a regular expression to match hours and minutes
        const regex = /(\d+)h\s*(\d+)min/;
        const matches = duration.match(regex);
        
        // If matches are found, calculate the total minutes
        if (matches) {
            const hours = parseInt(matches[1], 10); // First capture group (hours)
            const minutes = parseInt(matches[2], 10); // Second capture group (minutes)
            
            // Calculate total minutes
            return hours * 60 + minutes;
        }
        
        // Return 0 if the format doesn't match
        return 0;
    }
    const arrayCopy = moviesArray.map(function (element){
        const hoursToMin = convertDurationToMinutes(element.duration);
        return element.duration = hoursToMin;
    });

    return arrayCopy;
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
