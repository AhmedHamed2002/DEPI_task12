const quote = document.getElementById("quote") ;  
const author =  document.getElementById("author"); 
const container = document.getElementById("text") ;  

let wisdom = [
    {
        text : "“Be yourself; everyone else is already taken.”" ,  
        name: "― Oscar Wilde"
    } , 
    {
        text : "“So many books, so little time.”" ,  
        name: "― Frank Zappa"
    } , 
    {
        text : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" ,  
        name: "― Albert Einstein"
    } , 
    {
        text : "“A room without books is like a body without a soul.”" ,  
        name: "― Marcus Tullius Cicero"
    } , 
    {
        text : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" ,  
        name: "― Bernard M. Baruch"
    } , 
    {
        text : "“You only live once, but if you do it right, once is enough.”" ,  
        name: "― Mae West"
    } , 
    {
        text : "“If you tell the truth, you don't have to remember anything.”" ,  
        name: "― Mark Twain"
    } 
] ; 

function change(){
    let random = Number.parseInt(Math.random()* wisdom.length);
    while(wisdom[random].text === quote.textContent)
    {
        random= Number.parseInt(Math.random()* wisdom.length);
    }
    container.style.display = "block" ; 
    quote.textContent = wisdom[random].text;  
    author.textContent = wisdom[random].name ;  
    // console.log(random); 
}

