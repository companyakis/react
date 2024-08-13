import {sum, greeting, importantMessage, user, importantYears} from "./userfile.js"

console.log(sum(3, 5, 6)) // 14

console.log(greeting("Mustafa")) // Hi Mustafa!

console.log(importantMessage) // Let's go!

console.log(user.surname) // Büyükdereli

console.log(importantYears[importantYears.length - 1]) // 2024

// import sayHi func?

// import {sayHi} from "./userfile.js"

// sayHi("Banu") // SyntaxError: The requested module './userfile.js' does not provide an export named 'sayHi'
