/*! 
 *  Filename: sophisticated_code.js
 * 
 *  Description: 
 *     This code is an example of a sophisticated JavaScript application that utilizes various concepts
 *     and features to perform complex tasks. It simulates a virtual pet game where users can interact with
 *     and take care of a virtual pet.
 * 
 *  Author:
 *     Your Name
 * 
 *  Date:
 *     January 1, 2022
 */
 
/* 
   PET OBJECT
   This object represents the virtual pet and contains properties and methods for managing its state.
   It includes properties for name, type, age, health, hunger, and happiness, as well as methods for
   feeding, playing, and checking the pet's status.
*/
const pet = {
  name: "Fluffy",
  type: "Dog",
  age: 3,
  health: 100,
  hunger: 0,
  happiness: 0,
  
  feed(food) {
    if(food === "treat") {
      this.hunger -= 10;
      this.happiness += 5;
    } else if(food === "meal") {
      this.hunger -= 20;
      this.happiness += 10;
    }
    this.checkHealth();
  },
  
  play() {
    this.happiness += 20;
    this.checkHealth();
  },
  
  checkHealth() {
    if(this.hunger >= 100 || this.happiness <= -50) {
      this.health -= 10;
    } else if(this.hunger >= 50 || this.happiness <= 0) {
      this.health -= 5;
    }
    this.checkAge();
  },
  
  checkAge() {
    if(this.age >= 10) {
      this.health -= 20;
    } else if(this.age >= 5) {
      this.health -= 10;
    }
    this.checkStatus();
  },
  
  checkStatus() {
    if(this.health <= 0) {
      console.log(`Unfortunately, ${this.name} has passed away.`);
    } else {
      console.log(`${this.name} is a ${this.type} and is ${this.age} years old.`);
      console.log(`Hunger: ${this.hunger}`);
      console.log(`Happiness: ${this.happiness}`);
      console.log(`Health: ${this.health}`);
    }
  }
};

// GAME LOOP
// This loop continuously prompts the user for actions to perform on the pet until the game is terminated.

let isGameRunning = true;

while(isGameRunning) {
  const action = prompt("What do you want to do? (Feed, Play, or Quit)");

  switch(action.toLowerCase()) {
    case "feed":
      const foodType = prompt("What do you want to feed the pet? (Treat or Meal)");
      pet.feed(foodType.toLowerCase());
      break;
    case "play":
      pet.play();
      break;
    case "quit":
      isGameRunning = false;
      console.log("Thanks for playing!");
      break;
    default:
      console.log("Invalid action. Please try again.");
  }
}
 
 
/*****************************
 * Additional features:
 * - Add more interactive actions and methods for the pet.
 * - Implement a GUI for the game using a web framework.
 * - Include animations and sound effects for pet activities.
 * - Allow users to customize their pet's appearance.
 * - Add multiplayer functionality for pet competitions.
 * - Integrate artificial intelligence to simulate pet intelligence and behavior.
 * - Implement a scoring system to track users' overall progress and achievements.