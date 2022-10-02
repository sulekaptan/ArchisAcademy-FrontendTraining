// js kodları yukarıdan aşağıya doğru çalışır
// o yüzden tanımlama işlemlerini en üstte yapmalıyız


// document.getElementById("count").innerText = 5
//let count = 0
// console.log(count)

//inner text ile html içindeki yazıyı alabiliriz ve değiştirebiliriz

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function increment(){
    count += 1
    countEl.innerText = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}



// let username = "per"
// let message = "You have tree new notifications"
// console.log(message + ", " + username)

// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)


// console.log(4 + 5) // 9
// console.log("2" + "4") // "24"
// console.log("5" + 1) // "51"
// console.log(100 + "100") // "100100"

//modül 1'de öğrenilenler
// - script tag
// - variables
// - numbers
// - strings
// - console.log()
// - functions
// - the DOM
// - getElementById()
// - innerText
// - textContent
// - onclick
