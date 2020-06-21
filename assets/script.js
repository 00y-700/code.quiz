//DOM elements
var startBtn = document.getElementById("start");
var questionBox = document.querySelector("#Qs");
var nextBtn = document.querySelector("#next");
var answerBtns = document.querySelector(".ans");

var currentQ = 0;

//Questions
var questionArray = ["Where in the HTML does the link to an external Javascript file belong?", "What is the Emmet Abbreviation to call the basic structure of an HTML document?", 
"What is an API?", "Which of the following is not a Data Type in Javascript?"];

//Event Listeners
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", next);
answerBtns.addEventListener("click", answer);


function startQuiz() {
    console.log("start")
    next();
}

function next() {
    console.log("next")
    updateQ()
    showA()
}

function updateQ() {
    // console.log("show")
    for(var i=0, len = questionArray.length, text = ""; i < len; i++){
        text = questionArray[i]}
        questionBox.innerHTML = text;
    }

function showA() {

}
function answer() {
    console.log("answer")
}

function displayQuestion(question) {

}






// ["In the head section", "At the bottom of the body", 
//     "You cannot link to external javascript files", "Anywhere you want to put it"], "At the bottom of the body"),

//     ["$", "&&", "<>", "!",], "!"),

//     ["Automated Program Information", "Antithetical Purpose Interaction", "Application Programming Interface", "Antipodal Pataphysical Idiocy"],
//     "Application Programming Interface"),

//     ["String", "Array", "Sentence", "Number"], "Sentence")