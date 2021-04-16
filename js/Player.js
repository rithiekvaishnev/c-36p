class Player{
    constructor(){}

    update(name){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name : name
        }) 
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        }) 
    }

    getCount(){
        var ref = database.ref('playerCount');
        ref.on("value", function (data){
            playerCount = data.val();
        })
    }
}


/*
New functions:
update(name)
updateCount(count)


DB structure:
/
{
    gameState : 0,
    playerCount : 0,
    player1:{
        name: "A"
    }
    player2:{
        name: "B"
    }
    player3:{
        name: "C"
    }
    player4:{
        name: "D"
    }
}
*/