const quotes = ["The purpose of our lives is to be happy. - Dalai Lama","Get busy living or get busy dying. - Stephen King","The unexamined life is not worth living. - Socrates","Turn your wounds into wisdom. - Oprah Winfrey","Live for each second without hesitation. — Elton John","I like criticism. It makes you strong. — LeBron James","The healthiest response to life is joy. — Deepak Chopra"]
const btn = document.getElementById("btn");
const quote = document.querySelector(".quote");

btn.addEventListener("click",function(){
    const randomNumber = getRandomNumber();
    
    quote.textContent = quotes[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * quotes.length);
}