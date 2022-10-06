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

const mixedMessages = array => {
    for (let artist in array) {
        if (artist === "chuckNorris") {
            console.log(`Chuck Norris said: ${array[artist][Math.floor(Math.random() * array[artist].length)]}`);
        } else if (artist === "kanyeWest") {
            console.log(`Kanye West said: ${array[artist][Math.floor(Math.random() * array[artist].length)]}`);
        } else {
            console.log(`Jakie Chan said: ${array[artist][Math.floor(Math.random() * array[artist].length)]}`);
        }
    }
};

mixedMessages(artistsSayings);