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
const pet = new Tamagotchi();

//create function to name pet
// added event listener to start game
document.querySelector(".button1").addEventListener('click', function() {
    pet.name = prompt("Give your pet a name!")
    // console.log(pet.name)
    document.getElementById('name').innerText = pet.name
})

//Create function to set and change intervals
function startStatsInterval() {
let hungerStat = setInterval(pet.hunger, 2000);
let sleepStat = setInterval(pet.sleep, 1000);
let playStat = setInterval(pet.sleep, 3000);
let boredomStat = setInterval(pet.boredom, 1500);
}

//Create function to stop interbals
