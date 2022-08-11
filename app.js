const shrinkBtn = document.querySelector(".shrink-btn");

shrinkBtn.addEventListener("click", function () {
  document.body.classList.toggle("shrink");
  shrinkBtn.classList.add("hovered");

  setTimeout(function () {
    shrinkBtn.classList.remove("hovered");
  }, 1400);
});

/////////////////////////////////////////////////

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////
// String Methods Practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log(Object.keys(openingHours));
// console.log(Object.values(openingHours));
// console.log(Object.entries(openingHours));

// const openDays = Object.keys(openingHours);

// let senStr = `We are open on `;
// for (const days of openDays) {
//   senStr += `${days}, `;
// }

// console.log(senStr);

// const entries = Object.entries(openingHours);

// for (const [day, { open, close }] of entries) {
//   console.log(`aa ${day} bb ${open} cc ${close}`);
// }

// console.log("-------------------------");
// console.log("-------------------------");
// console.log("-------------------------");

// const airline = "TAP Air Portugal";

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") {
//     console.log("You have accquired the middle seat");
//   }
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log("-------------------------");
// console.log("-------------------------");
// console.log("-------------------------");

// function nameChange(name) {
//   const nameLower = name.toLowerCase();
//   const firstLetter = nameLower.slice(0, 1);
//   const n = nameLower.slice(1);
//   const nameFinal = firstLetter.toUpperCase() + n;

//   console.log(nameFinal);
// }

// nameChange("joShUa");

// // Comparing Emails

// const email = "hello@jonas.io";
// const loginEmail = "Hello@jonas.io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //replacing

// const priceGB = "288,97£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log(priceUS);

// const announcement = "All passengers come to bording door 23. Boarding door 23";

// console.log(announcement.replaceAll("door", "gate"));

// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.startsWith("Air"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log(`Part of the NEW Airbus family`);
// }

// //Practice Exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are NOT allowed on board");
//   } else {
//     console.log("Welcome aboard!");
//   }
// };

// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

// console.log("-------------------------");
// console.log("-------------------------");

// const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");

// console.log(newName);

// const capitalizedName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }

//   console.log(namesUpper.join(" "));
// };
// capitalizedName("jessica ann smith davis");
// capitalizedName("jonas schemdtmann");

// //padding
// const message = "Go to gate 23";
// console.log(message.padStart(25, "+").padEnd(35, "+"));

// const maskCreditCard = function (number) {
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };

// console.log(maskCreditCard(3264238742364));

// //Repeat
// const message2 = "Bad weather... all departures delayed...";
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${"toothpaste".repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

/* 
Write a program that receives a list of variable names 
written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

/*
const scoredArray = Object.entries(game.scored);
for (const [goal, playerName] of scoredArray) {
  console.log(`Goal ${Number(goal) + 1}: ${playerName}`);
}

const avgOdd = Object.values(game.odds);
let avg = 0;
for (let i = 0; i < avgOdd.length; i++) {
  avg += avgOdd[i];
}
avg /= avgOdd.length;

console.log(`The average: ${avg}`);

for (const [i, odd] of Object.entries(game.odds)) {
  let vicStr = i === "x" ? "draw" : `victory of ${game[i]} `;
  console.log(`Odd of ${vicStr}: ${odd}`);
}

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// Coding Challenge #3

/* 
Let's continue with our football betting app! 
This time, we have a map with a log of the events that happened during the game. 
The values are the events themselves, and the keys are the minutes in which each event happened 
(a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// const events = new Set();

// let number = 0;
// let keyArr = [];

// for (const [key, value] of gameEvents.entries()) {
//   keyArr.push(key);
//   events.add(value);
// }
// console.log(events);

// gameEvents.delete(64);

// console.log(gameEvents);

// console.log(keyArr);

// let firstNum;
// let secondNum;
// let tempTotal;
// const avgArr = [];

// for (let i = 0; i < keyArr.length - 1; i++) {
//   firstNum = keyArr[i];
//   secondNum = keyArr[i + 1];
//   tempTotal = secondNum - firstNum;
//   avgArr.push(tempTotal);
// }

// let avgNum = 0;

// for (let i = 0; i < avgArr.length; i++) {
//   avgNum += avgArr[i];
// }

// const avg = avgNum / avgArr.length;
// console.log(avg);

// console.log(`An event happened, on average, every ${avg} minutes`);

// for (const [key, value] of gameEvents.entries()) {
//   if (key < 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// }
