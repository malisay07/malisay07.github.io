
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

const key = "It's a secret to everybody"

localStorage.setItem(key, "I really want the new The Legend of Zelda: Orcarina of Time game on the Nindento Switch 2 but can't justify buying a whole new console.")

console.log(key)

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

const previousButton = document.querySelector('#prev')
previousButton.addEventListener('click', () => console.log('Previous button clicked!!'))

const nextButton = document.querySelector('#next')
nextButton.addEventListener('click', () => console.log('Next button clicked!!'))


// Show previous set of images
previousButton.addEventListener('click', () => {
  currentImage--;
  showImages();
})

// Show next set of images
nextButton.addEventListener('click', () => {
  currentImage++;
  showImages();
})

// Automatically advance every 5 seconds
setInterval(() => {
  currentImage++;
  showImages();
}, 5000)

showImages()

const todoList = document.querySelector('.todo-list');
const input = document.getElementById('new-todo');
const button = document.querySelector('.addBtn');

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

// Render todos to the page
const renderTodos = () => {
    // Clear the li's before we recreate them
    todoList.innerHTML = '';

    // Create and add new list items to the DOM
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.classList.add('todo');
        li.textContent = todo.text;
        todoList.append(li);
    });
};

// Display existing todos when the page loads
renderTodos();

// Add a new todo
button.addEventListener('click', () => {
    const text = input.value.trim();

    if (text === '') return;

    // Add a new item to the list
    todos.push({
        text: input.value,
        completed: false
    });

    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos));

    // Clear input
    input.value = '';

    // Update the DOM
    renderTodos();
});