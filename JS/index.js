
function launch (){
    
var randomNumber = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;


var image1 = "images/diceimg/dice" + randomNumber + ".png";
var image2 = "images/diceimg/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", image1);

document.querySelector(".img2").setAttribute("src", image2);

if (image1>image2) {

    document.querySelectorAll("h2")[2].innerHTML = "Player 1 Wins";
    
} else if (image2>image1){

    document.querySelectorAll("h2")[2].innerHTML = "Player 2 Wins";
    
} else {

    document.querySelectorAll("h2")[2].innerHTML = " Draw";
}


}

function bmiCalc(weight,height){
    var weight = document.querySelectorAll("Input")[0].value;
    var height = document.querySelectorAll("Input")[1].value;

    var bmi = Math.round(weight/Math.pow(height, 2));

    var resultBmi = document.getElementById("results").innerHTML = "Your BMI is equal to : " + bmi;

    return bmi;

}
