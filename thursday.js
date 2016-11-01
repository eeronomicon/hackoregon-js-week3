'use strict';

var character = {
  name: "Helgar the Holy",
  class: "Cleric",
  level: 1,
  hp: 6,
  armor: "Chainmail",
  shield: "Small",
  weapon: "Mace",
  inventory: ["Holy Symbol", "Health Potion", "Rations", "50' Rope"]
};

var vehicles = [
  {
    type: "Bus",
    line: "12",
    lat: "-140.3",
    long: "28.2",
    speed: "28",
    full: false,
    onSched: -180
  },{
    type: "Light Rail",
    line: "Green",
    lat: "-141.3",
    long: "28.3",
    speed: "15",
    full: false,
    onSched: 25
  },{
    type: "Streetcar",
    line: "Broadway",
    lat: "-140.6",
    long: "28.7",
    speed: "2",
    full: true,
    onSched: -80
  }
];

var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Walter Isaacson',
    title: 'Steve Jobs',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title:  'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
}];

function readingList(library) {
  var outputString = "";
  library.forEach(function(book) {
    outputString += (book.readingStatus ? "I am currently reading " : "I have yet to read ");
    outputString += book.title + " by " + book.author + '\n';
  });
  return outputString;
};

console.log(readingList(library));
