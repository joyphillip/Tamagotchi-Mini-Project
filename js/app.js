//console.log("Hello")
// My Tamagotchi Game 
// Create a Class (look at your notes on JS Classes if you forgot) for your Tamagotchi

class Tamagotchi {
    constructor (name = "Fred", hunger = 1, sleepiness = 1, boredom = 1, age) {
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }
    deadT(){
        if (this.hunger >= 10 || this.sleepiness >= 10 || this.boredom >= 10){
            alert( `${this.name} has died. GAME OVER`)
        }
    }
    feedT() {
        console.log("YUMMMM")
        this.hunger += 2
        }

    sleepT(){
        console.log("zzzZZZ")
        this.sleepiness += 2

    }
    playT(){
        console.log("Yayyy")
        this.boredom += 2

    }
    ageT(){
        alert(`Happy Birthday, ${this.name} is 1 year older!`)
    }
    }

    let tamagotchi = new Tamagotchi()
    console.log(tamagotchi.name)