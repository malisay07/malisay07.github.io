
const hours = new Date().getHours() // get the current hour

const welcomeDiv = document.getElementById('welcome')

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

welcomeDiv.innerHTML = isMorning ? 'Good Morning! Hope you have a beautiful day!' : isAfternoon ? 'Good Afternoon! Keep up the great work!' : 'Good Evening! Time to relax and unwind!'

console.log(`Current date and time: ${new Date()}`)
console.log(`Good Morning! ${isMorning}`)
console.log(`Good Afternoon! ${isAfternoon}`)
console.log(`Good Evening! ${isEvening}`)