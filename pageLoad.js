
// Template URL with "man" to be replaced
const templateURL = "https://www.bing.com/search?q=man&form=QBLH&sp=-1&ghc=1&lq=0&pq=man&sc=11-3&qs=n&sk=&cvid=17487D35C4514CB69F2933474E2ECBEC&ghsh=0&ghacc=0&ghpl=";

let usedWords = [];
let searchCount = 0;

function incrementSearchCount() {
  searchCount++;
  if (searchCount >= 40) {
    document.getElementById('cover').textContent = 'Searches completed';
  }
}
function generateRandomWord() {
  const words = [
    "watermelon", "blackboard", "frog", "ship", "computer", "vampire", "dusk", "fairy",
    "lemon", "meteor", "midnight", "spider", "ball", "winter", "lantern", "airplane",
    "quesadilla", "bicycle", "surfboard", "universe", "deer", "juice", "daytime", "chicken",
    "fish", "bee", "werewolf", "queen", "drum", "bluebird", "rollerblades", "dog", "turtle",
    "drone", "dawn", "gnome", "mothman", "dolphin", "goblin", "zebra", "pencil", "twilight",
    "alien", "milkshake", "satellite", "eagle", "monkey", "snowflake", "bigfoot", "tsunami",
    "giraffe", "swan", "starfish", "troll", "minotaur", "backpack", "jackalope", "sasquatch",
    "cat", "donut", "nachos", "abominable snowman", "guitar", "yeti", "stegosaurus", "fireplace",
    "cow", "campfire", "peacock", "snowboard", "jet", "ocean", "ankylosaurus", "umbrella",
    "falcon", "griffin", "hotdog", "pterodactyl", "pelican", "kite", "car", "velociraptor",
    "chair", "wizard", "pancake", "aurora", "burger", "telescope", "astronaut", "evening",
    "bonfire", "salad", "ferry", "eclipse", "balloon", "sailboat", "hailstone", "sandwich",
    "siren", "spinosaurus", "cake", "coffee", "volcano", "snake", "constellation", "skates",
    "rocket", "planet", "midday", "bear", "lion", "squirrel", "guinea pig", "duck", "sunrise",
    "globe", "rabbit", "hamster", "woodpecker", "octopus", "mountain", "leprechaun", "apple",
    "blue jay", "pasta", "cardinal", "afternoon", "moth", "canoe", "parachute", "dragon",
    "owl", "robin", "flying saucer", "yoyo", "motorcycle", "dinghy", "unicorn", "horse", "cruise",
    "witch", "medusa", "nebula", "microscope", "pen", "pteranodon", "raindrop", "mermaid", "sunset",
    "xylophone", "tugboat", "moon", "rainbow", "mosasaurus", "pig", "soup", "moonlight", "ogre",
    "noon", "waffle", "autumn", "snail", "nighttime", "gondola", "spaceship", "kraken", "rooster",
    "spacesuit", "jellyfish", "tea", "raft", "cookie", "tyrannosaurus rex", "waterfall", "summer",
    "rat", "phoenix", "smoothie", "hurricane", "penguin", "sunshine", "turkey", "skis", "pie",
    "vulture", "seagull", "boat", "comet", "whistle", "avalanche", "helicopter", "brontosaurus",
    "sphinx", "banana", "dwarf", "goat", "thunderstorm", "tree", "sun", "elephant", "wolf", "yacht",
    "parrot", "pigeon", "river", "star", "chimera", "sky", "centaur", "lobster", "cyclops",
    "hummingbird", "sparrow", "book", "ice cream", "flower", "whale", "calculator", "hydra", "soda",
    "galaxy", "starlight", "blizzard", "diplodocus", "albatross", "rowboat", "lightning", "phone",
    "dinosaur", "house", "fireworks", "caterpillar", "tornado", "rover", "spacecraft", "crab",
    "morning", "scooter", "earthquake", "android", "cloud", "tiger", "ant", "sheep", "bat",
    "submarine", "shark", "hat", "fries", "pizza", "sunflower", "burrito", "nessie", "skateboard",
    "taco", "pegasus", "hawk", "kayak", "sushi", "nest", "triceratops", "goose", "fox", "orange",
    "archaeopteryx", "bird", "violin", "table", "mouse", "coral", "rainforest", "horizon", "robot",
    "elf", "butterfly", "spring"
];
  let randomIndex = Math.floor(Math.random() * words.length);
  let randomWord = words[randomIndex];
  
  while (usedWords.includes(randomWord)) {
    randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];
  }

  usedWords.push(randomWord);
  
  return randomWord;
}

const pages = [];

for (let i = 0; i < 90; i++) {
  const randomWord = generateRandomWord();
  const url = templateURL.replace("man", randomWord);
  pages.push(url);
}

function performRandomSearch() {
  if(searchCount < 40){
    const randomIndex = Math.floor(Math.random() * pages.length);
    const randomPage = pages[randomIndex];
    console.log("Performing search at:", randomPage);
    chrome.tabs.update({ url: randomPage });
    incrementSearchCount()
  }
  else{
    clearInterval(searchInterval);
    exit();
  }
}
  
  performRandomSearch();
 
  const searchInterval = setInterval(performRandomSearch, 15000);
