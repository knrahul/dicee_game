document.addEventListener("DOMContentLoaded",function(){
    alert("Click on OK to play the game.")
    var randomNumber1=Math.floor(Math.random()*6)+1;
    var imgSource="images/dice"+randomNumber1+".png";
    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",imgSource);
    var randomNumber2=Math.floor(Math.random()*6)+1;
    var imgSource="images/dice"+randomNumber2+".png";
    var image1=document.querySelectorAll("img")[1];
    image1.setAttribute("src",imgSource);
    if(randomNumber1===randomNumber2){
        document.querySelector("h1").innerHTML="Draw!";
    }
    else if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="Player 1 wins!";
        
    }
    else{
        document.querySelector("h1").innerHTML="Player 2 wins!";
    }
});
