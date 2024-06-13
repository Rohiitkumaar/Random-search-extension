// pages = [
//     "https://www.bing.com/search?q=man&form=QBLH&sp=-1&ghc=1&lq=0&pq=man&sc=11-3&qs=n&sk=&cvid=17487D35C4514CB69F2933474E2ECBEC&ghsh=0&ghacc=0&ghpl=",
//     "https://www.bing.com/search?q=Hen&form=QBLH&sp=-1&ghc=1&lq=0&pq=man&sc=11-3&qs=n&sk=&cvid=17487D35C4514CB69F2933474E2ECBEC&ghsh=0&ghacc=0&ghpl=",
//     "https://www.bing.com/search?q=Span&form=QBLH&sp=-1&ghc=1&lq=0&pq=man&sc=11-3&qs=n&sk=&cvid=17487D35C4514CB69F2933474E2ECBEC&ghsh=0&ghacc=0&ghpl=",
//     "https://www.bing.com/search?q=Pink&form=QBLH&sp=-1&ghc=1&lq=0&pq=man&sc=11-3&qs=n&sk=&cvid=17487D35C4514CB69F2933474E2ECBEC&ghsh=0&ghacc=0&ghpl=",
//     "https://www.bing.com/search?q=Power&form=QBLH&sp=-1&ghc=1&lq=0&pq=man&sc=11-3&qs=n&sk=&cvid=17487D35C4514CB69F2933474E2ECBEC&ghsh=0&ghacc=0&ghpl=",
//     "https://www.bing.com/search?q=Super+Hero&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=super+hero&sc=11-10&sk=&cvid=C9695BD464154094815CEB4D5124B87A&ghsh=0&ghacc=0&ghpl="

// ]

// const random = Math.floor(Math.random() * pages.length);
// console.log(random, pages[random]);

// chrome.tabs.update({url: pages[random]});


// Template URL with "man" to be replaced
const templateURL = "https://www.bing.com/search?q=man&form=QBLH&sp=-1&ghc=1&lq=0&pq=man&sc=11-3&qs=n&sk=&cvid=17487D35C4514CB69F2933474E2ECBEC&ghsh=0&ghacc=0&ghpl=";

// Array to store unique words
let usedWords = [];

// Function to generate a random word
function generateRandomWord() {
  const words = [
    "cat", "dog", "bird", "tree", "house", "car", "banana", "apple", "orange", 
    "computer", "book", "pen", "chair", "table", "phone", "flower", "mountain", 
    "river", "ocean", "sun", "moon", "star", "cloud", "sky", "fish", "lion", 
    "tiger", "elephant", "zebra", "giraffe", "monkey", "snake", "turtle", "frog", 
    "butterfly", "bee", "ant", "spider", "snail", "duck", "goose", "swan", "eagle", 
    "owl", "penguin", "bear", "wolf", "fox", "deer", "rabbit", "squirrel", "hamster", 
    "mouse", "rat", "guinea pig", "pig", "cow", "horse", "sheep", "goat", "chicken", 
    "duck", "turkey", "peacock", "parrot", "pigeon", "rooster", "dolphin", "whale", 
    "shark", "octopus", "jellyfish", "starfish", "coral", "crab", "lobster", "seagull", 
    "pelican", "albatross", "hummingbird", "woodpecker", "sparrow", "bluebird", "robin", 
    "blue jay", "cardinal", "hawk", "falcon", "vulture", "bat", "moth", "caterpillar",
    "unicorn", "dragon", "phoenix", "mermaid", "centaur", "werewolf", "vampire", 
    "witch", "wizard", "fairy", "gnome", "elf", "dwarf", "goblin", "troll", 
    "sphinx", "kraken", "yeti", "ogre", "leprechaun", "pegasus", "griffin", 
    "minotaur", "hydra", "chimera", "siren", "cyclops", "medusa", "sasquatch", 
    "abominable snowman", "mothman", "bigfoot", "nessie", "jackalope", "kraken", 
    "flying saucer", "alien", "robot", "android", "dinosaur", "pterodactyl", 
    "tyrannosaurus rex", "velociraptor", "triceratops", "stegosaurus", "brontosaurus", 
    "diplodocus", "pteranodon", "ankylosaurus", "archaeopteryx", "spinosaurus", "mosasaurus",
    "apple", "ball", "cat", "dog", "elephant", "fish", "guitar", "hat", "ice cream", 
    "juice", "kite", "lemon", "monkey", "nest", "orange", "pencil", "queen", "robot", 
    "sun", "tiger", "umbrella", "violin", "watermelon", "xylophone", "yoyo", "zebra",
    "pizza", "burger", "fries", "sandwich", "salad", "pasta", "soup", "sushi", "taco", 
    "burrito", "quesadilla", "nachos", "hotdog", "pancake", "waffle", "donut", "cookie", 
    "cake", "pie", "ice cream", "coffee", "tea", "juice", "soda", "smoothie", "milkshake",
    "sunflower", "rainbow", "waterfall", "butterfly", "fireworks", "campfire", "bonfire", 
    "fireplace", "waterfall", "rainforest", "volcano", "earthquake", "tsunami", "tornado", 
    "hurricane", "blizzard", "avalanche", "thunderstorm", "lightning", "raindrop", "snowflake", 
    "hailstone", "meteor", "comet", "galaxy", "universe", "nebula", "constellation", "planet", 
    "moonlight", "starlight", "sunshine", "rainbow", "aurora", "eclipse", "twilight", "dawn", 
    "dusk", "midnight", "noon", "sunset", "sunrise", "spring", "summer", "autumn", "winter", 
    "daytime", "nighttime", "morning", "afternoon", "evening", "midday", "midnight", "horizon"
  ];
  let randomIndex = Math.floor(Math.random() * words.length);
  let randomWord = words[randomIndex];
  
  // Ensure the word is not repeated
  while (usedWords.includes(randomWord)) {
    randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];
  }

  // Push the word into usedWords array
  usedWords.push(randomWord);
  
  return randomWord;
}

// Array to store URLs
const pages = [];

// Generate 50 URLs with random words replacing "man"
for (let i = 0; i < 90; i++) {
  const randomWord = generateRandomWord();
  const url = templateURL.replace("man", randomWord);
  pages.push(url);
}

function performRandomSearch() {
    const randomIndex = Math.floor(Math.random() * pages.length);
    const randomPage = pages[randomIndex];
    console.log("Performing search at:", randomPage);
    chrome.tabs.update({ url: randomPage });
  }
  
  // Perform initial search
  performRandomSearch();
  
  // Perform random search every 10 seconds
  setInterval(performRandomSearch, 15000);
