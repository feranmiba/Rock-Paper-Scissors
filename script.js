'use strict'
// SELECTED ELEMENT
const firstOne = document.querySelector('.game')
const secondOne = document.querySelector('.thing')
const thePics = document.querySelectorAll('.oh')
const theShownPics = document.querySelectorAll('.ohh')
const theComputerPics = document.querySelectorAll('.ku')
const rules = document.querySelector('.real')
const rulesButton = document.querySelectorAll('.rules')
const closeRules = document.querySelectorAll('.close')
const overlay = document.querySelector('.overlay')
const winORlose = document.querySelector('.win')
const win = document.querySelector('.yes')
const playAgain = document.querySelector('.winner')
const circle = document.querySelector('.circle')
const circles = document.querySelector('.circles')
const scoreBoard = document.getElementById('num')


//THE GAME PLAN

let playerscore = 0
let currentScore = 0
let number = Math.floor( Math.random() * 3) + 1
console.log(number);
let time = 150


const theGameLogic = function () {
    
    thePics.forEach(pic => {
        pic.addEventListener('click', function () {
            firstOne.classList.add('hide') 
            secondOne.classList.remove('hide')   
            const __id = pic.getAttribute('id')
            console.log(__id);
    
            //shownpics
            theShownPics.forEach(snp => {
                const snPics = snp.getAttribute('id')
                if (__id == snPics) {
                 snp.classList.remove('hide')   
                }else {
                    snp.classList.add('hide')
                }
            })  
    
            //comp
            theComputerPics.forEach(compic =>{
                const _ids = Number(compic.getAttribute('id'))
                console.log(_ids);
                if (number === _ids) {
                    compic.classList.remove('hide')
                }else {
                    compic.classList.add('hide')
                }
            })
          
            //win or lose
            const startLogOut =   setInterval(function () {
               time--
               
               if (time == 0) {
                clearInterval(startLogOut)
                if (__id > number) {
                    winORlose.classList.remove('hide') 
                    circle.classList.add('csa')
                    theShownPics.forEach(com => com.classList.add('show'))
                    circles.classList.add('hide')
                  currentScore =  playerscore += 1
                    scoreBoard.textContent = playerscore
                } else if (__id < number) {
                    win.textContent = `YOU LOSE`
                    win.style.marginLeft = -15 + `px`
                    winORlose.classList.remove('hide') 
                    circle.classList.add('csa')
                    theShownPics.forEach(com => com.classList.add('show'))
                    circles.classList.add('hide')
                    currentScore =  playerscore -= 1
                    scoreBoard.textContent = playerscore
                } else if (__id == number) {
                    win.textContent = `DRAW`
                    winORlose.classList.remove('hide') 
                    win.style.marginLeft = 15 + `px`
                }         
        }
            })
            
        }) 
    })    
}
theGameLogic()
rulesButton.forEach(btns => {
    btns.addEventListener('click', () => {
        rules.classList.remove('hide')
        overlay.classList.remove('hide')
    })
})
closeRules.forEach(clo => {
    clo.addEventListener('click', function() {
        rules.classList.add('hide')
        overlay.classList.add('hide')
    })
})
   




 //PLAY AGAIN
 playAgain.addEventListener('click', function () {
   number = Math.floor( Math.random() * 3) + 1;
   time = 150
  playerscore = currentScore
    firstOne.classList.remove('hide') 
    secondOne.classList.add('hide')  
   winORlose.classList.add('hide') 
   win.textContent = `YOU WIN`
   win.style.marginLeft =  ``
   theComputerPics.forEach(com => com.classList.add('hide'))
   theShownPics.forEach(com => com.classList.add('hide'))
   theShownPics.forEach(com => com.classList.remove('show'))
   circle.classList.remove('csa')
   circles.classList.remove('hide')
})      

