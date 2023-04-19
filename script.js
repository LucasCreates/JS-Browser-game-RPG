let player_location;
console.log(player_location);

let player_health = 100;;
let player_mana = 100;
let enemy_health = 100;

let player = {
	level: 1,
	health: 100,
	mana: 100,
	experience: 0,
	inventory: ["Rusty Sword", ["Potion", 2], "Gold Ring"],
	Coin: 150
}


function changeImage(){
	let img = document.querySelector(".title-screen");
	document.querySelector(".btn").style.display="none";
	document.querySelector(".game-btn").style.display="none";
	document.querySelector(".map-container").style.display="none";
	document.querySelector("p").style.display="inline";
	
	img.src="images2/back3.jpg"
	return false;
}

function travelMap(){
	let rPGMap = document.querySelector(".title-screen");
	document.querySelector(".travel").style.display="none"
	
	document.querySelector(".map-container").style.display="flex";
	document.querySelector(".game-btn").style.posistion="relavtive";
	document.querySelector(".game-btn").style.bottom="10%";
	document.querySelector(".btn").style.display="none";
	document.querySelector(".leave").style.display="none";
	rPGMap.src="images2/worldmap.jpg";
	player_location = "worldmap";
	return false;
}


function moveToTown(){
	let move = document.querySelector(".title-screen");
	document.querySelector(".map-container").style.display="none";
	document.querySelector(".town-container").style.display="flex";
	move.src="images2/town2.jpg";
	player_location = "town";
	return false;
}

function moveToTavern(){
	player_location = "tavern";
	moveLocationTownDisplay();
	return false;
}

function moveToMagic(){
	player_location = "magic shop";
	moveLocationTownDisplay();
	return false;
}
function moveToGeneralStore(){
	player_location = "general store";
	moveLocationTownDisplay();
	return false
}
function moveToTraining(){
	player_location = "training";
	moveLocationTownDisplay();
	return false
}
function moveToTemple() {
	player_location = "temple"
	moveLocationTownDisplay();
	return false;
}
function moveToHome() {
	player_location = "home"
	moveLocationTownDisplay();
	return false;
}
function moveToWorld() {
	player_location = "worldmap"
	moveLocationTownDisplay();
	return false;
}

// This function changes the icon display when enterting/exiting stores. 
function exitLocation(){
	if (player_location === "tavern") {
		returnToTown();
	}
	else if (player_location === "magic shop"){
		returnToTown();
	}
	else if (player_location === "general store"){
		returnToTown();
	}
	else if (player_location === "training"){
		returnToTown();
	}
	else if (player_location === "temple"){
		returnToTown();
	}
	else if (player_location === "home"){
		returnToTown();
	}
	return false;
}

// This function is when player is in main town.
function returnToTown(){
	let exit = document.querySelector(".title-screen");
	document.querySelector(".town-container").style.display="flex";
	document.querySelector(".leave").style.display="none"
	player_location = "town";
	exit.src="images2/town2.jpg";
}

// This function changes the scene within town depending on which store the player walked into.
function moveLocationTownDisplay(){
	let move = document.querySelector(".title-screen");
	document.querySelector(".map-container").style.display="none";
	document.querySelector(".town-container").style.display="none";
	document.querySelector(".leave").style.display="flex";
	if (player_location === "tavern") {
		move.src="images2/tavern.png";
	}
	else if (player_location === "magic shop"){
		move.src="images2/magicshop.jpg";
	}
	else if (player_location === "general store"){
		move.src="images2/general.jpg";
	}
	else if (player_location === "training"){
		move.src="images2/town3.png";
		document.querySelector(".start-battle").style.display="flex";
	}
	else if(player_location === "temple"){
		move.src="images2/temple.jpg";
	}
	else if(player_location === "home"){
		move.src="images2/home.jpg";

	}
	else if(player_location === "worldmap"){
		move.src="images2/worldmap.jpg";
		document.querySelector(".map-container").style.display="flex";
		document.querySelector(".town-container").style.display="none";
		document.querySelector(".leave").style.display="none";
	}
	else if(player_location == "town"){
		document.querySelector(".leave").style.display="none";
	}
	
	return move
}


function battleStart(){
	document.querySelector(".inventory").style.display="none";
	document.querySelector(".character").style.display="none";
	document.querySelector(".leave").style.display="none";
	document.querySelector(".start-battle").style.display="none";
	document.querySelector(".attack").style.display="flex";
	document.querySelector(".magic").style.display="flex";
	document.querySelector(".item").style.display="flex";
	document.querySelector(".run").style.display="flex";
	document.querySelector(".game-btn").style.display="flex";
	document.querySelector(".game-btn").style.justifyContent="center";
	playerHealth();
	enemyHealth(enemy_health);
	
	
}

function playerHealth(playerHP){
	let health = document.querySelector(".player-health");
    health.textContent = player_health;
	return player_health;
}

function enemyHealth(enemyHP){
	let health = document.querySelector(".enemy-health");
    health.textContent = enemy_health;
	return enemy_health;
}

function attackSword(attack){
	const damageTaken = document.querySelector(".enemy-health");
	attack = Math.floor(Math.random() * 10) + 1;
	const maxDamage = parseInt(damageTaken.innerText) - attack;
	console.log(maxDamage + attack);
	console.log(attack);
	damageTaken.innerText = maxDamage;
}

function enemyDamage(){

}

function test(count){
	count = Math.floor(Math.random() * 100)
	console.log(count)
	

}