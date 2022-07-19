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
        this.hunger += 1
    }
    sleep(){
        // console.log('zzzZZZ');
        this.sleep += 1
    }
    play(){
        // console.log('Yayyy');
        this.boredom += 1
    }
    ageUp(){
        // console.log('Happy Birthday')
        this.age += 1
        }
    }

// Instantiate your Tamagotchi (If you created a class)
const pet = new Tamagotchi()

let counter = 0;
const button = document.querySelector(".background");

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
function startStatsInterval() {


// Increase your pet's age every x minutes
//Age
setInterval( function(){
    pet.ageUp()
    document.getElementById('age').innerText = `Age: ${pet.age}`
    if( pet.age === 7) {
        // clearInterval(pet.age)
        let littleCrab = document.querySelector('#little-crab') 
        littleCrab.src = "./imgs/big-crab.png"
        alert(`Nice job! ${pet.name} has gotten older! `)
        
    }
}, 3000)



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
}, 4500);

//play
setInterval( function(){
    pet.boredom += 1;
    document.getElementById('bored').innerText = `Boredom: ${pet.boredom}`
    if( pet.boredom >= 10){
        clearInterval(pet.boredom)
        alert(`${pet.name} has died of boredom. GAME OVER!`);
    } 
}, 5000);
}

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

// document.body.style.backgroundImage = url('../imgs/beach-daytime.webp')
function change(){
    let light = document.getElementById("light-switch")
}

    counter +=1;
    console.log( counter)
    if (counter % 2 === 1) {
        document.body.style.backgroundImage = "url(./imgs/beach-daytime.webp)";
    } else if ( counter % 2 === 0 ) {
        document.body.style.backgroundImage = "url(./imgs/nightime-beach.webp)";

    }

});

// Call all methods
pet.feed();
pet.sleep();
pet.play();
pet.ageUp();