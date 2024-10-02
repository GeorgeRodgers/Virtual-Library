// import the Media class:

const Media = require(`./Media`);

// create your Music class:

class Music extends Media{
    constructor(title, year, genre, artist, length){
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    }

    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }

    static shortestAlbum(albums){

        let temp = [...albums];
        temp.sort((a, b) => a.length - b.length);
        return temp[0]

        // let albumLength = [];
        // for (let i = 0; i < albums.length; i++){
        //     albumLength.push(albums[i].length);
        // }
        
        // for (let j = 0; j < albumLength.length; j++){
        //     if (albumLength[j] == Math.min(...albumLength)){
        //         return albums[j]
        //     } 
        // }
    }
}

// don't change below
module.exports = Music;
