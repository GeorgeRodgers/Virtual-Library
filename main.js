// Import classes here to console.log and debug

const Podcast = require(`./classes/Podcast`);

const podcast = new Podcast(`The Podcast`, 2024, `talk`, `artist`, 3600, `Ben`, `First episode`, `#001`, [`John`, `Jane`, `Jeff`]);

console.log(podcast.listen())