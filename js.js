const clickAudio=new Audio("audios/expSuck.ogg");
clickAudio.volume=0.4;
function playSound(){
    clickAudio.currentTime=0;
    clickAudio.play();
}
const creeperSay=new Audio("audios/Creeper_say1.ogg");
creeperSay.volume=0.4;
function playSound1(){
    creeperSay.currentTime=0;
    creeperSay.play();
}
const creeperBoom=new Audio("audios/creeperBoom.ogg");
function playSound2(){
    creeperBoom.currentTime=0;
    creeperBoom.play();
}