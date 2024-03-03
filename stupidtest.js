const button1=document.querySelector('#button1');
const button2=document.querySelector("#button2");
const text= document.querySelector("#text");
const answers=["Yes, I am sure", "Well, actually..."];
const actions=[acceptTest, refuseTest];
        
button1.onclick = acceptTest;
button2.onclick = refuseTest;


function acceptTest(){
    button1.innerText= "Yes, I am sure";
    button2.innerText= "Well, actually";
    button1.onclick= acceptTestFinal;
    button2.onclick= refuseTest;
    text.innerText="Are you sure that you want to take a stupid test?";
}
function refuseTest(){
    button1.innerText="Restart";
    button2.innerText="Restart";
    button1.onclick= restart;
    button2.onclick= restart;
    text.innerText="Okay. You don't take the text. Do you want to restart the game?";
}
function acceptTestFinal(){
    //esconder botones
    let result = Math.floor(Math.random()*10);
    if (result >5){
        button1.innerText="Restart";
    button2.innerText="Restart";
        text.innerText="Congratulations, you got a "+ result+". You pass the test. Press any button to restart the game.";
    }
    else{
        button1.innerText="Try again";
        button2.innerText="Try again";
        text.innerText="Sorry, you got a "+result+". You have failed the test. Try again?";
    }
}
    
