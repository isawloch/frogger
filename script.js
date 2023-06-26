

let uniqueId;
let uniqueLane;
let lanePos = 125;
let yellowLanePos = 50;

//frog variables
let xpos= 450;
let ypos= 450;

//road borders
let roadBorderLeft = -9;
let roadBorderRight = 875;
let roadBorderTop = 0;
let roadBorderBottom = 430;

//score variables
let score = 0;
window.addEventListener('keydown', checkKey);
console.log("event listener set");

//car variables 
let maxSpeed = 100; //px
let currSpeed1;
let currSpeed2;
let currSpeed3;
let x1 = 0;
let x2 = 0;
let x3 = 0;
let newCar1;
let newCar2;
let newCar3;
let uniqueID1;
let uniqueID2;
let uniqueID3;
let ctr = 0;

function startCarsLane1(){
    ctr++;
    currSpeed1 = Math.random() * maxSpeed;
    x1 += currSpeed1;
    uniqueID1 = 'car'+ctr;
    newCar1 = "<img src='img/car.png' class='car1' id=" + uniqueID1 + "></img>";
    document.getElementById("game-screen").innerHTML += newCar1;

}

function startCarsLane2(){
    ctr++;
    currSpeed2 = Math.random() * maxSpeed;
    x2 += currSpeed2;
    uniqueID2 = 'car'+ctr;
    newCar2 = "<img src='img/car.png' class='car2' id=" + uniqueID2 + "></img>";
    document.getElementById("game-screen").innerHTML += newCar2;

}

function startCarsLane3(){
    ctr++;
    currSpeed3 = Math.random() * maxSpeed;
    x3 += currSpeed3;
    uniqueID3 = 'car'+ctr;
    newCar3 = "<img src='img/car.png' class='car3' id=" + uniqueID3 + "></img>";
    document.getElementById("game-screen").innerHTML += newCar3;
}


document.onreadystatechange = () => {
    if(document.readyState == "complete"){
        document.getElementById("scoreNum").innerHTML = score;
        for(var j = 0; j < 3; ++j){
            let pos = 0;
            for(var i = 0; i < 15; ++i){
                console.log("loop started");
                uniqueId = 'block'+j+i;
                let yellowBlock = "<div class='yellow-markers' id=" + uniqueId + "></div>";
                document.getElementById("road").innerHTML += yellowBlock;
                document.getElementById(uniqueId).style.position="absolute";
                document.getElementById(uniqueId).style.left=pos+"px";
                document.getElementById(uniqueId).style.top=yellowLanePos+"px";
                pos += 64;
            }
            uniqueLane = "lane"+j;
            let laneMarker = "<div class='lane-marker' id=" + uniqueLane + "></div>";
            
            if(j != 2){
                document.getElementById("road").innerHTML += laneMarker;
                document.getElementById(uniqueLane).style.position="absolute";
                document.getElementById(uniqueLane).style.top=lanePos+"px";
            }
            
            lanePos += 127;
            yellowLanePos += 125;

        }

        document.getElementById("startGame").addEventListener('click', startGame);
    }

     
}

function throwCoins(){
    let coinId;
    let coinX;
    let coinY;
    let newCoin;
    for(var coin = 0; coin < 10; ++coin){
        coinId = 'coin'+coin;
        newCoin = "<img id=" + coinId + " class='coin' src='img/coin.PNG'></img>";
        document.getElementById("game-screen").innerHTML += newCoin;
        document.getElementById(coinId).style.position="absolute";
        coinX =  Math.ceil(Math.random() * roadBorderRight);
        coinY = Math.ceil(Math.random() * roadBorderBottom);
        console.log("coin pos:", coinX, coinY);
        document.getElementById(coinId).style.left=coinX+"px";
        document.getElementById(coinId).style.top=coinY+"px";
    }
}

function startGame(e) {
    console.log("game started!");
    e.preventDefault();
    //pseudo-randomly throw items
    setTimeout(throwCoins, 2000);
    setTimeout(startCarsLane1, 2000);
    setTimeout(startCarsLane2, 2000);
    setTimeout(startCarsLane3, 2000);
    //incrementing score
}

