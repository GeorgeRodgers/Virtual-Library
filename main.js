// Import classes here to console.log and debug

const Movie = require(`./classes/Movie`);

const movie1 = new Movie('Inception', 2010, 'Sci-Fi', 'Christopher Nolan', 148, 4.5);
const movie2 = new Movie('The Godfather', 1972, 'Crime', 'Francis Ford Coppola', 175, 4.7);

let arr = [movie1, movie2];

console.log(arr)

console.log(Movie.longestMovie(arr)); // Returns movie2

console.log(arr)