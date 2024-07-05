let quotesArray = [
    {
        "quote": "I love you not only for what you are, but for what I am when I am with you.",
        "author": "Roy Croft"
    },
    {
        "quote": "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
        "author": "Maya Angelou"
    },
    {
        "quote": "You are my heart, my life, my one and only thought.",
        "author": "Conan Doyle"
    },
    {
        "quote": "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
        "author": "Leo Christopher"
    },
    {
        "quote": "You are the finest, loveliest, tenderest, and most beautiful person I have ever known—and even that is an understatement.",
        "author": "F. Scott Fitzgerald"
    },
    {
        "quote": "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
        "author": "Angelita Lim"
    },
    {
        "quote": "To the world, you may be one person, but to one person you are the world.",
        "author": "Bill Wilson"
    },
    {
        "quote": "If I had a flower for every time I thought of you... I could walk through my garden forever.",
        "author": "Alfred Tennyson"
    },
    {
        "quote": "You are my today and all of my tomorrows.",
        "author": "Leo Christopher"
    },
    {
        "quote": "I love you as one loves certain dark things, secretly, between the shadow and the soul.",
        "author": "Pablo Neruda"
    },
    {
        "quote": "I wish I could turn back the clock. I’d find you sooner and love you longer.",
        "author": "Unknown"
    },
    {
        "quote": "The best thing to hold onto in life is each other.",
        "author": "Audrey Hepburn"
    },
    {
        "quote": "You are my sun, my moon, and all of my stars.",
        "author": "E.E. Cummings"
    },
    {
        "quote": "I have found the one whom my soul loves.",
        "author": "Song of Solomon 3:4"
    },
    {
        "quote": "I love you more than yesterday, less than tomorrow.",
        "author": "Edmond Rostand"
    },
    {
        "quote": "If I know what love is, it is because of you.",
        "author": "Hermann Hesse"
    },
    {
        "quote": "When I saw you I fell in love, and you smiled because you knew.",
        "author": "Arrigo Boito"
    },
    {
        "quote": "You are my heart, my soul, my treasure, my today, my tomorrow, my forever, and my everything.",
        "author": "Unknown"
    },
    {
        "quote": "In your smile, I see something more beautiful than the stars.",
        "author": "Beth Revis"
    },
    {
        "quote": "You are the last thought in my mind before I drift off to sleep and the first thought when I wake up each morning.",
        "author": "Unknown"
    },
    {
        "quote": "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
        "author": "Leo Christopher"
    },
    {
        "quote": "You have bewitched me, body and soul, and I love, I love, I love you. I never wish to be parted from you from this day on.",
        "author": "Jane Austen"
    },
    {
        "quote": "I want all of you, forever, you and me, every day.",
        "author": "Nicholas Sparks"
    },
    {
        "quote": "I love you. I am at rest with you. I have come home.",
        "author": "Dorothy L. Sayers"
    },
    {
        "quote": "You are my heart, my life, my one and only thought.",
        "author": "Conan Doyle"
    },
    {
        "quote": "I would rather spend one lifetime with you, than face all the ages of this world alone.",
        "author": "J.R.R. Tolkien"
    },
    {
        "quote": "I love you as certain dark things are to be loved, in secret, between the shadow and the soul.",
        "author": "Pablo Neruda"
    },
    {
        "quote": "I love you as the plant that never blooms but carries in itself the light of hidden flowers; thanks to your love a certain solid fragrance, risen from the earth, lives darkly in my body.",
        "author": "Pablo Neruda"
    },
    {
        "quote": "You are my today and all of my tomorrows.",
        "author": "Leo Christopher"
    },
    {
        "quote": "My love for you is past the mind, beyond my heart, and into my soul.",
        "author": "Boris Kodjoe"
    },
    {
        "quote": "To love is nothing. To be loved is something. But to love and be loved, that’s everything.",
        "author": "T. Tolis"
    },
    {
        "quote": "I love you because the entire universe conspired to help me find you.",
        "author": "Paulo Coelho"
    },
    {
        "quote": "The best love is the kind that awakens the soul; that makes us reach for more, that plants the fire in our hearts and brings peace to our minds. That’s what I hope to give you forever.",
        "author": "Nicholas Sparks"
    }
]

// picking random array value 

function getRandomQuotes(quotesArray){
  return Math.floor(Math.random() * quotesArray)
}

// get quotes

function getQuotes(){
    let randomNumber = getRandomQuotes(quotesArray.length);
    document.getElementById("quote").innerHTML = quotesArray[randomNumber].quote;
    document.getElementById("author").innerHTML = '- ' + quotesArray[randomNumber].author;
}
