class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    
    getDogHtml(){
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        
        return `
            <div class="dog-container">
                <img class="like-badge" src="./images/badge-like.png">
                <img class="nope-badge" src="./images/badge-nope.png">
                <img class="dog-avatar" src="${avatar}">
                <div class="dog-text">
                    <div class="dog-info">
                        ${name}, ${age}
                    </div>
                    <p class="dog-bio">${bio}</p>
                </div>
            </div>
        `
    }
}

export default Dog