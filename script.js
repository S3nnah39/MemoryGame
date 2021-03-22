function toSpanish(){
    document.getElementsByTagName('html')[0].setAttribute('lang','es');document.getElementById("spanish").classList.add("hidden"); document.getElementById("english").classList.remove("hidden");
    document.getElementById("gameHeader").innerHTML = "Juego de memoria de luz y sonido";
    document.getElementById("instruction").innerHTML = "¡Repite el patrón para ganar el juego!";
    document.getElementById("startBtn").innerHTML = "Comienzo";
    document.getElementById("stopBtn").innerHTML = "Detener";
    document.getElementById("startBtn").style.width = "80px";
    document.getElementById("stopBtn").style.width = "80px";
    
}

function toEnglish(){
    document.getElementsByTagName('html')[0].setAttribute('lang','en');
    document.getElementById("english").classList.add("hidden"); document.getElementById("spanish").classList.remove("hidden");
    
    document.getElementById("gameHeader").innerHTML = "Light and Sound Memory Game";
    document.getElementById("instruction").innerHTML = "Repeat the pattern back to win the game";
    document.getElementById("startBtn").innerHTML = "Start";
    document.getElementById("stopBtn").innerHTML = "Stop";
    document.getElementById("startBtn").style.width = "60px";
    document.getElementById("stopBtn").style.width = "60px";
}

//Global Variables

// global constants
const clueHoldTime = 1000; 
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Tracks button press pattern
var pattern = [2, 1, 3 ,4, 2, 4, 3, 2];
 
var progress = 0;//Represents how far along the player is. 

var gamePlaying = false;//Tracks the game active status

var tonePlaying = false;
var volume = 0.9; //range 0.0 - 1.0

var guessCounter = 0;//tracks progress
var chancesLeft = 3; // tracks how many chances they have

function generatePattern(){
    var i;
    for (i = 0; i < pattern.length; i++) 
    {
        pattern[i] = Math.floor(Math.random() * 7);        
    }
}

function startGame(){
    //initialize game variables
    generatePattern();
    progress = 0;
    gamePlaying = true;
    
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

////////////////////////////////////////////////////////////////////////////
// Sound Synthesis functions
////////////////////////////////////////////////////////////////////////////

const freqMap = {
  1: 331.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 356,
  6: 401.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

////////////////////////////////////////////////////////////////////////////
// Button functionality
////////////////////////////////////////////////////////////////////////////
function lightButton(btn){
  document.getElementById("key"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("key"+btn).classList.remove("lit")
}

////////////////////////////////////////////////////////////////////////////
// Playing clues
////////////////////////////////////////////////////////////////////////////

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
    guessCounter = 0;
    let delay = nextClueWaitTime; //set delay to initial wait time
    for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}


////////////////////////////////////////////////////////////////////////////
// WIN OR LOSE
////////////////////////////////////////////////////////////////////////////

function loseGame(){
    stopGame();
    var gameBtn = document.getElementById("startBtn").innerHTML;
    if(gameBtn.match("Start")){
        alert("Game Over. You lost.");
    }
    else{
        alert("Juego terminado. Perdiste.");
    }
}

function winGame(){
    chancesLeft = 3;
    stopGame();
    var gameBtn = document.getElementById("startBtn").innerHTML;
    if(gameBtn.match("Start")){
        alert("Game Over. You won!");
    }
    else{
        alert("Juego terminado. ¡Ganaste!");
    }
}


////////////////////////////////////////////////////////////////////////////
// WIN OR LOSE
////////////////////////////////////////////////////////////////////////////
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
    
  if(btn == pattern[guessCounter])
  {
      if(guessCounter != progress){
         guessCounter++;
      }
      else if(guessCounter == progress){
          if(progress == ((pattern.length)-1)){
            winGame();
          }
          else{
              progress++;
              playClueSequence();
          }
      }
  }
  else if(btn != pattern[progress]){
      if(chancesLeft != 0){
          chancesLeft--;
          playClueSequence();
      }
      else if(chancesLeft == 0){
          loseGame();
      }
  }
}