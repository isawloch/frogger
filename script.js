

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
let maxSpeed = 10; //px
let minSpeed = 10;
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
let separateID1;
let separateSpeed1;
let separateID2;
let separateSpeed2;
let separateID3;
let separateSpeed3;
let carPosX;
let carPosY;
let carPosLat;
let carPosLong;

let frogPosLat;
let frogPosLong;
let frog;

function getFrogPosX(frog){
    // console.log(frog);
    if(frog.style.left.length == 5){
        frogPosLat = frog.style.left.substring(0, 3);
    }
    else if(frog.style.left.length == 4){
        frogPosLat = frog.style.left.substring(0, 2);
    }
    else {
        frogPosLat = frog.style.left.substring(0, 1);
    }

    return Number(frogPosLat);
}

function getFrogPosY(frog){ 

    if(frog.style.top.length == 5){
        frogPosLong = frog.style.top.substring(0, 3);
    }
    else if(frog.style.top.length == 4){
        frogPosLong = frog.style.top.substring(0, 2);
    }
    else {
        frogPosLong = frog.style.top.substring(0, 1);
    }

    return Number(frogPosLong);
}

function updatePos(carID, curPos, speed, classLane){
    frog = document.getElementById("frog");
    setInterval(function() {
        if(document.getElementById(carID)){
            if(curPos >= (roadBorderRight - 25)){ 
                document.getElementById(carID).remove();
            }
            else {
                curPos += speed;
                document.getElementById(carID).style.left = Math.ceil(curPos)+'px';
                // console.log("current car position", Math.ceil(curPos), classLane);
                // console.log("current frog pos", currentFrogPosX, currentFrogPosY);
                console.log("frog pos", getFrogPosX(frog), getFrogPosY(frog));
                if(Math.abs(getFrogPosX(frog) - Math.ceil(curPos)) <= 10){
                    if(Math.abs(getFrogPosY(frog) - classLane) <= 10){
                        console.log("THERE HAS BEEN A FROGGY CAR CRASH!!!!!!!!!!!!!!!!!!!!")
                        gameOver();
                    }
                }
            }
        }
    }, 50);
    
}

function makeCars1(){
    ctr++;
    uniqueID1 = 'car'+ctr;
    newCar1 = "<img src='img/car.png' class='car1' id=" + uniqueID1 + "></img>";
    document.getElementById("game-screen").innerHTML += newCar1;
    document.getElementById(uniqueID1).style.position='absolute';
    document.getElementById(uniqueID1).style.left='0px';

    // console.log(document.getElementById(uniqueID1));

    currSpeed1 = (Math.random() * maxSpeed) + minSpeed;
    // console.log(newCar1);
    startCarsLane1(uniqueID1, currSpeed1);
}

function startCarsLane1(car, currSpeed){
    if(document.getElementById(car)){
        updatePos(car, x1, currSpeed, 100);
    }
}

function makeCars2(){
    ctr++;
    uniqueID2 = 'car'+ctr;
    newCar2 = "<img src='img/car.png' class='car2' id=" + uniqueID2 + "></img>";
    document.getElementById("game-screen").innerHTML += newCar2;
    document.getElementById(uniqueID2).style.position='absolute';
    document.getElementById(uniqueID2).style.left='0px';

    // console.log(document.getElementById(uniqueID2));

    currSpeed2 = (Math.random() * maxSpeed) + minSpeed;

    // console.log(newCar2);
    startCarsLane2(uniqueID2, currSpeed2);
}

function startCarsLane2(car, currSpeed){
    if(car){
        updatePos(car, x2, currSpeed, 220);
    }
}

function makeCars3(){
    ctr++;
    uniqueID3 = 'car'+ctr;
    newCar3 = "<img src='img/car.png' class='car3' id=" + uniqueID3 + "></img>";
    document.getElementById("game-screen").innerHTML += newCar3;
    document.getElementById(uniqueID3).style.position='absolute';
    document.getElementById(uniqueID3).style.left= '0px';

    // console.log(document.getElementById(uniqueID3));

    currSpeed3 = (Math.random() * maxSpeed) + minSpeed;

    // console.log(newCar3);
    startCarsLane3(uniqueID3, currSpeed3);
}

function startCarsLane3(car, currSpeed){
    if(car){
        updatePos(car, x3, currSpeed, 340);
    }
}



document.onreadystatechange = () => {
    if(document.readyState == "complete"){
        document.getElementById("scoreNum").innerHTML = score;
        for(var j = 0; j < 3; ++j){
            let pos = 0;
            for(var i = 0; i < 15; ++i){
                // console.log("loop started");
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
            currentFrogPosX = 450;
            currentFrogPosY = 430;
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
        // console.log("coin pos:", coinX, coinY);
        document.getElementById(coinId).style.left=coinX+"px";
        document.getElementById(coinId).style.top=coinY+"px";
    }
}

function startGame(e) {
    console.log("game started!");
    e.preventDefault();
    frog = document.getElementById("frog");
    currentFrogPosX = 450;
    currentFrogPosY = 430;
    //pseudo-randomly throw items
    setTimeout(throwCoins, 2000);
    setInterval(makeCars1, 2000);
    setInterval(makeCars2, 2500);
    setInterval(makeCars3, 2200);
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
    frog = document.getElementById("frog");
    console.log("left called");
    if(xpos - 10 >= roadBorderLeft ){
        xpos -= 10;
        document.getElementById("frog").style.left=Math.ceil(xpos)+"px";
    }
    checkCollision();
    frog = document.getElementById("frog")
    currentFrogPosX = getFrogPosX(frog);
    currentFrogPosY = getFrogPosY(frog);
    return;
}

function moveFroggyRight(){
    frog = document.getElementById("frog");
    console.log("right called");
    if(xpos - 10 <= roadBorderRight ){
        xpos += 10;
        document.getElementById("frog").style.left=Math.ceil(xpos)+"px";
    }
    checkCollision();
    frog = document.getElementById("frog")
    currentFrogPosX = getFrogPosX(frog);
    currentFrogPosY = getFrogPosY(frog);
    return;
}

function moveFroggyUp(){
    frog = document.getElementById("frog");
    console.log("up called");
    if(ypos - 10 >= roadBorderTop ){
        ypos -= 10;
        document.getElementById("frog").style.top=Math.ceil(ypos)+"px";
    }
    checkCollision();
    frog = document.getElementById("frog")
    currentFrogPosX = getFrogPosX(frog);
    currentFrogPosY = getFrogPosY(frog);
    return;
}

function moveFroggyDown(){
    frog = document.getElementById("frog");
    console.log("down called");
    if(ypos + 10 <= roadBorderBottom ){
        ypos += 10;
        document.getElementById("frog").style.top=Math.ceil(ypos)+"px";
    }
    checkCollision();
    frog = document.getElementById("frog")
    currentFrogPosX = getFrogPosX(frog);
    currentFrogPosY = getFrogPosY(frog);
    return;
}

let currCoinID;
let currentFrogPosX = 450;
let currentFrogPosY = 430;
let coinPosX;
let coinPosY;
let coins;


   
function checkCollision() {
    console.log("checkCollision called");
    frog = document.getElementById("frog")
    currentFrogPosX = getFrogPosX(frog);
    currentFrogPosY = getFrogPosY(frog);

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
        
        // console.log("frog position: ", currentFrogPosX, currentFrogPosY);
        // console.log(currCoin);
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

function gameOver() {
    alert("Game over! Refresh to try again :)")
}

