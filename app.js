console.groupCollapsed('testin')
console.log("I'm workin!");

// SECTION arrays and objects testing
const person = {
  name: 'Jeremy',
  age: 32,
  likesCats: false,
  favoriteFoods: ['sushi', 'broccoli', 'croissant sandwich from Winco']
}

console.log(`Hello my name is ${person.name}! I am ${person.age} years old, I ${person.likesCats ? 'love' : 'hate'} cats. I like to eat ${person.favoriteFoods[0]} and ${person.favoriteFoods[1]} and ${person.favoriteFoods[2]}`);


let number1 = 10
// NOTE makes a copy of the value stored in number1
let number2 = number1
number2 += 5 // only affects the number2 variable

console.log('number1:', number1); // 10
console.log('number2:', number2); // 15


// NOTE creates a reference to where the original object is stored in memory
const referenceToPerson = person
// NOTE changes the values in referenceToPerson and person
referenceToPerson.age = 33
// NOTE changes the values in referenceToPerson and person
person.likesCats = true

// NOTE removes key-value pair
delete person.age
// NOTE adds key-value pair
person.favoriteColor = 'green'

// person = {}

// NOTE breaks reference to person in memory, but dumps out all of the original's key-value pairs inside of a new object using the spread operator, makes a "copy"
const copyOfPerson = { ...person }
copyOfPerson.name = 'Dastardly Dan'

console.log('referenceToPerson:', referenceToPerson);
console.log('person:', person);
console.log('copyOfPerson:', copyOfPerson);


const arrayOfNums = [1, 2, 3, 4]
const arrayOfStrings = ['hey', 'sup', 'dawg']
const arrayOfBadThings = [1, 'sup', person, [1, 2, 3], , {}, true]
console.log('weird thing:', arrayOfBadThings[4]);

// arrayOfBadThings.length = 100
// console.log(arrayOfBadThings);

const arrayOfCats = [
  {
    name: 'Gopher',
    age: 7,
    hasTail: true,
    numberOfLegs: 4
  },
  {
    name: 'Dudley',
    age: 2,
    hasTail: true,
    numberOfLegs: 3.5
  },
  {
    name: 'Frankie',
    age: 10,
    hasTail: true,
    numberOfLegs: 4.5
  },
  {
    name: 'Falcon',
    age: 1,
    hasTail: false,
    numberOfLegs: 4
  },
  {
    name: 'Gopher',
    age: 100000,
    hasTail: false,
    numberOfLegs: 4
  },

]

for (let i = 0; i < arrayOfCats.length; i++) {
  const cat = arrayOfCats[i]
  console.log(cat.name);
  console.log(cat.age);
}
arrayOfCats.forEach((cat) => {
  console.log(cat.name)
  console.log(cat.age);
})

// function sup() {
//   console.log('sup');
// }

// arrayOfCats.forEach(sup)

arrayOfCats.forEach(cat => console.log(cat.name))

const foundCat = arrayOfCats.find(cat => cat.name == 'Gopher')
// foundCat.age += 1
foundCat.age += 5000

console.log('found cat', foundCat);

// const filteredCats = arrayOfCats.filter(cat => cat.hasTail == true)
// const filteredCats = arrayOfCats.filter(cat => cat.hasTail == false)
const catsWithTail = arrayOfCats.filter(cat => cat.hasTail)
const catsWithoutTail = arrayOfCats.filter(cat => !cat.hasTail)

catsWithTail[0].age += 4000
console.log('filtered cats', catsWithTail);


const randomIndex = Math.floor(Math.random() * arrayOfCats.length)
console.log('random index', randomIndex);
console.log('random cat', arrayOfCats[randomIndex]);

console.groupEnd()
// !SECTION

// ANCHOR application code starts here

// SECTION global variables

const areas = ['🌴', '🏛️', '🏞️', '🌵']



