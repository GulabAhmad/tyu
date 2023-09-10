//console.log("Hello World");

//var person : string = "Gulab Ahmad"; 
//console.log(person) 

var person : string = "Gulab Ahmad";
console.log(person)

var num1 : number = 3434;
console.log(num1)

var num2 : number = 4546464;
console.log(num2);


var person1 : string = "Hello Eric, would you like to learn python today?"
console.log(person1)

var person2 : string = "Gulab Ahmad"
console.log(person2)
console.log(person2.toUpperCase());
console.log(person2.toLowerCase());
console.log(person2.length);
console.log(person2.indexOf('alis'));
console.log(person2.replace('ab',"12"));
console.log(person2.split(','));
console.log(person2.split(""));

var author : string = "Albert Einstein once said, “A person who never made a mistake never tried anything new.”";
console.log(author);
 

//var famous_person : string = "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
//console.log(famous_person);

var famous_person : string = "Albert Einstein once said,";
var message : string = " Hello ${famous_person},A person who never made a mistake never tried anything new."
console.log(message);


var personName : string = "\t Gulab Ahmad \n";
console.log(personName);
  var strippedpersonName : string = personName.trim();
  console.log(strippedpersonName);  

  var personNameWithWhitespace : string = "\t HP ELITEBOOK";
  console.log("Name with whitespace:");
console.log(personNameWithWhitespace);

var trimPersonName : string = personNameWithWhitespace.trim();
console.log("Name without space");
console.log(trimPersonName);

console.log(5+3);
console.log(16-8);
console.log(2*4);
console.log(24/3);

var favnum : number = 565755;
console.log("Your fvrt number");
console.log(favnum);

const names = ["Muhammad Umar", "Umar liquait", "Ibrahim", "Abu Bakar"];


for (let i = 0; i < names.length; i++) {
  const name = names[i];
  console.log(`Hello ${name}, how are you today?`);
}

let user = ["Muhammad Umar", "Umar liquait", "Ibrahim", "Abu Bakar"];
for(let i=0; i<user.length; i++) {
    console.log(`Hello ${user[i]}, how are you today?`)
}

let motorbikes : string[] = ["Honda" , "Yamaha"  , "Kawasaki", "Harley-Davidson"]
for (let i=0; i< motorbikes.length; i++){
    console.log(`I would like to own a ${motorbikes[i]} motorcycle.`)
}

let guestinvite : string[] = ["Muhammad Umar", "Umar liquait", "Ibrahim", "Abu Bakar"]
for (let i=0; i<guestinvite.length; i++){
    console.log(`Dear ${guestinvite[i]} , you are cordially invited to dinner at my place. Looking forward to your presence.`)
}

// Original array of guests invited to dinner
let guestList: string[] = ["Albert Einstein", "Nelson Mandela", "Jane Austen"];

// Removing the guest who can't make it
let guestWhoCantMakeIt: string = "Jane Austen";
let indexToRemove: number = guestList.indexOf(guestWhoCantMakeIt);
if (indexToRemove !== -1) {
  guestList.splice(indexToRemove, 1);
}

// Adding a new guest
let newGuest: string = "Marie Curie";
guestList.push(newGuest);

// Sending dinner invitations to the updated guest list
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner at my place. Looking forward to your presence.`);
}


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// create the array of place to visit:

const placeToVisit: string[] = ["Machu Picchu","Santorini","Kyoto","Iceland","New York City",];

// Print the array its original:
console.log("original order");
console.log(placeToVisit);

// place the array in alphabetical order without modifying the actual list:
console.log("\n Alphabatical Order (without modifying the actual order list):");
console.log([...placeToVisit].sort());

// show the array is stills in its original list:
console.log("\n Array is stills in its original list:");
console.log(placeToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list

console.log("\n Reverse Alphabatic Order (without modifying the original list:)");
console.log([...placeToVisit].sort().reverse());

// show the array is still in its original:
console.log("\n the array is still in original list");
console.log(placeToVisit);

// Reverse the order of  your list:
placeToVisit.reverse();

//print the array to show that its order has chnaged:
console.log("\n Reverse Order");
console.log(placeToVisit);  

// print the array to show its back in original order:
console.log("\nSorted in alphabetical order:");
console.log(placeToVisit);


placeToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(placeToVisit);


// Create an array to store a list of countrie:

var countries : string [] = [
  "Pakistan",
  "Sudia",
  "United Kindom",
  "Maldives",
  "Iraq",
]
console.log("List of countries");
console.log(countries);


// Create a TypeScript object to store information about books
interface Book {
  title: string;
  author: string;
  publicationYear: number;
  genre: string;
}

// Create an array of books
const books: Book[] = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    genre: "Classic",
  },
  {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
    genre: "Dystopian",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    genre: "Classic",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publicationYear: 1997,
    genre: "Fantasy",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publicationYear: 1813,
    genre: "Classic",
  },
];

// Print the information of each book
console.log("Information about books:");
books.forEach((book, index) => {
  console.log(`Book ${index + 1}:`);
  console.log("Title:", book.title);
  console.log("Author:", book.author);
  console.log("Publication Year:", book.publicationYear);
  console.log("Genre:", book.genre);
  console.log("--------------------");
});






