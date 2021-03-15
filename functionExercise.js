// 1
function fozzieBear() {
console.log("Wocka Wocka!");
}
fozzieBear();

// 2
function beaker(speak) {
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
}
beaker("Meep");

// 3
function werewolf(a,b) {
    if ("Muppet","Show") {
        console.log(`It's time to play the music. It's time to light the lights.`);
    }   
}
werewolf();

// 4
function kermit() {
    return `Kermit The Frog`;
}
console.log(kermit());


// 5
function muppetShowSeasons(seasons) {
    if(seasons == 5) {
        return true;   
    } else {
        return false;
    }
}

console.log(muppetShowSeasons(5));

console.log("========");
// 6a
const muppets = [
    "Kermit The Frog", 
    "Miss Piggy", 
    "Fozzie Bear", 
    "The Great Gonzo"
];

// 6b
function showMuppets(names) {
 console.log(names = muppets[0]);
 console.log(names = muppets[1]);
 console.log(names = muppets[2]);
 console.log(names = muppets[3]);
}

showMuppets(muppets);

// 7
const manOrMuppet = function() {
    console.log("Am I a man or am I a Muppet?");
}

manOrMuppet();

// 8
rainbowConnection = () => (
    `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`)

    
const news = rainbowConnection();
console.log(rainbowConnection());

// 9
// YES

// 10
// NO


// 11a
const newMuppetMovies = ["The Muppets",
"Muppets Most Wanted"
];

// 11b
function names() {
    console.log(newMuppetMovies.toUpperCase);
}

const newMuppet = newMuppetMovies.map(newMuppetMovies => newMuppetMovies.toUpperCase());
console.log(newMuppet);


// 12a
const oldMuppetMovies = ["The Muppet Movie",
 "The Muppets Take Manhattan", 
 "The Great Muppet Caper", 
 "The Muppet Christmas Carol", 
 "Muppet Treasure Island",
 "Muppets From Space"
];

// 12b
// function newNew() {
//     console.log(oldMuppetMovies[2],oldMuppetMovies[3]);
// }

const newTwo = function names() { 
    return console.log(oldMuppetMovies[2]), console.log(oldMuppetMovies[3]);
}

const twoMovies = oldMuppetMovies.filter(newTwo);
console.log(twoMovies);

