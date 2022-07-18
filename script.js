const monsters = [{
    name: "Zombie",
    health: 6,
    attack: 2,
    armor: 2
},
{
    name: "Skeleton",
    health: 9,
    attack: 3,
    armor: 1
}]

const user = {
    health: 10,
    attack: 4,
    armor: 2,
    maxDamageBonus: 2
}

var currentHP;
var randomNumber;
var userBaseAttack = 2;
var currentUserAttackDamage;
var damageDealt;
var currentMonster;

function getRandomNum(maximum){
    randomNumber = Math.floor(Math.random() * maximum);
}

function startBattle(){
    getRandomNum(monsters.length);
    document.getElementById('attackResult').innerHTML = "";
    document.getElementById('battleResult').innerHTML = "";
    document.getElementById('nextMonster').style.display = 'none';
    //document.getElementById('attackButton').style.diplay = 'block';
    document.getElementById('attackButtonBreak').style.display = 'block';
    document.getElementById('monsterName').innerHTML = monsters[randomNumber].name;
    document.getElementById('monsterHealth').innerHTML = monsters[randomNumber].health + "/" + monsters[randomNumber].health;
    currentMonster = randomNumber;
    currentHP = monsters[randomNumber].health;
}

function userAttack() {
    getRandomNum(user.maxDamageBonus); //randomNumber now has the damage bonus for attack
    currentUserAttackDamage = user.attack + randomNumber;
    damageDealt = currentUserAttackDamage - monsters[currentMonster].armor;
    currentHP = currentHP - damageDealt;
    document.getElementById('attackResult').innerHTML = "You dealt " + damageDealt + " damage to the monster."
    if (currentHP <= 0){
        document.getElementById('monsterHealth').innerHTML = "0/" + monsters[currentMonster].health;
        document.getElementById('battleResult').innerHTML = "You have defeated the " + monsters[currentMonster].name + ".";
        document.getElementById('nextMonster').style.display = 'block';
        document.getElementById('attackButton').style.display = 'none';
        document.getElementById('attackButtonBreak').style.display = 'none';
    }
    else {
        document.getElementById('monsterHealth').innerHTML = currentHP + "/" + monsters[currentMonster].health;
    }
}

function monsterAttack(){

}

window.onload = function() {
    startBattle();
}