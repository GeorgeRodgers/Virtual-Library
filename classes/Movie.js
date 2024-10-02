// import the Media class:

const Media = require(`./Media`);

// create your Movie class:

class Movie extends Media{
    constructor(title, year, genre, director, duration, rating){
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }
    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static longestMovie(movies){

        // If we don't care about mutating the array we can use the sort function
        // movies.sort((a, b) => b.duration - a.duration);
        // return movies[0];

        let temp = [...movies];// using the spread operator allows clone the movies array and stops mutation using this method
        temp.sort((a, b) => b.duration - a.duration);
        return temp[0];

        // We could also use a loop to store the duration values of the from the array of objects
        // let movieDurations = [];
        // for (let i = 0; i < movies.length; i++){
        //     movieDurations.push(movies[i].rating);
        // }
        
        // for (let j = 0; j < movieDurations.length; j++){
            // if (movieDurations[j] == Math.max(...movieDurations)){ //we also need to use the spread operator to use the Math.max() method on the new array
        //         return movies[j]
        //     } 
        // }
    }
}

// don't change below
module.exports = Movie;