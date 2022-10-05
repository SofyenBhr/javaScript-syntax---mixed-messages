const artistsSayings = {
    chuckNorris: [
        "Time waits for no man. Unless that man is Chuck Norris.",
        "If you spell Chuck Norris in Scrabble, you win. Forever.",
        "Chuck Norris breathes air ... five times a day."
    ],
    kanyeWest: [
        "I understand culture. I am the nucleus.",
        "If I don't win, the award show loses credibility.",
        "I always tell people. I dropped out of school in order to learn.",
        "Similar to Tesla, I'm about lighting the world up."
    ],
    jakieChan: [
        "I prepare for the worst, but hope for the best.",
        "We're all the same inside.",
        "I'm good for some things, bad for a lot of things.",
        "Don't wait for the change of circumstances. You change the circumstances.",
        "Don't try to be like Jackie. There is only one Jackie. Study computers instead."
    ]
};

let mySayings = [];

for (let prop in artistsSayings) {
    let index = Math.floor(Math.random() * artistsSayings[prop].length);
    switch (prop) {
        case "chuckNorris":
            mySayings.push(`Chuck Norris said: ${artistsSayings[prop][index]}.`);
            break;
        case "kanyeWest":
            mySayings.push(`Kanye West said: ${artistsSayings[prop][index]}.`);
            break;
        case "jakieChan":
            mySayings.push(`Jakie Chan said: ${artistsSayings[prop][index]}.`);
            break;
        default:
            personalWisdom.push('There is not enough info.');
            break;
    }
}

console.log(mySayings.join("\n"));