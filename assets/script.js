//DOM elements
var startBtn = document.getElementById("start");
var questionBox = document.querySelector("#Qs");
var nextBtn = document.querySelector("#next");
var answerBtnA = document.querySelector("#A");
var answerBtnB = document.querySelector("#B");
var answerBtnC = document.querySelector("#C");
var answerBtnD = document.querySelector("#D");


//Event Listeners
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", next);
answerBtnA.addEventListener("click", answerA);
answerBtnB.addEventListener("click", answerB);
answerBtnC.addEventListener("click", answerC);
answerBtnD.addEventListener("click", answerD);


function startQuiz() {
    console.log("start")
    next();
}

function next() {
    console.log("next")
    updateQ()
    showA()
    showB()
    showC()
    showD()
}

function updateQ() {
    var questionArray = ["Where in the HTML does the link to an external Javascript file belong?", "What is the Emmet Abbreviation to call the basic structure of an HTML document?", 
    "What is an API?", "Which of the following is not a Data Type in Javascript?"]; 

    var currentQ = 0;

    for(var i=0, len = questionArray.length, text = ""; i < len; i++){
        text = questionArray[i]}
        questionBox.innerHTML = text;
    }

function showA() {
    var answerArray = ["In the head section", "$", "Automated Program Information", "String"];

    for(var i=0, len = answerArray.length, text = ""; i < len; i++){
        text = answerArray[i]}
        answerBtnA.innerHTML = text;
}

function showB() {
    var answerArrayB = ["At the bottom of the body", "&&", "Antithetical Purpose Interaction", "Array"];

    for(var i=0, len = answerArrayB.length, text = ""; i < len; i++){
        text = answerArrayB[i]}
        answerBtnB.innerHTML = text;
}
function showC() {
    var answerArrayC = ["You cannot link to external javascript files", "<>", "Application Programming Interface", "Sentence",];

    for(var i=0, len = answerArrayC.length, text = ""; i < len; i++){
        text = answerArrayC[i]}
        answerBtnC.innerHTML = text;
}
function showD() {
    var answerArrayD = ["Anywhere you want to put it", "!", "Antipodal Pataphysical Idiocy", "Number"];

    for(var i=0, len = answerArrayD.length, text = ""; i < len; i++){
        text = answerArrayD[i]}
        answerBtnD.innerHTML = text;
}

function answerA() {
    console.log("answerA")
}
function answerB() {
    console.log("answerB")
}
function answerC() {
    console.log("answerC")
}
function answerD() {
    console.log("answerD")
}