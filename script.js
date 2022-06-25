// TODO: [1] Select the <body>
document.querySelector('body');
// TODO: [2] Select the <header>
document.querySelector('header');
// TODO: [3] Select all of the elements with class "quote"
document.querySelectorAll('.quote');
// TODO: [4] Select all of the subject elements
document.querySelectorAll('.subject');
// TODO: [5] Select the navigation links
document.querySelectorAll('li');
//alternative: document.querySelector('nav');
// TODO: [6] Select all the quotes in the "life" section.
document.querySelector('.life').querySelectorAll('.quote');

// TODO: [7] Using relative selection, select the <p> element containing the second Mark Twain quote
document.body.children[1].children[1].children[2].children[0].children[0];

// TODO: [8] Do the same using a query selector
document.querySelector('#mark-twain-second').querySelector('p');
// TODO: [9] Select the 'Quotes About Motivation' heading
document.body.children[1].children[2].children[0];
// TODO: [10] -  Add a class 'simplicity' to the first subject.
document.querySelector('section').classList.add('simplicity');

// BONUS
// TODO: [11] Create an element with the text of your favorite quote.
let quoteArt = document.createElement('article');
let quoteBlock = document.createElement('blockquote');
let pQuoteNew = document.createElement('p');
let citeQuoteNew = document.createElement('cite');
pQuoteNew.innerText = "Lunch time."
citeQuoteNew.innerText = "--Instructor"
// TODO: [12] Add the element that you created in the previous step to the layout by appending it to a corresponding subject section.
quoteBlock.appendChild(pQuoteNew);
quoteBlock.appendChild(citeQuoteNew);
quoteArt.appendChild(quoteBlock);
document.querySelector('.motivation').appendChild(quoteArt);
// TODO: [13] Add the author's last name, as a class name, to one of the quotes.
quoteArt.classList.add("Instructor");