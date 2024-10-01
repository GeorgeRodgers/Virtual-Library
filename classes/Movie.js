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
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.genre}, Rating: ${this.rating}`
    }
    static longestMovie(movie){
        for (let i = 0; i < movie.length; i++){
            if (movie[i].duration === Math.max(movie.duration))
                return movie[i];
    }
}
}

// don't change below
module.exports = Movie;