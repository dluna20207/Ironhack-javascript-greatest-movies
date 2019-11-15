/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(inputArray) {

    let x = inputArray;

    x.sort(function (a, b) {
        if (a.year - b.year == 0) {
            if (a.title.charAt(0) > b.title.charAt(0)) {
                return 1;
            }
            else if (a.title.charAt(0) < b.title.charAt(0)) {
                return -1;
            }
        }
        else {
            return a.year - b.year;
        }
    });

    return x;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(inputArray){
    inputArray.filter(function(object){
        if (object.director == "Steven Spielberg" && object.genre){
            return object;
        }
    }
    )

    return inputArray.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
