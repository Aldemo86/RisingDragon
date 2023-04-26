var gameData = {
    rank: 1,
    material: "Stone",
    stamina: 1,
    body: 1,
    sea: 1,
    dantian: 1,
    bodyProgress: 0,
    seaProgress: 0,
    dantianProgress: 0,
    bodyCost: 10,
    seaCost: 10,
    dantianCost: 10,
    merits: 0
}

var materialRank = {
    stone: 0,
    copper: 9,
    iron: 18
}



setInterval(mainLoop, 1000);

function mainLoop(){
    staminaAumento();
}

function staminaAumento() {
        
        gameData.stamina ++;
        document.getElementById("staminaCounter").innerHTML = gameData.stamina;
    
}

function actualizarRango(){
    if((gameData.body+gameData.sea+gameData.dantian) % 3 == 0){
        if(gameData.material == "Iron" && gameData.rank == 9){}

        else if(gameData.rank == 9){
            if(gameData.material == "Stone"){
                gameData.material = "Copper"
            } else if(gameData.material == "Copper"){
                gameData.material = "Iron"
            }
            gameData.rank = 1
        }else{gameData.rank++}

        
    
        document.getElementById("discipleRank").innerHTML = gameData.material + " " + gameData.rank
    }
}

function bodyProgreso(){
    if(gameData.stamina >= gameData.bodyCost){
        gameData.stamina -= gameData.bodyCost
        if(gameData.bodyProgress+1 == 10){
            gameData.body += 1
            gameData.bodyProgress = 0
            gameData.bodyCost *= 2
            actualizarRango();
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
            actualizarRango();
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
            actualizarRango();
        } else{gameData.dantianProgress += 1}
        document.getElementById("dantian").innerHTML = "Dantian: " + gameData.dantian;
        document.getElementById("dantianUpgrade").innerHTML = "Progress: "+gameData.dantianProgress+"/"+10+", Cost: "+gameData.dantianCost;
        document.getElementById("staminaCounter").innerHTML = gameData.stamina;

    }
}

