// var myElement = document.getElementById("thequote");
// var myQuotes = [
//   `“So many books, so little time.”
// ― Frank Zappa`,

//   `“A room without books is like a body without a soul.”
// ― Marcus Tullius Cicero`,

//   `“You only live once, but if you do it right, once is enough.”
// ― Mae West`,

//   `“Be the change that you wish to see in the world.”
// ― Mahatma Gandhi`,
//   `“In three words I can sum up everything I've learned about life: it goes on.”
// ― Robert Frost`,
//   `“If you tell the truth, you don't have to remember anything.”
// ― Mark Twain`,

//   `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”
// ― C.S. Lewis, The Four Loves`,

//   `“A friend is someone who knows all about you and still loves you.”
// ― Elbert Hubbard`,

//   `“To live is the rarest thing in the world. Most people exist, that is all.”
// ― Oscar Wilde`,

//   `“Always forgive your enemies; nothing annoys them so much.”
// ― Oscar Wilde`,
// ];




// function changeQuote (){

//      myElement.innerHTML = myQuotes[Math.floor(Math.random() * myQuotes.length) ];

// }







// ================Second solution with Json====================
// ================Second solution with Json====================
// ================Second solution with Json====================

var myQuote = document.getElementById("thequote");
var thewriter = document.getElementById("writer");

var collectionOfQuotes = [
  {
    quote: `“A room without books is like a body without a soul.”`,
    writer: `― Marcus Tullius Cicero`,
  },
  {
    quote: `“Always forgive your enemies; nothing annoys them so much.”`,
    writer: `― Oscar Wilde`,
  },
  {
    quote: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
    writer: `― Oscar Wilde`,
  },
  {
    quote: `“A friend is someone who knows all about you and still loves you.”`,
    writer: `― Elbert Hubbard`,
  },
  {
    quote: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself .”`,
    writer: `― C.S. Lewis, The Four Loves`,
  },
  {
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    writer: `―  Mark Twain`,
  },
  {
    quote: `“So many books, so little time.”`,
    writer: `― Frank Zappa`,
  },
  {
    quote: `“Be the change that you wish to see in the world.”`,
    writer: `― Mahatma Gandhi`,
  },
  {
    quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
    writer: `― Robert Frost`,
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    writer: `― Mae West`,
  },
];


function changeQuote (){

    var numberOfQuote = collectionOfQuotes[Math.floor(Math.random() * collectionOfQuotes.length)]; 

    myQuote.innerHTML = numberOfQuote.quote;
    thewriter.innerHTML = numberOfQuote.writer;


}