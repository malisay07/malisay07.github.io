
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

/*--------------------------------*/

const key = "It's a secret to everybody"

localStorage.setItem(key, "I really want the new The Legend of Zelda: Orcarina of Time game on the Nindento Switch 2 but can't justify buying a whole new console.")

console.log(key)

/*--------------------------------*/

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

/*--------------------------------*/

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

// Set consts to HTML elements
const todoList = document.querySelector('.todo-list');
const input = document.getElementById('new-todo');
const addBtn = document.getElementById('add-todo');

// function to add new list items and clear list
const renderTodos = () => {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        todoList.append(li);
    });
};

// function to update local storage when added on website
const addToDo = () => {
    todos.push({ text: input.value, completed: false });
    localStorage.setItem('todo-list', JSON.stringify(todos));
    renderTodos();
    input.value = '';
};

// set add to do button on page to add item to list and call addToDo function
addBtn.addEventListener('click', () => {
addToDo();
});

renderTodos();

/*--------------------------------*/

(async () => {

    // function to get a random pokemon by randomizing only gen 1 pokemon. fetches from the url for Pokeapi
    const getRandomPokemon = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150) 
        
        // wait for fetch request to finish then convert response to json object and return as data so we can use it with other function(s)
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    // function to get randomized pokemon with parameter of pokemon which pulls from API above
    const renderPokemon = pokemon => {  
       
        // for me to verify changes are correct 
        console.log("Pokemon number: ", pokemon.id)
        console.log("Pokemon name: ", pokemon.name)

        // set img in div called 'pokemon' and create a new img
        const parentElement = document.querySelector('#pokemon')
        const img = document.createElement('img')
        
        // set img src using 'front_default' on API for sprites and have img alt set to pokemon name
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        // or pokemon.sprites.front_default

        img.alt = pokemon.name
        
        // place the new <img> element inside our div for 'pokemon'
        parentElement.append(img)
        return pokemon
    }

     // fetch randomPokemon and store it as pokemonImg variable then display it with renderPokemon function
    const pokemonImg = await getRandomPokemon()
    renderPokemon(pokemonImg);

})()