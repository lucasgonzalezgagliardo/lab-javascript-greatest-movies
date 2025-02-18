// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directores = moviesArray.map(pelicula=> pelicula.director)
    return directores;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergMovies = moviesArray.filter(drama => drama.director == ("Steven Spielberg") && drama.genre.includes("Drama"))
    return spielbergMovies.length; 
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    
    let totalPeliculas = moviesArray.reduce(function (total, nota) {
        if (!nota.score)  {
            return total;
        }
        else {
            return total + nota.score;
        }
    },0)

    let promedio = totalPeliculas / moviesArray.length;

    let promedioRedondeado = Number(promedio.toFixed(2));
    return promedioRedondeado;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {   
    if (moviesArray.length === 0) return 0;
    let promedioDrama = moviesArray.filter((movie) => {
        return movie.genre.includes("Drama")
})  
    return promedioRedondeado(promedioDrama);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesCopy = Array.from(moviesArray);
    moviesCopy.sort((a,b)=> {
        return a.title.localeCompare(b.title);
})
let resultsArr = [];
moviesCopy.forEach((movie, i) => {
    if (i<20) resultsArr.push(movie.title);
});
return resultsArr;
   
    moviesCopy.slice(0, 20);
return moviesCopy.map((movie => movie.title));
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
