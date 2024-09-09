

const quotes = [
    // Stoic Quotes
    "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
    "He who fears death will never do anything worth of a man who is alive. - Seneca",
    "It is not the man who has too little, but the man who craves more, that is poor. - Seneca",
    "We suffer more often in imagination than in reality. - Seneca",
    "You have power over your mind, not outside events. Realize this, and you will find strength. - Marcus Aurelius",
    // Japanese Warrior Quotes
    "The way of the warrior is resolute acceptance of death. - Miyamoto Musashi",
    "Do nothing that is of no use. - Miyamoto Musashi",
    "The only reason a warrior is alive is to fight, and the only reason a warrior fights is to win. - Miyamoto Musashi",
    "In battle, if you make your opponent flinch, you have already won. - Miyamoto Musashi",
    "Even if it seems certain that you will lose, retaliate. Neither wisdom nor technique has a place in this. - Hagakure",
    // Additional Stoic Quotes
    "Dwell on the beauty of life. Watch the stars, and see yourself running with them. - Marcus Aurelius",
    "Waste no more time arguing what a good man should be. Be one. - Marcus Aurelius",
    "One who is a samurai must before all things keep constantly in mind the fact that he must die. - Hagakure",
    "Perceive that which cannot be seen with the eye. - Miyamoto Musashi",
    "Truth is not what you want it to be; it is what it is, and you must bend to its power or live a lie. - Miyamoto Musashi"
  ];

const usedIndexes = new Set() // set helps in determing if an element exists or not.
const quoteElement = document.getElementById("quote")


function generateQuote(){
    
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }
    
    
    while(true)
    {
        const randomIdx = Math.floor(Math.random() * quotes.length);

        if(usedIndexes.has(randomIdx)) continue
    
        const quote = quotes[randomIdx];

        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break;

    }

}





  
  
  