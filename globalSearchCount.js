var Regex_Pattern = 'bleeding';

function processData(Test_String) {
    var Regex = new RegExp(Regex_Pattern, "g");
    var Array = Test_String.match(Regex);
    console.log(Array);
    return "Number of matches :" + Array.length;
} 


const lyric = `
I'm gonna fight 'em all
A seven nation army couldn't hold me back
They're gonna rip it off
Taking their time right behind my back
And I'm talking to myself at night
Because I can't forget
Back and forth through my mind
Behind a cigarette
And a message coming from my eyes says leave it alone
Don't wanna hear about it
Every single one's got a story to tell
Everyone knows about it
From the Queen of England to the hounds of Hell
And if I catch you coming back my way
I'm gonna serve it to you
And that ain't what you want to hear
But that's what I'll do
And a feeling coming from my bones says find a home
I'm going to Wichita
Far from this opera forevermore
I'm gonna work the straw
Make the sweat drip out of every pore
And I'm bleeding and I'm bleeding
And I'm bleeding right before the Lord
All the words are gonna bleed from me
And I will think no more
And the stains coming from my blood tell me go back home`;

console.log(processData(lyric));