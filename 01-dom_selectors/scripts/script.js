console.log('Js loaded')

//console.log(document.querySelector('div.first-div').innerText)
//console.log(document.querySelector('div.first-div + div').innerText)

const firstDiv = Array.from(document.getElementsByClassName('first-div'))
//console.log('first-div:',firstDiv.length)


//firstDiv.forEach( console.log );

const divs = document.querySelectorAll('div')
//console.log(divs);

//divs.forEach(console.log)

const second=document.getElementById('second-div')
//console.log(second)

//Test for equality
const cards=Array.from(document.getElementsByClassName('card'))
//console.log(divs[0]===cards[0])

//cards.forEach(card=>card.innerText+=' and I have been modified')

//------- selecting on a branch (elemnt inside)-----

console.log(divs[1].querySelector('p'));