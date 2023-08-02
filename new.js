function clearing(){
    let divjoke=document.querySelector('.jokes');
    divjoke.innerHTML="";
    let divmeme=document.querySelector('.memes');
    divmeme.innerHTML="";    
    let divq=document.querySelector('.quotes');
    divq.innerHTML="";
    let divrid=document.querySelector('.riddles');
    divrid.innerHTML="";

}

function showJoke(){
    clearing();
    let element1=document.createElement('p');
    element1.textContent=jokes[Math.floor(10*(Math.random()))];
    let divjoke=document.querySelector('.jokes');
    divjoke.appendChild(element1);
}
function showMeme(){
    clearing();
    let element2=document.createElement('img');
    element2.src=memes[Math.floor(13*(Math.random()))];
    let divmeme=document.querySelector('.memes');
    divmeme.appendChild(element2);
}

function showQuote(){
    clearing();
    let element31=document.createElement('p');
    temp=Math.floor(22*(Math.random()));
    element31.textContent=quotes[temp].quote;
    let element32=document.createElement('p');
    element32.textContent="-" + quotes[temp].author;
    let divq=document.querySelector('.quotes');
    divq.appendChild(element31);
    divq.appendChild(element32);
}

function showRiddle(){
    clearing();
    let element4=document.createElement('p');
    temp1=Math.floor(15*(Math.random()));
    element4.textContent=riddles[temp1].question;
    let divrid=document.querySelector('.riddles');
    divrid.appendChild(element4);

    let element5=document.createElement('p');
    element5.textContent=riddles[temp1].answer;
    let attt=document.createAttribute('id');
    attt.value='hide';
    element5.setAttributeNode(attt);
    divrid.appendChild(element5);
    document.getElementById("hide").style.display='none';
}


function revealAnswers(){
    document.getElementById("hide").style.display='block';
}






// Source: https://www.thecoderpedia.com/blog/programming-memes/, Reddit
const memes = ['https://i.redd.it/a0v87gwzoge61.jpg', 'https://i.redd.it/q29egav34ee61.jpg', 'https://i.redd.it/iij16swxjie61.jpg', 'https://i.redd.it/vek7dm2hrge61.jpg', 'https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png', 'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png', 'https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg', 'https://code-love.com/wp-content/uploads/2019/03/download.jpeg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg'];

// Sourced from: http://www.devtopics.com/best-programming-jokes/
const jokes = ['This statement', 'Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”', 'There are only 10 kinds of people in this world: those who know binary and those who don’t.', 'All programmers are playwrights, and all computers are lousy actors.', 'Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.', 'The generation of random numbers is too important to be left to chance.', 'Debugging: Removing the needles from the haystack.', '“Debugging” is like being the detective in a crime drama where you are also the murderer.', 'There are two ways to write error-free programs; only the third one works.', 'The best thing about a Boolean is even if you are wrong, you are only off by a bit.'];

// source: https://www.goodreads.com/quotes/tag/programming
const quotes = [
  { quote: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson'},
  { quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.', author: 'Rick Cook' },
  { quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live', author: 'John Woods' },
  { quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
  { quote: 'Truth can only be found in one place: the code.', author: 'Robert C. Martin' },
  { quote: 'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.', author: 'Larry Niven' },
  { quote: 'You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting.', author: 'Steve Jobs' },
  { quote: 'A language that doesn\'t affect the way you think about programming is not worth knowing.', author: 'Alan J. Perlis' },
  { quote: 'The most disastrous thing that you can ever learn is your first programming language.', author: 'Alan Kay' },
  { quote: 'The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.', author: 'Joseph Weizenbaum' },
  { quote: 'Everyone knows that debugging is twice as hard as writing a program in the first place. So if you\'re as clever as you can be when you write it, how will you ever debug it?', author: 'Brian Kernighan' },
  { quote: 'No matter which field of work you want to go in, it is of great importance to learn at least one programming language.', author: 'Ram Ray' },
  { quote: 'You miss 100% of the shots you don’t take. - Wayne Gretzky', author: 'Michael Scott'},
  { quote: 'Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it’s not like this compulsive need like my need to be praised.', author: 'Michael Scott'},
  { quote: 'Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject so you know you are getting the best possible information.', author: 'Michael Scott'},
  { quote: "The worst thing about prison was the Dementors. They were flying all over the place and they were scary and they'd come down and they'd suck the soul out of your body and it hurt!", author: 'Dwight Schrute'},
  { quote: "I am not superstitious, but I am a little stitious.", author: 'Michael Scott'},
  { quote: "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.", author: 'Michael Scott'},
  { quote: "Don't ever for any reason do anything to anyone for any reason ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been, ever, for any reason whatsoever", author: 'Michael Scott'},
  { quote: "Nobody steals from Creed Bratton and gets away with it. The last person to do this disappeared. His name: Creed Bratton.", author: "Creed Bratton"},
  { quote: "It all seems so very arbitrary. I applied for a job at this company because they were hiring. I took a desk at the back because it was empty. But, no matter how you get there or where you end up, human beings have this miraculous gift to make that place home. Let's do this.", author: "Creed Bratton"},

];

// Source: https://www.rd.com/list/challenging-riddles/
// Source: https://www.riddles.com/best-riddles
const riddles = [
  { question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?', answer: 'An echo' },
  { question: 'You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ', answer: 'A candle' },
  { question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ', answer: 'A map' },
  { question: 'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?', answer: 'The letter "R"' },
  { question: 'You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?', answer: 'All the people were married' },
  { question: 'What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?', answer: 'Heroine' },
  { question: 'The more you take, the more you leave behind. What am I?', answer: 'Footsteps'},
  { question: 'What has a head, a tail, is brown, and has no legs?', answer: 'A penny'},
  { question: 'What room do ghosts avoid?', answer: 'The living room'},
  { question: 'What belongs to you, but other people use it more than you?', answer: 'Your name'},
];