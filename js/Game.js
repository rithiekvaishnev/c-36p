class Game{
    constructor(){}

    getState(){
        var ref = database.ref('gameState');
        ref.on("value", function (data){
            gameState = data.val();
        })

    }

    update(state){
        database.ref('/').update({
            gameState : state
        })     
    }

    start(){
        if (gameState === 0){
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();
        }
    }
    
}

/*
gameState - 0(wait), 1(play), 2(end) 
start ()
play ()
end ()

DB structure:
/
{
    gameState : 0,
    playerCount : 0
}

read from db - .ref (), .on(), .val()
write to db - .ref(), .set()/.update()
*/