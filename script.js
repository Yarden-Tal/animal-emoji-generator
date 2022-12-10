// DOM elements
const button = document.querySelector(".generate-btn");
const emojiEl = document.querySelector(".emoji");
const emojiCodeEl = document.querySelector(".emoji-code");
const emojiNameEl = document.querySelector(".emoji-name");

// Get random emoji from emojis list
const getRandomEmoji = () => {
  let emoji = emojis.sort(() => 0.5 - Math.random())[0];
  const { htmlCode, name } = emoji;
  changeHtml(htmlCode, name);
};

// Change DOM elements accordingly
const changeHtml = (emojiCode, emojiName) => {
  emojiEl.innerHTML = emojiCode;
  emojiCodeEl.innerText = emojiCode;
  emojiNameEl.innerText = emojiName;
};

window.onload = () => getRandomEmoji();
button.onclick = () => getRandomEmoji();

const emojis = [
  {
    name: "monkey face",
    htmlCode: ["&#128053;"],
  },
  {
    name: "monkey",
    htmlCode: ["&#128018;"],
  },
  {
    name: "gorilla",
    htmlCode: ["&#129421;"],
  },
  {
    name: "dog face",
    htmlCode: ["&#128054;"],
  },
  {
    name: "dog",
    htmlCode: ["&#128021;"],
  },
  {
    name: "poodle",
    htmlCode: ["&#128041;"],
  },
  {
    name: "wolf face",
    htmlCode: ["&#128058;"],
  },
  {
    name: "fox face",
    htmlCode: ["&#129418;"],
  },
  {
    name: "cat face",
    htmlCode: ["&#128049;"],
  },
  {
    name: "cat",
    htmlCode: ["&#128008;"],
  },
  {
    name: "lion face",
    htmlCode: ["&#129409;"],
  },
  {
    name: "tiger face",
    htmlCode: ["&#128047;"],
  },
  {
    name: "tiger",
    htmlCode: ["&#128005;"],
  },
  {
    name: "leopard",
    htmlCode: ["&#128006;"],
  },
  {
    name: "horse face",
    htmlCode: ["&#128052;"],
  },
  {
    name: "horse",
    htmlCode: ["&#128014;"],
  },
  {
    name: "deer",
    htmlCode: ["&#129420;"],
  },
  {
    name: "unicorn face",
    htmlCode: ["&#129412;"],
  },
  {
    name: "cow face",
    htmlCode: ["&#128046;"],
  },
  {
    name: "ox",
    htmlCode: ["&#128002;"],
  },
  {
    name: "water buffalo",
    htmlCode: ["&#128003;"],
  },
  {
    name: "cow",
    htmlCode: ["&#128004;"],
  },
  {
    name: "pig face",
    htmlCode: ["&#128055;"],
  },
  {
    name: "pig",
    htmlCode: ["&#128022;"],
  },
  {
    name: "boar",
    htmlCode: ["&#128023;"],
  },
  {
    name: "pig nose",
    htmlCode: ["&#128061;"],
  },
  {
    name: "ram",
    htmlCode: ["&#128015;"],
  },
  {
    name: "sheep",
    htmlCode: ["&#128017;"],
  },
  {
    name: "goat",
    htmlCode: ["&#128016;"],
  },
  {
    name: "dromedary camel ≊ camel",
    htmlCode: ["&#128042;"],
  },
  {
    name: "bactrian camel ≊ two-hump camel",
    htmlCode: ["&#128043;"],
  },
  {
    name: "elephant",
    htmlCode: ["&#128024;"],
  },
  {
    name: "rhinoceros",
    htmlCode: ["&#129423;"],
  },
  {
    name: "mouse face",
    htmlCode: ["&#128045;"],
  },
  {
    name: "mouse",
    htmlCode: ["&#128001;"],
  },
  {
    name: "rat",
    htmlCode: ["&#128000;"],
  },
  {
    name: "hamster face",
    htmlCode: ["&#128057;"],
  },
  {
    name: "rabbit face",
    htmlCode: ["&#128048;"],
  },
  {
    name: "rabbit",
    htmlCode: ["&#128007;"],
  },
  {
    name: "chipmunk",
    htmlCode: ["&#128063;"],
  },
  {
    name: "bat",
    htmlCode: ["&#129415;"],
  },
  {
    name: "bear face",
    htmlCode: ["&#128059;"],
  },
  {
    name: "koala",
    htmlCode: ["&#128040;"],
  },
  {
    name: "panda face",
    htmlCode: ["&#128060;"],
  },
  {
    name: "paw prints",
    htmlCode: ["&#128062;"],
  },
  {
    name: "turkey",
    htmlCode: ["&#129411;"],
  },
  {
    name: "chicken",
    htmlCode: ["&#128020;"],
  },
  {
    name: "rooster",
    htmlCode: ["&#128019;"],
  },
  {
    name: "hatching chick",
    htmlCode: ["&#128035;"],
  },
  {
    name: "baby chick",
    htmlCode: ["&#128036;"],
  },
  {
    name: "front-facing baby chick",
    htmlCode: ["&#128037;"],
  },
  {
    name: "bird",
    htmlCode: ["&#128038;"],
  },
  {
    name: "penguin",
    htmlCode: ["&#128039;"],
  },
  {
    name: "dove of peace ≊ dove",
    htmlCode: ["&#128330;"],
  },
  {
    name: "eagle",
    htmlCode: ["&#129413;"],
  },
  {
    name: "duck",
    htmlCode: ["&#129414;"],
  },
  {
    name: "owl",
    htmlCode: ["&#129417;"],
  },
  {
    name: "frog face",
    htmlCode: ["&#128056;"],
  },
  {
    name: "crocodile",
    htmlCode: ["&#128010;"],
  },
  {
    name: "turtle",
    htmlCode: ["&#128034;"],
  },
  {
    name: "lizard",
    htmlCode: ["&#129422;"],
  },
  {
    name: "snake",
    htmlCode: ["&#128013;"],
  },
  {
    name: "dragon face",
    htmlCode: ["&#128050;"],
  },
  {
    name: "dragon",
    htmlCode: ["&#128009;"],
  },
  {
    name: "spouting whale",
    htmlCode: ["&#128051;"],
  },
  {
    name: "whale",
    htmlCode: ["&#128011;"],
  },
  {
    name: "dolphin",
    htmlCode: ["&#128044;"],
  },
  {
    name: "fish",
    htmlCode: ["&#128031;"],
  },
  {
    name: "tropical fish",
    htmlCode: ["&#128032;"],
  },
  {
    name: "blowfish",
    htmlCode: ["&#128033;"],
  },
  {
    name: "shark",
    htmlCode: ["&#129416;"],
  },
  {
    name: "octopus",
    htmlCode: ["&#128025;"],
  },
  {
    name: "spiral shell",
    htmlCode: ["&#128026;"],
  },
  {
    name: "crab",
    htmlCode: ["&#129408;"],
  },
  {
    name: "shrimp",
    htmlCode: ["&#129424;"],
  },
  {
    name: "squid",
    htmlCode: ["&#129425;"],
  },
  {
    name: "butterfly",
    htmlCode: ["&#129419;"],
  },
  {
    name: "snail",
    htmlCode: ["&#128012;"],
  },
  {
    name: "bug",
    htmlCode: ["&#128027;"],
  },
  {
    name: "ant",
    htmlCode: ["&#128028;"],
  },
  {
    name: "honeybee",
    htmlCode: ["&#128029;"],
  },
  {
    name: "lady beetle",
    htmlCode: ["&#128030;"],
  },
  {
    name: "spider",
    htmlCode: ["&#128375;"],
  },
  {
    name: "spider web",
    htmlCode: ["&#128376;"],
  },
  {
    name: "scorpion",
    htmlCode: ["&#129410;"],
  },
];
