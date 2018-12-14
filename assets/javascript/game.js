var player  = {
name: "",
health: 0,
attackPower: 0,
defensePower: 0

}

var enemy  = {
name:"",
health:"",
attackPower:"",
defensePower:""

}


var boba  = {
name: "Boba Fett",
health: 150,
attackPower: 60,
defensePower:40

}

var vader = {
name: "Darth Vader",
health: 200,
attackPower: 90,
defensePower: 65
    
    }

var darthMaul  = {
name: "Darth Maul",
health: 170,
attackPower: 75,
defensePower:50

}

var genGrevious  = {
name: "General Grevious",
health: 185,
attackPower: 75,
defensePower: 55

}

var luke  = {
name: "Luke Skywalker",
health: 200,
attackPower: 85,
defensePower: 60

}

var chewie  = {
name: "Chewbacca",
health: 190,
attackPower: 55,
defensePower: 60

}

var obi  = {
name: "Obi-Wan",
health: 185,
attackPower: 75,
defensePower: 75

}

var lando  = {
name: "Lando",
health: 150,
attackPower: 70,
defensePower:40
    
    }
    




var selectUser = $(".btn").click(function(event){
    player.name = event.name;
    player.health = event.health;
    player.attackPower = event.attackPower;
    player.defensePower = event.defensePower;
    
})
