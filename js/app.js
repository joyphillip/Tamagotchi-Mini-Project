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
    // created methods to decrease stats
    feed(){
        console.log('YUMMMMM');
        if (this.hunger >= 10) {
            stopInterval()
            alert(`${this.name} has died of hunger. GAME OVER!`)
        } else {
            this.hunger +=1
        }
    }
    sleep(){
        console.log('zzzZZZ');
        if (this.sleepiness >= 10) {
            stopInterval()
            alert(`${this.name} has dies of hunger. GAME OVER!`)
        } else {
            this.hunger += 1
        }
    }
    play(){
        console.log('Yayyy');
        if( this.boredom >= 10){
            stopInterval()
            alert(`${this.name} had died of boredom. GAME OVER!`)
        }
    }
}
// Instantiate your Tamagotchi (If you created a class)
const pet = new Tamagotchi();

//create function to name pet
// added event listener to start game
document.querySelector(".button1").addEventListener('click', function() {
    pet.name = prompt("Give your pet a name!")
    // console.log(myPet.name)
})

//