function checkKey(e) {
    console.log("checkKey called")

    if (e.keyCode == '38') {
        moveFroggyUp();
    }
    else if (e.keyCode == '40') {
        moveFroggyDown();
    }
    else if (e.keyCode == '37') {
        moveFroggyLeft();
    }
    else if (e.keyCode == '39') {
       moveFroggyRight();
    }

}

function moveFroggyLeft(){
    console.log("left called");
    if(xpos - 10 >= roadBorderLeft ){
        xpos -= 10;
        document.getElementById("frog").style.left=xpos+"px";
    }
    checkCollision();
    return;
}

function moveFroggyRight(){
    console.log("right called");
    if(xpos - 10 <= roadBorderRight ){
        xpos += 10;
        document.getElementById("frog").style.left=xpos+"px";
    }
    checkCollision();
    return;
}

function moveFroggyUp(){
    console.log("up called");
    if(ypos - 10 >= roadBorderTop ){
        ypos -= 10;
        document.getElementById("frog").style.top=ypos+"px";
    }
    checkCollision();
    return;
}

function moveFroggyDown(){
    console.log("down called");
    if(ypos + 10 <= roadBorderBottom ){
        ypos += 10;
        document.getElementById("frog").style.top=ypos+"px";
    }
    checkCollision();
    return;
}

let currCoinID;
let currentFrogPosX;
let currentFrogPosY;
let coinPosX;
let coinPosY;
let coins;


function checkCollision() {
    console.log("checkCollision called");
    currentFrogPosX = document.getElementById("frog").style.left; 
    if(currentFrogPosX.length == 5){
        currentFrogPosX = Number(currentFrogPosX.substring(0,3));
        console.log(currentFrogPosX);
    }
    else if(currentFrogPosX.length == 4) {
        currentFrogPosX = Number(currentFrogPosX.substring(0,2));
    }

    else {
        currentFrogPosX = Number(currentFrogPosX.substring(0,1));
    }
    currentFrogPosY = document.getElementById("frog").style.top; 

    if(currentFrogPosY.length == 5){
        currentFrogPosY = Number(currentFrogPosY.substring(0,3));
    }
    
    else if(currentFrogPosY.length == 4){
        currentFrogPosY = Number(currentFrogPosY.substring(0,2));
    }

    else {
        currentFrogPosY = Number(currentFrogPosY.substring(0,1));
    }
    
    // console.log(document.getElementById("frog").style.left);
    
    // console.log("frog pos:", currentFrogPosX, currentFrogPosY);

    // console.log(document.getElementById("frog").style.top);

    coins = document.querySelectorAll(".coin");

    coins.forEach((currCoin) => {
        // currCoinID = 'coin'+k;
        // console.log(currCoin);
        coinPosX = currCoin.style.left;
        if(coinPosX.length == 5){
            coinPosX = Number(coinPosX.substring(0,3));
        }
        else if(coinPosX.length == 4) {
            coinPosX = Number(coinPosX.substring(0,2));
        }

        else {
            coinPosX = Number(coinPosX.substring(0,1));
        }

        coinPosY = currCoin.style.top;
        if(coinPosY.length == 5){
            coinPosY = Number(coinPosY.substring(0,3));
        }
        
        else if(coinPosY.length == 4) {
            coinPosY = Number(coinPosY.substring(0,2));
        }

        else {
            coinPosY = Number(coinPosY.substring(0,1));
        }
        
        console.log("frog position: ", currentFrogPosX, currentFrogPosY);
        console.log(currCoin);
        if(Math.abs(currentFrogPosX - coinPosX) <= 25 ){
            if((Math.abs(currentFrogPosY - coinPosY) <= 25)){
                score++;
                console.log("collision!");
                updateScore();
                console.log("current score: ", score);
                currCoin.remove();
                console.log("coin deleted")
            }
            
        }
    })
        
}

function updateScore() {
    document.getElementById("scoreNum").innerHTML = score;
}
