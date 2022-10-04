for ( let count = 1;  count < 11;  count += 1 )  {
    console.log(count)
}

for(let i = 10 ; i < 101 ; i += 10){
    console.log(i)
}

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear"
]

for(i = 0; i <= messages.length ; i++){
    console.log(messages[i])
}

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}


// Math.random()*6 0.000 -> 5.999
//Math.floor() -> it removes the decimals
let randomNumber = Math.floor( Math.random() * 6 )
console.log(randomNumber)

function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}
console.log( rollDice() )

//objects
// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }
// console.log( course.length )