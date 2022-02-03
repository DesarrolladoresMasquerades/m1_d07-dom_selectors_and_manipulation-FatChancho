// 1: Get the node with the  main title
console.log(document.getElementsByTagName('h1')[0])


// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text
console.log(document.getElementsByTagName('h1')[0].innerText)

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

console.log(document.getElementsByClassName('fruit-item'))

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

const veggies = Array.from(document.getElementsByClassName('veggie-item'))
const oldVeggies = veggies.map(e=> (e.innerText))
console.log(oldVeggies.toString)

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

console.log(document.getElementsByTagName('h2')[1].innerText)

// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

const h2 = document.querySelector('h2');
h2.setAttribute('Id','fruit-title');
console.log(h2)

// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

const fruits = Array.from(document.getElementsByClassName('fruit-item'))
fruits[0].classList.add('best-fruit')
fruits[2].classList.add('best-fruit')
console.log(fruits)


// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

const claseRem = document.querySelector('.veggies')
claseRem.classList.remove('veggies')
console.log(claseRem)

// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

const veg = Array.from(document.getElementsByClassName('veggie-item'))
veg.forEach((e=>{
   e.classList.add('veggie-love')
}))
console.log(veg)

// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

const spinach = Array.from(document.getElementsByClassName('veggie-item'))
spinach.forEach(element => {
    if(element.innerText === 'Spinach') element.classList.remove('veggie-item');
});
console.log(spinach)

// => ... <li class="veggie-love">Spinach</li>