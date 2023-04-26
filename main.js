var gameData = {
    stamina: 0,
    body: 1,
    sea: 1,
    dantian: 1,
    bodyProgress: 0,
    seaProgress: 0,
    dantianProgress: 0,
    bodyCost: 10,
    seaCost: 10,
    dantianCost: 10
}

setInterval(mainLoop, 1000);

function mainLoop(){
    staminaAumento();
}

function staminaAumento() {
    
        gameData.stamina++;
        document.getElementById("staminaCounter").innerHTML = gameData.stamina;
    
}

function bodyProgreso(){
    if(gameData.stamina >= gameData.bodyCost){
        gameData.stamina -= gameData.bodyCost
        if(gameData.bodyProgress+1 == 10){
            gameData.body += 1
            gameData.bodyProgress = 0
            gameData.bodyCost *= 2
        } else{gameData.bodyProgress += 1}
        document.getElementById("body").innerHTML = "Body: " + gameData.body;
        document.getElementById("bodyUpgrade").innerHTML = "Progress: "+gameData.bodyProgress+"/"+10+", Cost: "+gameData.bodyCost;
        document.getElementById("staminaCounter").innerHTML = gameData.stamina;

    }
}

function seaProgreso(){
    if(gameData.stamina >= gameData.seaCost){
        gameData.stamina -= gameData.seaCost
        if(gameData.seaProgress+1 > 10){
            gameData.sea += 1
            gameData.seaProgress = 0
            gameData.seaCost *= 2
        } else{gameData.seaProgress += 1}
        document.getElementById("sea").innerHTML = "Sea: " + gameData.sea;
        document.getElementById("seaUpgrade").innerHTML = "Progress: "+gameData.seaProgress+"/"+10+", Cost: "+gameData.seaCost;
        document.getElementById("staminaCounter").innerHTML = gameData.stamina;

    }
}

function dantianProgreso(){
    if(gameData.stamina >= gameData.dantianCost){
        gameData.stamina -= gameData.dantianCost
        if(gameData.dantianProgress+1 > 10){
            gameData.dantian += 1
            gameData.dantianProgress = 0
            gameData.dantianCost *= 2
        } else{gameData.dantianProgress += 1}
        document.getElementById("dantian").innerHTML = "Dantian: " + gameData.dantian;
        document.getElementById("dantianUpgrade").innerHTML = "Progress: "+gameData.dantianProgress+"/"+10+", Cost: "+gameData.dantianCost;
        document.getElementById("staminaCounter").innerHTML = gameData.stamina;

    }
}

