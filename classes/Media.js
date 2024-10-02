// create your Media class:

class Media{

    static allMedia = [];

    static totalMediaCount = 0;

    constructor(title, year, genre){
        this.title = title;
        this.year = year;
        this.genre = genre;
        Media.totalMediaCount++;
        Media.allMedia.push(this);
    }

    summary(){
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`;
    }
}

// uncomment below to export it:
module.exports = Media;
