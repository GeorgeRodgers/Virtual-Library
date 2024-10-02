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

        let temp = [...books];
        temp.sort((a, b) => b.rating - a.rating);
        return temp[0]

        // let ratings = [];
        // for (let i = 0; i < books.length; i++){
        //     ratings.push(books[i].rating);
        // }
        
        // for (let j = 0; j < ratings.length; j++){
        //     if (ratings[j] == Math.max(...ratings)){
        //         return books[j]
        //     } 
        // }
    }
    static calculateAverageRating(books){
        let sum = 0;
        for(let i = 0; i < books.length; i++){
            sum += books[i].rating;
        }
        return (sum / books.length).toFixed(1);
    }
}

// don't change below
module.exports = Book;
