$(document).ready(function(){
var music = new Audio ("band.mp3")
music.loop = true;
music.play()
$("#attack").hide()
$("#fight-stats").hide()
var player  = {
name: "",
id: "",
health: 0,
attackPower: 0,
defensePower: 0

}

var enemy  = {
name:"",
id: "",
health:"",
attackPower:"",
defensePower:"",
}


var boba  = {
name: "Boba Fett",
id: "boba",
health: 150,
attackPower: 60,
defensePower:40

}

var vader = {
name: "Darth Vader",
id: "vader",
health: 200,
attackPower: 90,
defensePower: 65
    
    }

var darthMaul  = {
name: "Darth Maul",
id: "maul",
health: 170,
attackPower: 75,
defensePower:50

}

var genGrevious  = {
name: "General Grevious",
id: "grevious",
health: 185,
attackPower: 75,
defensePower: 55

}

var luke  = {
name: "Luke Skywalker",
id: "luke",
health: 200,
attackPower: 85,
defensePower: 60

}

var chewie  = {
name: "Chewbacca",
id: "chewie",
health: 190,
attackPower: 55,
defensePower: 60

}

var obi  = {
name: "Obi-Wan",
id: "obi",
health: 185,
attackPower: 75,
defensePower: 75

}

var lando  = {
name: "Lando",
id: "lando",
health: 150,
attackPower: 70,
defensePower:40
    
    }

var characterSelected = false;
var enemySelected = false;
var enemyBeaten = false;    


var functionShow = function(){if (enemySelected === true) {
    $("#attack").show();
    $(".btn-primary").hide();
}
}
var enemySelect  = function(){
    
    $(".boba-btn").click(function(event){
        var newEnemy = event.currentTarget.id
        console.log(newEnemy)
        enemyConverter(boba);
        $(".vader-card,.maul-card,.grevious-card").hide();
        enemySelected = true;
        console.log(enemySelected)
        $("#main-title").html("<h2>Now, time to fight</h2>");
        functionShow()
        nowFighting();
        console.log("Enemy: " + enemy.name)
    })
    $(".vader-btn").click(function(event){
        enemyConverter(vader);
        $(".boba-card,.maul-card,.grevious-card").hide();
        enemySelected = true;
        console.log(enemySelected)
        $("#main-title").html("<h2>Now, time to fight</h2>");
        functionShow()
        nowFighting();
    })
    $(".maul-btn").click(function(event){
        enemyConverter(darthMaul);
        $(".vader-card,.boba-card,.grevious-card").hide();
        enemySelected = true;
        console.log(enemySelected)
        $("#main-title").html("<h2>Now, time to fight</h2>");
        functionShow()
        nowFighting();
    })
    $(".grevious-btn").click(function(event){
        enemyConverter(genGrevious);
        $(".vader-card,.maul-card,.boba-card").hide();
        enemySelected = true;
        console.log(enemySelected)
        $("#main-title").html("<h2>Now, time to fight</h2>");
        functionShow()
        nowFighting();

    })
    $(".luke-btn").click(function(event){
        enemyConverter(luke);
        $(".lando-card,.obi-card,.chewie-card").hide();        
        enemySelected = true;
        console.log(enemySelected)
        $("#main-title").html("<h2>Now, time to fight</h2>");
        functionShow()
        nowFighting();
    })
    $(".chewie-btn").click(function(event){
        enemyConverter(chewie);
        $(".lando-card,.obi-card,.luke-card").hide();
        enemySelected = true;
        console.log(enemySelected)
        $("#main-title").html("<h2>Now, time to fight</h2>");
        functionShow()
        nowFighting();
    })
    $(".lando-btn").click(function(event){
        enemyConverter(lando);
        $(".luke-card,.obi-card,.chewie-card").hide();
        enemySelected = true;
        console.log(enemySelected)
        $("#main-title").html("<h2>Now, time to fight</h2>");
        functionShow()
        nowFighting();
    })
    $(".obi-btn").click(function(event){
        enemyConverter(obi);
        $(".lando-card,.luke-card,.chewie-card").hide();
        enemySelected = true;
        console.log(enemySelected)
        $("#main-title").html("<h2>Now, time to fight</h2>");
        functionShow()
        nowFighting();
    })

}

function playerConverter(character){
    player.name = character.name;
    player.id = character.id;
    player.health = character.health;
    player.attackPower = character.attackPower;
    player.defensePower = character.defensePower;
console.log("Player Chosen: " + player.name);
}

function enemyConverter(enemyCharacter){
enemy.name = enemyCharacter.name;
enemy.health = enemyCharacter.health;
enemy.attackPower = enemyCharacter.attackPower;
enemy.defensePower = enemyCharacter.defensePower;
console.log("Enemy Chosen: " + enemy.name);
}

var setPlayerStats = function(){
    $("." + player.id + "-hp").html("Health: " + player.health);
    $("." + player.id + "-ap").html("Attack: " + player.attackPower);
    $("." + player.id + "-dp").html("Defense: " + player.defensePower);
    $("." + enemy.id + "-hp").html("Health: " + enemy.health);
    $("." + enemy.id + "-ap").html("Attack: " + enemy.attackPower);
    $("." + enemy.id + "-dp").html("Defense: " + enemy.defensePower);

}

var checking = function(){
    if (characterSelected === true) {
        enemySelect()
}}



$(".boba-btn").click(function(event){
    if (characterSelected === false){
    playerConverter(boba);
    $(".vader-card,.maul-card,.grevious-card").hide();
    characterSelected = true;
    console.log("Selected character?:" + characterSelected)
    $("#main-title").html("<h2>Now, choose your opponent</h2>")}
    // enemySelect()
    else {
        enemySelect()
    }

})

$(".vader-btn").click(function(event){
    if (characterSelected === false){
    playerConverter(vader);
    $(".boba-card,.maul-card,.grevious-card").hide();
    characterSelected = true;
    $("#main-title").html("<h2>Now, choose your opponent</h2>")}
    // enemySelect()
    else {
        enemySelect()
    }
})

$(".maul-btn").click(function(event){
    if (characterSelected === false){
    playerConverter(darthMaul);
    $(".vader-card,.boba-card,.grevious-card").hide();
    characterSelected = true;
    $("#main-title").html("<h2>Now, choose your opponent</h2>")}
    // enemySelect()
   else {
       enemySelect()
   }
})

$(".grevious-btn").click(function(event){
    if (characterSelected === false){
    playerConverter(genGrevious);
    $(".vader-card,.maul-card,.boba-card").hide();
    characterSelected = true;
    $("#main-title").html("<h2>Now, choose your opponent</h2>")}
    // enemySelect()
    else {
        enemySelect()
    }
})

$(".luke-btn").click(function(event){
    if (characterSelected === false){    
    playerConverter(luke);
    $(".lando-card,.obi-card,.chewie-card").hide();
    characterSelected = true;
    $("#main-title").html("<h2>Now, choose your opponent</h2>")}
    // enemySelect()
    else {
        enemySelect()
    }
})

$(".chewie-btn").click(function(event){
    if (characterSelected === false){
    playerConverter(chewie);
    $(".lando-card,.obi-card,.luke-card").hide();
    characterSelected = true;
    $("#main-title").html("<h2>Now, choose your opponent</h2>")}
    // enemySelect()
    else {
        enemySelect()
    }
})

$(".lando-btn").click(function(event){
    if (characterSelected === false){
    playerConverter(lando);
    $(".luke-card,.obi-card,.chewie-card").hide();
    characterSelected = true;
    $("#main-title").html("<h2>Now, choose your opponent</h2>")}
    // enemySelect()
    else {
        enemySelect()
    }
})

$(".obi-btn").click(function(event){
    if (characterSelected === false){
    playerConverter(obi);
    $(".lando-card,.luke-card,.chewie-card").hide();
    characterSelected = true;
    console.log(characterSelected)
    $("#main-title").html("<h2>Now, choose your opponent</h2>")}
    // enemySelect()
    else {
        enemySelect()
    }
})
 





var nowFighting  = function(){
    if (enemySelected === true) {
        // when you click on attack button
        $("#fight-stats").show()
        $("#attack").on("click", function(){
            enemy.health = enemy.health - player.attackPower - enemy.defensePower / 4;
            player.health = player.health - enemy.attackPower - player.defensePower / 4 ; 
            setPlayerStats();
            console.log(player.id)
            console.log("enemy health " + enemy.health);
            console.log("player health: " + player.health)
            console.log(enemy)
            $("#user-stats").html("Name: " + player.name + "<br>" + "Health: " + player.health + "<br>" + "Attack Power: " +   player.attackPower + "<br>" + "Defense Power: " + player.defensePower)
            $("#cpu-stats").html("Name: " + enemy.name+ "<br>"+ "Health: " + enemy.health + "<br>" + "Attack Power: "  +  enemy.attackPower + "<br>" +"Defense Power: " + enemy.defensePower)
            if (enemy.health <= 0 && player.health > 0){
                // var again = confirm("Would you like to try again")
                // if (again = true){
                //     location.reload();
                // } else {
                //     $("body").hide()
                enemySelected = false;
                player.health = player.health + 200;
                player.attackPower = player.attackPower * 1.15;
                $(".card").show()
                $(".btn").show()
                $("#main-title").html("<h2> You won! Choose your next victim </h2>")
                enemySelect()
                enemyConverter()
                
                
            }
            if (player.health <=0 && enemy.health >0){
                var again = confirm("You lost, would you like to try again")
                if (again = true){
                    location.reload();
                } else {
                    $("body").hide()
                }
            }
            if (player.health && enemy.health <=0){
                var again = confirm("You both died, would you like to try again")
                if (again = true){
                    location.reload();
                } else {
                    $("body").hide()
                }
            }
        })
        // player.health = enemy.attackPower 
        // enemy.health = player.attackPower - player.defensePower
    }}

})