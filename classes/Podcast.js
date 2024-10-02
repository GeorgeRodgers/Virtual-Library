// import the Music class:
const Music = require(`./Music`);

class Podcast extends Music{
    constructor(title, year, genre, artist, length, host, episodeName, episodeNumber, guests){
        super(title, year, genre, artist, length)
        this.host = host;
        this.episodeName = episodeName;
        this.episodeNumber = episodeNumber;
        this.guests = guests;
    }
    listen(){
        // If, sort and loop used to give the array as a grammtically correct string organised alphibetically
        let temp = [...this.guests];
        temp.sort();
        let guest = ``;
        if (temp.length === 1){
            guest += temp[0];
        } else {
            for (let i = 0; i < temp.length - 1; i++){
                guest += `${temp[i]}`;
                if (i != temp.length - 2){
                    guest += `, `;
                } else {
                    guest += ` `;
                }
            }
            guest += `and ${temp[temp.length-1]}`;
        }
        return `${this.title} - Episode: ${this.episodeName}. Hosted by ${this.host} and featuring guests ${guest}. Length: ${this.length} seconds.`
    }
}

// export the Podcast class:
module.exports = Podcast;