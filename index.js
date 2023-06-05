import dogs from './data.js'
import Dog from './Dog.js'

const dogProfilesContainer = document.getElementById("dog-profiles-container")
let dogArray = ["rex", "bella", "teddy"]
let likedDogArray = []
let dog = getNewDog()

function getNewDog() {
    const nextDog = dogs[dogArray.shift()]
    return nextDog ? new Dog(nextDog) : {}
}

function handleLikeClick() {
    document.querySelector(".like-badge").style.display = "block"
    likedDogArray.push(dog.avatar)
    dog.hasBeenLiked = true
    dog.hasBeenSwiped = true
    if(dogArray.length > 0){
        setTimeout(()=>{
            dog = getNewDog()
            render() 
        },1000)
    }
    else{
        endMatches()
    } 
}

function handlePassClick() {
    document.querySelector(".nope-badge").style.display = "block"
    dog.hasBeenSwiped = true
    if(dogArray.length > 0){
        setTimeout(()=>{
            dog = getNewDog()
            render() 
        },1000)
    }
    else{
        endMatches()
    }
}

function endMatches() {
    const likedDogHtml = likedDogArray.map((avatar)=>`  
        <div class="liked-dog">
            <img class="liked-dog-avatar dog-avatar" src="${avatar}">
        </div>
        `).join('')
        
    const likedDogHtmlContainer = `
        <div class="liked-dog-container">
            <p class="liked-dog-title">Your matches</p>
            ${likedDogHtml}
        </div>
        `
        
    if(dogArray.length === 0){
        setTimeout(()=>{
            dogProfilesContainer.innerHTML = likedDogHtmlContainer
            document.getElementById("interaction-icons-container").style.display = "none"
        },1000)
    }
}

document.getElementById("interaction-icon-heart").addEventListener("click", handleLikeClick)
document.getElementById("interaction-icon-cross").addEventListener("click", handlePassClick)

function render() {
    dogProfilesContainer.innerHTML = dog.getDogHtml()
}

render()