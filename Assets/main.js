var animalslist = ["Rhino", "Frog", "Hippo", "Cat", "Dog"]
var wordchoice= chooseword();
var wordletters = [];
var wordchoicedisplay = document.getElementById("wordtoguess");


var userguess;
function chooseword() {
    return animalslist[Math.floor(Math.random()* animalslist.length)];
   
}
function adddashes() {
   for (let i= 0; i <wordchoice.length; i++)
    wordchoicedisplay.textContent ='*';
}
function splitword(somestring) {
    for (let i = 0; i < somestring.length; i++){
       var lowercaseString = somestring.toLowerCase();
        wordletters.push(lowercaseString[i])
    }
}
document.onkeyup = function(event) {
    var userguess= event.key;
    var confirmlettersarr= [];
    for (let j =0; j < wordletters.length; j++){
       var truefalse= wordletters[j].includes(userguess);
       confirmlettersarr.push(truefalse)  
       if (truefalse == true){

       } 
}

console.log(confirmlettersarr);
}
adddashes();
console.log(userguess)
splitword(wordchoice);
console.log(wordchoice);
console.log(wordletters);