const animals = [
  {
    name: 'Oslo',
    emoji: '🦧',
    favoriteFoods: ['🍌', '🥜', '🍈'],
    currentArea: '🏛️',
    isGuilty: false
  },
  {
    name: 'Steven',
    emoji: '🦭',
    favoriteFoods: ['🐠', '🍣', '🍤'],
    currentArea: '🏞️',
    isGuilty: false
  },
  {
    name: 'Lil Jeremy',
    emoji: '🦞',
    favoriteFoods: ['🍜', '🥩', '🎂'],
    currentArea: '🏞️',
    isGuilty: false
  },
  {
    name: 'Big Jeremy',
    emoji: '🦞',
    favoriteFoods: ['🍗', '🥩', '🥧'],
    currentArea: '🏞️',
    isGuilty: false
  },
  {
    name: 'Jung',
    emoji: '🦓',
    favoriteFoods: ['🌿', '🥬', '🍎'],
    currentArea: '🌵',
    isGuilty: false
  },
  {
    name: 'Hank',
    emoji: '🦛',
    favoriteFoods: ['🐠', '🥩', '🍔'],
    currentArea: '🌴',
    isGuilty: false
  },
  {
    name: 'Antonio',
    emoji: '🦒',
    favoriteFoods: ['🌳', '🥬', '🍎'],
    currentArea: '🌴',
    isGuilty: false
  },
  {
    name: 'Karina',
    emoji: '🐅',
    favoriteFoods: ['🥩', '🍜', '🐠'],
    currentArea: '🌵',
    isGuilty: false
  },
  {
    name: 'Jordan',
    emoji: '🐧',
    favoriteFoods: ['🐠', '🧊', '🍣'],
    currentArea: '🏛️',
    isGuilty: false
  },
  {
    name: 'Billium',
    emoji: '🦆',
    favoriteFoods: ['🍞', '🥐', '🍇'],
    currentArea: '🏞️',
    isGuilty: false
  },
]
// !SECTION


// SECTION functions
function drawAnimalsAtBeach() {
  let stringOfEmojis = ''

  const animalsAtBeach = animals.filter(animal => animal.currentArea == '🌴')

  console.log('beach filter', animalsAtBeach);
  animals.forEach(banana => {
    stringOfEmojis += banana.emoji
  })
  animalsAtBeach.forEach(animal => {
    stringOfEmojis += animal.emoji
  })
  console.log('string of emojis', stringOfEmojis);

  const areaElement = document.getElementById('🌴')
  areaElement.innerText = stringOfEmojis
}

function drawAnimals() {
  areas.forEach(area => {
    // console.log(area);

    const animalsAtArea = animals.filter(animal => animal.currentArea == area)

    console.log('animals at area', animalsAtArea);

    let stringOfEmojis = ''

    animalsAtArea.forEach(animal => stringOfEmojis += animal.emoji)

    console.log(area, stringOfEmojis);

    const areaElement = document.getElementById(area)
    areaElement.innerText = stringOfEmojis
  })
}

function changeAnimalLocations() {
  animals.forEach(animal => {
    if (animal.emoji == '☠️') {
      // NOTE hard stop function
      return
    }
    const randomAreaIndex = Math.floor(Math.random() * areas.length)
    const randomArea = areas[randomAreaIndex]
    animal.currentArea = randomArea
  })

  drawAnimals()
}

function makeAMurderer() {
  const randomAnimalIndex = Math.floor(Math.random() * animals.length)
  const randomAnimal = animals[randomAnimalIndex]
  randomAnimal.isGuilty = true
}


function accuseAnimalOfMurder() {
  const accusedAnimalEmoji = window.prompt("WHO DUNNIT")
  console.log('user input from prompt', accusedAnimalEmoji);
  const guiltyAnimal = animals.find(animal => animal.isGuilty)

  if (guiltyAnimal.emoji == accusedAnimalEmoji) {
    window.alert(`NICE WORK DETECTIVE. WE'RE PUTTING ${guiltyAnimal.name} IN THE SLAMMER`)
  }
  else {
    window.alert(`BAD WORK DETECTIVE. THIS IS THE WRONG EMOJI: ${accusedAnimalEmoji}.`)
    commitMurder()
    changeAnimalLocations()
  }
}

function commitMurder() {
  const guiltyAnimal = animals.find(animal => animal.isGuilty)

  const potentialVictims = animals.filter(animal => animal.currentArea == guiltyAnimal.currentArea && animal != guiltyAnimal && animal.emoji != '☠️')

  // console.log(potentialVictims);

  const randomAnimalIndex = Math.floor(Math.random() * potentialVictims.length)

  const randomVictim = potentialVictims[randomAnimalIndex]

  if (randomVictim) {
    randomVictim.emoji = '☠️'
  }

}

// !SECTION

// SECTION calling functions (functions to run on page load)

makeAMurderer()
drawAnimals()

// !SECTION