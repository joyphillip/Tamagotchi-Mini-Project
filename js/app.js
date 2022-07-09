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
        // console.log('YUMMMMM');
        // if (this.hunger >= 10) {
        //     stopStatsInterval()
        //     alert(`${this.name} has died of hunger. GAME OVER!`)
        // } else {
        //     this.hunger +=1
        // }
        this.hunger += 1
    }
    sleep(){
        // console.log('zzzZZZ');
        this.sleep += 1
        // if (this.sleepiness >= 10) {
        //     stopStatsInterval()
        //     alert(`${this.name} has dies of hunger. GAME OVER!`)
        // } else {
        //     this.sleep += 1
        // }
    }
    play(){
        // console.log('Yayyy');
        this.boredom += 1
        // if( this.boredom >= 10){
        //     stopStatsInterval()
        //     alert(`${this.name} had died of boredom. GAME OVER!`)
        // } else {
        //     this.boredom += 1
        // }
    }
    ageUp(){
        // console.log('Happy Birthday')
        this.age += 1
        }
    }

// Instantiate your Tamagotchi (If you created a class)
const pet = new Tamagotchi()

//create function to name pet
// added event listener to start game
document.querySelector(".button1").addEventListener('click', function() {
    alert('Welcome to the Tamagotchi game');
    alert('Care for your new pet by: Playing, Feeding, and making sure they get some  rest. Keep your pet alive by keeping stats under 10!')
    pet.name = prompt("Give your pet a name!")
    // console.log(pet.name)

    //Updates the text to the name user chooses
    document.getElementById('name').innerText = pet.name
    startStatsInterval();
})

// Increase your pet's age every x minutes
//Age
setInterval( function(){
    pet.age +=1
    document.getElementById('age').innerText = `Age: ${pet.age}`
}, 4000)
if( pet.age == 7) {
    clearInterval(pet.age)
    alert(`Nice job! ${pet.name} has gotten older! `)
}
// //create variables outside of functions to set start and stop of stats
// let hungerStat;
// let sleepStat;
// let playStat;
// let ageStat;

// //Create function to set and change intervals
// function startStatsInterval() {
//  hungerStat = setInterval(pet.feed, 1500);
//  sleepStat = setInterval(pet.sleep, 2000);
//  playStat = setInterval(pet.play, 2500);
//  ageStat = setInterval(pet.ageUp, 1500);
// }
// startStatsInterval();

// //Create function to stop intervals
// function stopStatsInterval() {
//     clearInterval(hungerStat)
//     clearInterval(sleepStat)
//     clearInterval(playStat)
//     clearInterval(ageStat)
// }
// stopStatsInterval();

//hunger
setInterval( function(){
    pet.hunger += 1;
    document.getElementById('hunger').innerText = `Hunger: ${pet.hunger}`
    if( pet.hunger >= 10){
        clearInterval( pet.hunger)
        alert(`${pet.name} has died of hunger. GAME OVER!`);
    } 
}, 4000);

//sleep
setInterval( function(){
    pet.sleepiness += 1;
    document.getElementById('sleepy').innerText = `Sleepiness: ${pet.sleepiness}`
    if( pet.sleepiness >= 10){
        clearInterval(pet.sleepiness)
        alert(`${pet.name} has died of lack of sleep. GAME OVER!`);
    } 
}, 4000);

//play
setInterval( function(){
    pet.boredom += 1;
    document.getElementById('bored').innerText = `Boredom: ${pet.boredom}`
    if( pet.boredom >= 10){
        clearInterval(pet.boredom)
        alert(`${pet.name} has died of boredom. GAME OVER!`);
    } 
}, 4000);

//Buttons
//Feed Button
document.querySelector('.button3').addEventListener('click', function(){
    pet.hunger -= 1;
    document.querySelector('#hunger').innerText = `Hunger : ${pet.hunger}`
})

//Play Button
document.querySelector('.button4').addEventListener('click', function(){
    pet.boredom -= 1;
    document.querySelector('#bored').innerText = `Boredom : ${pet.boredom}`
})

//Light Button
document.querySelector('.button2').addEventListener('click', function(){
    pet.sleepiness -= 1;
document.querySelector('#sleepy').innerText = `Sleepiness : ${pet.sleepiness}`;
document.getElementById("night-beach").src = "/Users/joy/Desktop/sei-cosmos/projects/Tamagotchi-Mini-Project/imgs/nightime beach.webp"
})

//Call all methods
pet.feed();
pet.sleep();
pet.play();
pet.ageUp();