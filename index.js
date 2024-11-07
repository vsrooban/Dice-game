var randomNumber1=Math.floor(Math.random()*6+1);

var diceeImage1=`./dice${randomNumber1}.png`;
document.querySelector(".img1").setAttribute("src",diceeImage1);



var randomNumber2=Math.floor(Math.random()*6+1);

var diceeImage2=`./dice${randomNumber2}.png`;
document.querySelector(".img2").setAttribute("src",diceeImage2);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 won";
}
else if (randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 won";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}