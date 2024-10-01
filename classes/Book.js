// import the Media class:

const Media = require(`./Media`);

// create your Book class:

class Book extends Media{
    constructor(title, year, genre, author, numPages, rating){
        super(title, year, genre)
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }
    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    
    static highestRating(books){
        let ratings = [];
        for (let i = 0; i < books.length; i++){
            ratings.push(books[i].rating);
        }
        
        for (let j = 0; j < ratings.length; j++){
            if (ratings[j] == Math.max(...ratings)){
                return books[j]
            } 
        }
    }
}

// don't change below
module.exports = Book;
