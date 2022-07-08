//console.log("Hello")
// My Tamagotchi Game 
//Introduce game rules

// Create a Class (look at your notes on JS Classes if you forgot) for your Tamagotchi
                        // TAMAGOTCHI
// ---------------------------------------------------------- //
class Tamagotchi {
    constructor (name, hunger = 1, sleepiness = 1, boredom = 1, age = 0) {
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }
    feedT(){
        console.log("YUMMMM")
        this.hunger += 1
    }

    sleepT(){
        console.log("zzzZZZ")
        this.sleepiness += 1
    }

    playT(){
        console.log("Yayyy")
        this.boredom += 1
    }

    ageT(){
        this.age += 1
        alert(`Happy Birthday, ${this.name} is 1 year older!`)
    }
    }

// Instantiate your Tamagotchi (If you created a class)
    let tamagotchi = new Tamagotchi()
    // console.log(tamagotchi)

                        //BUTTONS
// ------------------------------------------------------------- //
                       
// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.

// Start Button
const startBtn = document.createElement('button');
startBtn.innerText = "Start";
document.body.appendChild(startBtn);
//Event listener
startBtn.addEventListener("click", function(){
    console.log("Start button was clicked")
} )


// Light Button
const lightSwitchBtn = document.createElement('button');
lightSwitchBtn.innerText = "Light (On/Off)";
document.body.appendChild(lightSwitchBtn);
//Event listener
lightSwitchBtn.addEventListener("click", function(){
    console.log("Light button was clicked");
    tamagotchi.sleepiness -= 1;
})

// Feed Button
const feedBtn = document.createElement('button');
feedBtn.innerText = "Feed Me";
document.body.appendChild(feedBtn);
// Event Listener
feedBtn.addEventListener("click", function(){
    console.log("Feed button was clicked");
    tamagotchi.hunger -= 1;
})

//Play Button
const playBtn = document.createElement('button');
playBtn.innerText = "Let's Play";
document.body.appendChild(playBtn);
// Event Listener
playBtn.addEventListener("click", function(){
    console.log("Play button was clicked");
    tamagotchi.boredom -= 1;
})

//Add the ability to name your pet. 
function nameT() {
    tamagotchi.name = prompt("Give your new pet a name!")
    console.log(tamagotchi.name);
}
nameT();

// Style the page.

// Intervals
//Increase your pet's age every x minutes
setInterval( function() {
    tamagotchi.age += 1
    console.log(tamagotchi.age)
}, 10000);


// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
//Your pet should die if Hunger, Boredom, or Sleepiness hits 10.

// Increase Hunger
setInterval( function(){
    tamagotchi.hunger += 1;
    if( tamagotchi.hunger >= 10){
        alert(`${tamagotchi.name} has died of hunger. GAME OVER!`);
    } 
}, 10000);

//Increase Sleepiness
setInterval( function(){
    tamagotchi.sleepiness += 1
    if(tamagotchi.sleepiness >= 10){
        alert(`${tamagotchi.name} has died from lack of sleep. GAME OVER!`);
    }
}, 10000);

//Increase Boredom
setInterval( function(){
    tamagotchi.boredom += 1
    if( tamagotchi.boredom >= 10){
        alert(`${tamagotchi.name} has died of boredom. GAME OVER!`)
    }
}, 10000);


// Morph your pet at certain ages.
setInterval(function(){
    if (tamagotchi.age === 5){
        alert( "You Win, nice job taking care of your pet!")
    } 

}
)
//Animate your pet across the screen while it's alive

//call all functions
feedT();
sleepT();
playT();
ageT();