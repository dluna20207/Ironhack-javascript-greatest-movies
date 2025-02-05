/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(inputArray) {

    let x = inputArray;

    let y = x.slice(0).sort(function (a, b) {
        if (a.year - b.year == 0) {
            if (a.title.charAt(0) > b.title.charAt(0)) {
                return 1;
            } else if (a.title.charAt(0) < b.title.charAt(0)) {
                return -1;
            }
        } else {
            return a.year - b.year;
        }
    });

    return y;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(inputArray) {

    let x = [];

    inputArray.forEach(element => {
        if (element.director == "Steven Spielberg" && element.genre.includes("Drama")) {
            x.push(element);
        };

    })
    return x.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(inputArray) {

    let x = [];

    inputArray.forEach(element => {
        x.push(element.title);
    });

    let y = x.slice(0).sort(function (a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        }
    });

    if (y.length > 20) {
        let z = [];

        for (let i = 0; i < 20; i++) {
            z.push(y[i]);

        }

        return z;
    }

    return y;

};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(inputArray) {

    let x = [];
    let numOfNoRate = 0;

    inputArray.forEach(element => {
        if ("rate" in element) {
            x.push(element.rate);
        }
        else {
            numOfNoRate++;
        }
    });

    let average = 0;
    let sum = 0;

    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }

    if (x.length > 1) {
        average = sum / (x.length + numOfNoRate);
    }
    else {
        average = sum;
    }

    return (Math.round(average * 100) / 100);
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(inputArray) {

    let x = [];
    let numOfNoRate = 0;

    inputArray.forEach(element => {
        if ("rate" in element && element.genre.includes("Drama")) {
            x.push(element.rate);
        }
        else if (element.genre.includes("Drama")) {
            numOfNoRate++;
        }
    });

    let average = 0;
    let sum = 0;

    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }

    if (x.length > 1) {
        average = sum / (x.length + numOfNoRate);
    }
    else {
        average = sum;
    }

    return (Math.round(average * 100) / 100);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(inputArray) {

    let copyArray = [...inputArray];

    let moviesInMinutes = copyArray.map( ( element ) => {

        let originalTime = element.duration;

        let finalTime = 0;

        let temp;

        if (originalTime.indexOf('h') >= 0 && originalTime.indexOf('min') >= 0) {
            temp = originalTime.replace('h', "").replace('min', "").trim();
            finalTime = Number(temp.substring(0, temp.indexOf(" "))) * 60 + Number(temp.substring(temp.indexOf(" ") + 1));
        }

        else if (duration.indexOf('h') >= 0) {

            finalTime = Number(duration.substring(0, duration.indexOf("h"))) * 60;
        }

        else if (duration.indexOf('min') >= 0) {
            finalTime = Number(duration.substring(0, duration.indexOf("min")));
        }

        return {
            title: element.title,
            year: element.year,
            director: element.director,
            duration: finalTime,
            genre: element.genre,
            rate: element.rate
        }
    })

    return moviesInMinutes;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(inputArray) {

    let maxYear = 0;

    inputArray.forEach(element => {
        if (element.year > maxYear) {
            maxYear = element.year;
        }
    });

    for (let i = 0; i < maxYear; i++) {

    }

}