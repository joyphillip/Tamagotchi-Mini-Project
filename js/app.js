// console.log("My Tamagotchi-Mini")
// Create an Object or Class 
class Tamagotchi {
    constructor (name, hunger = 1, sleepiness = 1, boredom = 1, age = 0) {
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }
    // created methods 
    feed(){
        console.log('YUMMMMM');
        if (this.hunger >= 10) {
            stopStatsInterval()
            alert(`${this.name} has died of hunger. GAME OVER!`)
        } else {
            this.hunger +=1
        }
    }
    sleep(){
        console.log('zzzZZZ');
        if (this.sleepiness >= 10) {
            stopStatsInterval()
            alert(`${this.name} has dies of hunger. GAME OVER!`)
        } else {
            this.hunger += 1
        }
    }
    play(){
        console.log('Yayyy');
        if( this.boredom >= 10){
            stopStatsInterval()
            alert(`${this.name} had died of boredom. GAME OVER!`)
        } else {
            this.boredom += 1
        }
    }
    ageUp(){
        console.log('Happy Birthday')
        this.age += 1
        if( this.age === 7) {
            alert(`Nice job! ${this.name} has gotten older! `)

        }
    }
}
// Instantiate your Tamagotchi (If you created a class)
const pet = new Tamagotchi()

//create function to name pet
// added event listener to start game
document.querySelector(".button1").addEventListener('click', function() {
    pet.name = prompt("Give your pet a name!")
    // console.log(pet.name)
    document.getElementById('name').innerText = pet.name
})
//create variables outside of functions to set start and stop of stats
let hungerStat;
let sleepStat;
let playStat;
let ageStat;

//Create function to set and change intervals
function startStatsInterval() {
 hungerStat = setInterval(pet.feed, 2000);
 sleepStat = setInterval(pet.sleep, 1000);
 playStat = setInterval(pet.play, 3000);
 ageStat = setInterval(pet.ageUp, 1500);
}
startStatsInterval();

//Create function to stop intervals
function stopStatsInterval() {
    clearInterval(hungerStat)
    clearInterval(sleepStat)
    clearInterval(playStat)
    clearInterval(ageStat)
}
clearInterval();

//Buttons
//Feed Button
document.querySelector('.button3').addEventListener('click', function(){
    pet.hunger -= 1;
    document.querySelector('#hunger').innerText = `Hunger (1/10): ${pet.hunger}`
})

//Play Button
document.querySelector('.button4').addEventListener('click', function(){
    pet.boredom -= 1;
    document.querySelector('#bored').innerText = `Boredom (1/10): ${pet.boredom}`
})

//Light Button
document.querySelector('.button2').addEventListener('click', function(){
    pet.sleepiness -= 1;
    document.querySelector('#sleepy').innerText = `Sleepiness (1/10): ${pet.sleepiness}`
})

//Call all methods
pet.feed();
pet.sleep();
pet.play();
pet.ageUp();
