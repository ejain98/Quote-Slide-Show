/***********************Ekta Jain*******************
*************************300352096****************/
/*Display a randomly chosen 'quote, its author, source/citation, and year printed' every time 'next quote' button is clicked. */

/*** 
 * `quotes` array 
***/

//Add data to your quote objects
quotes = [{
    quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost", source: "The Road not taken", year: 1915
},

{
    quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart", source: "forbes"
},

{ quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky", source: "forbes", year: 2019 },

{
    quote: "No matter where we come from, there is one language we can all speak and understand from birth, the language of the heart, love.",
    author: "Imania Margria", source: "Secrets of My Heart", year: 1997
},
{
    quote: "Beauty is great... But love is greater. With it, you can overcome anything fate throws at you.",
    author: "Imania Margria", source: "Secrets of My Heart", year: 1997
},
{
    quote: "Changing the world starts with you",
    author: " Camille Burnett", source: "Be Better: The Urgency is Now", year: 2020
},
{
    quote: "Every really new idea looks crazy at first.", author: "Alfred North Whitehead", source: "goodreads"

},
{
    quote: "I have no special talent. I am only passionately curious.", author: " Albert Einstein", source: "wisdomquotes.com"
},
{
    quote: "A man, after he has brushed off the dust and chips of his life, will have left only the hard, clean questions: Was it good or was it evil? Have I done well — or ill?",
    author: "John Steinbeck", source: "East of Eden", year: 1952
},
{
    quote: "We accept the love we think we deserve.", author: "Stephen Chbosky", source:
        "The Perks of Being a Wallflower", year: 1999
}]
    ;

/***
 * `getRandomQuote` function
***/


function getRandomQuote() {

    //to count the length of array 'quotes'
    count = 0;
    for (let qLenth in quotes) {
        count = count + 1;
        //console.log(quotes[1].author);
    }

    //generation of a random number
    randNum = Math.floor(Math.random() * count);

    //console.log(`"${quotes[randNum].quote}"`);

    //Storing the generated random index value in an array
    arrayQuote = [`${quotes[randNum].quote}`, `${quotes[randNum].author}`, `${quotes[randNum].source}`, `${quotes[randNum].year}`];
    return arrayQuote;
}

/***
 * `printQuote` function
***/
printQuote = () => {

    // 1. Create a variable that calls the getRandomQuote()
    // reteriving the values og=f quotes from the function
    getquote = getRandomQuote();

    //console.log(getquote[2]);
    Quote = document.querySelector('.quote');
    Source = document.querySelector('.source');

    //Quote
    Quote.innerHTML = getquote[0];
    //Author
    quoteString2 = getquote[1];



    /* Checking for source name*/
    if (getquote[2] != "undefined") {
        quoteString2 = quoteString2 + `<span class=citation>${getquote[2]}</span>`;
    }
    /* checking for the mentioned year*/
    if (getquote[3] != "undefined") {
        quoteString2 = quoteString2 + `<span class=year>${getquote[3]}</span>`;
    };

    // ending the string
    quoteString2 = quoteString2 + `</p>`;


    Source.innerHTML = quoteString2;
}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", function () {
    //call the print function every time the "next Quote" button is clicked
    printQuote();
});