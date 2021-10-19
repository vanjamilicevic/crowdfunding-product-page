
/*
    Utils functions
*/ 
function removeActive(cardNumber) {

    document.getElementById(`${cardNumber}-circle-active`).classList.add("not-visible")
    document.getElementById(`${cardNumber}-lightbox-card`).classList.remove("lightbox-card-active")
    document.getElementById(`${cardNumber}-horizontal-line`).classList.add("not-visible")
    document.getElementById(`${cardNumber}-enter-your-pledge`).classList.add("not-visible")
    document.getElementById(`${cardNumber}-enter-pledge`).classList.add("not-visible")
    document.getElementById(`${cardNumber}-continue`).classList.add("not-visible")
    document.getElementById(`${cardNumber}-entered-pledge`).classList.add("not-visible")
    document.getElementById(`${cardNumber}-holder-section-one`).classList.add("not-visible")
    document.getElementById(`${cardNumber}-holder-section-two`).classList.add("not-visible")
}

function addActive(cardNumber) {

    document.getElementById(`${cardNumber}-circle-active`).classList.remove("not-visible")
    document.getElementById(`${cardNumber}-lightbox-card`).classList.add("lightbox-card-active")
    document.getElementById(`${cardNumber}-horizontal-line`).classList.remove("not-visible")
    document.getElementById(`${cardNumber}-enter-your-pledge`).classList.remove("not-visible")
    document.getElementById(`${cardNumber}-enter-pledge`).classList.remove("not-visible")
    document.getElementById(`${cardNumber}-continue`).classList.remove("not-visible")
    document.getElementById(`${cardNumber}-entered-pledge`).classList.remove("not-visible")
    document.getElementById(`${cardNumber}-holder-section-one`).classList.remove("not-visible")
    document.getElementById(`${cardNumber}-holder-section-two`).classList.remove("not-visible")
}

function nothingLeftInactiveState(cardName){
    /*
        Inactive states for main page
    */ 
    document.getElementById(`${cardName}-reward-card`).classList.add("select-reward-card-not-active")
    document.getElementById(`${cardName}-special-edditon-title`).classList.add("select-reward-card-title-not-active")
    document.getElementById(`${cardName}-special-edditon-pledge`).classList.add("pledge-not-active")
    document.getElementById(`${cardName}-special-edditon-description`).classList.add("description-not-active")
    document.getElementById(`${cardName}-edition-number-left`).classList.add("number-left-not-active")
    document.getElementById(`${cardName}-text-left`).classList.add("text-left-not-active")
    document.getElementById(`${cardName}-edition-select-reward`).classList.add("select-reward-not-active")
}

function nothingLeftInactiveStateLightbox(cardNumber){

    document.getElementById(`${cardNumber}-lightbox-card`).classList.add("select-reward-card-not-active")
    document.getElementById(`lightbox-${cardNumber}-card-title`).classList.add("select-reward-card-title-not-active")
    document.getElementById(`lightbox-${cardNumber}-card-description`).classList.add("description-not-active")
    document.getElementById(`lightbox-${cardNumber}-card-pledge`).classList.add("pledge-not-active")
    document.getElementById(`${cardNumber}-lightbox-number-left`).classList.add("number-left-not-active")
    document.getElementById(`${cardNumber}-lightbox-number-left-mobile`).classList.add("number-left-not-active")
    document.getElementById(`circle-inactive-${cardNumber}-card`).classList.add("circle-inactive-not-active")
}

function onMouse(cardNumber){

    document.getElementById(`circle-inactive-${cardNumber}-card`).classList.add("circle-inactive-hover")
    document.getElementById(`lightbox-${cardNumber}-card-title`).classList.add("lightbox-card-title-hover")
}

function outMouse(cardNumber){

    document.getElementById(`circle-inactive-${cardNumber}-card`).classList.remove("circle-inactive-hover")
    document.getElementById(`lightbox-${cardNumber}-card-title`).classList.remove("lightbox-card-title-hover")
}

/*
    Changing bookmark icon and color if "bookmark" is clicked
*/ 

document.getElementById("bookmark").addEventListener("click", function() {

    document.getElementById("bookmark").classList.toggle("bookmark-clicked")
})

/*
    Adding eventListener to "Back this project" button 
    and to "img-close"
    in order to show/hide the lightbox
*/ 
document.getElementById("back-this-project").addEventListener("click", function() {
    
    document.getElementById("lightbox").classList.remove("not-visible")
})

document.getElementById("bamboo-edition-select-reward").addEventListener("click", function() {

    if(window.localStorage.getItem('secondLightboxNumberLeft') != 0){
        document.getElementById("lightbox").classList.remove("not-visible")
    }
})

document.getElementById("black-edition-select-reward").addEventListener("click", function() {

    if(window.localStorage.getItem('thirdLightboxNumberLeft') != 0){
        document.getElementById("lightbox").classList.remove("not-visible")
    }
})

document.getElementById("mahogany-edition-select-reward").addEventListener("click", function() {
    if(window.localStorage.getItem('fourthLightboxNumberLeft') != 0) {
        document.getElementById("lightbox").classList.remove("not-visible")
    }
})

/* 
    Adding event listener on click on hamburger to show/hide lightbox about/description/get started ->for mobile 
*/ 

document.getElementById("hamburger-icon").addEventListener("click", function(){

    document.getElementById("lightbox-hamburger").classList.remove("not-visible")
    document.getElementById("crowdfund-logo").classList.add("not-visible")
    document.getElementById("hamburger-icon").classList.add("not-visible")
})

document.getElementById("icon-close").addEventListener("click", function() {

    document.getElementById("lightbox-hamburger").classList.add("not-visible")
    document.getElementById("crowdfund-logo").classList.remove("not-visible")
    document.getElementById("hamburger-icon").classList.remove("not-visible")
})

document.getElementById("lightbox-hamburger-about").addEventListener ("click", function() {

    document.getElementById("lightbox-hamburger").classList.add("not-visible")
    document.getElementById("crowdfund-logo").classList.remove("not-visible")
    document.getElementById("hamburger-icon").classList.remove("not-visible")
    document.getElementById('about-project-title').scrollIntoView({
        behavior: 'smooth'
      });
})

document.getElementById("lightbox-hamburger-discover").addEventListener ("click", function() {

    document.getElementById("lightbox-hamburger").classList.add("not-visible")
    document.getElementById("crowdfund-logo").classList.remove("not-visible")
    document.getElementById("hamburger-icon").classList.remove("not-visible")
    document.getElementById('bamboo-special-edditon-title').scrollIntoView({
        behavior: 'smooth'
      });
})

document.getElementById("lightbox-hamburger-get-started").addEventListener ("click", function() {

    document.getElementById("lightbox-hamburger").classList.add("not-visible")
    document.getElementById("crowdfund-logo").classList.remove("not-visible")
    document.getElementById("hamburger-icon").classList.remove("not-visible")
    document.getElementById('mastercraft-title').scrollIntoView({
        behavior: 'smooth'
      });
})


document.getElementById("img-close").addEventListener("click", function() {

    document.getElementById("lightbox").classList.add("not-visible")
    removeActive("first")
    removeActive("second")
    removeActive("third")
    removeActive("fourth")
    document.getElementById("bamboo-edition-number-left").innerText = (parseInt(window.localStorage.getItem('secondLightboxNumberLeft'))).toLocaleString()
    document.getElementById("black-edition-number-left").innerText = (parseInt(window.localStorage.getItem('thirdLightboxNumberLeft'))).toLocaleString()
    document.getElementById("mahogany-edition-number-left").innerText = (parseInt(window.localStorage.getItem('fourthLightboxNumberLeft'))).toLocaleString()
})

/*
    Changing circle and title class on mouseover
    for all four cards in lightbox
*/
document.getElementById("lightbox-first-card-title").addEventListener("mouseover", function(){

    onMouse("first")
})

document.getElementById("lightbox-first-card-title").addEventListener("mouseout", function(){

    outMouse("first")
})

document.getElementById("lightbox-second-card-title").addEventListener("mouseover", function(){

    if(window.localStorage.getItem('secondLightboxNumberLeft') != 0){

        onMouse("second")
    }
})

document.getElementById("lightbox-second-card-title").addEventListener("mouseout", function(){

    outMouse("second")
})

document.getElementById("lightbox-third-card-title").addEventListener("mouseover", function(){

    if(window.localStorage.getItem('thirdLightboxNumberLeft') != 0){

        onMouse("third")
    }
})

document.getElementById("lightbox-third-card-title").addEventListener("mouseout", function(){

    outMouse("third")
})

document.getElementById("lightbox-fourth-card-title").addEventListener("mouseover", function(){

    if(window.localStorage.getItem('fourthLightboxNumberLeft') != 0){

        onMouse("fourth")
    }
})

document.getElementById("lightbox-fourth-card-title").addEventListener("mouseout", function(){

    outMouse("fourth")
})

/*
    Adding icon close on first lightbox to be black on mouseover
*/ 
document.getElementById("img-close").addEventListener("mouseover", function() {
    document.getElementById("img-close").src = "../images/icon-close-black.png"
})

document.getElementById("img-close").addEventListener("mouseout", function() {
    document.getElementById("img-close").src = "../images/icon-close-modal.svg"
})

/*
    Setting active states on click for all four cards in the lightbox
*/ 

// FIRST CARD
document.getElementById("lightbox-first-card-title").addEventListener("click", function() {

    removeActive("second")
    removeActive("third")
    removeActive("fourth")
    addActive("first")
})

// SECOND CARD
document.getElementById("lightbox-second-card-title").addEventListener("click", function() {

    removeActive("first")
    removeActive("third")
    removeActive("fourth")
    if(window.localStorage.getItem('secondLightboxNumberLeft') != 0){

        addActive("second")
    }
})

// THIRD CARD
document.getElementById("lightbox-third-card-title").addEventListener("click", function() {

    removeActive("first")
    removeActive("second")
    removeActive("fourth")
    if(window.localStorage.getItem('thirdLightboxNumberLeft') != 0){

        addActive("third")
    }
})

// FOURTH CARD

document.getElementById("lightbox-fourth-card-title").addEventListener("click", function() {

    removeActive("first")
    removeActive("second")
    removeActive("third")
    if(window.localStorage.getItem('fourthLightboxNumberLeft') != 0){

        addActive("fourth")
    }
})

/*
    Adding second lightbox when "Continue" button is clicked
    in first lightbox-card
*/ 

document.getElementById("first-continue").addEventListener("click", function() {

    document.getElementById("lightbox").classList.add("not-visible")
    removeActive("first")
    removeActive("second")
    removeActive("third")
    removeActive("fourth")
    document.getElementById("lightbox-thanks-for-your-support").classList.remove("not-visible")
})

document.getElementById("second-continue").addEventListener("click", function() {

    if (document.getElementById("second-entered-pledge").value == ""){

        alert("You can't enter empty string!")
    } else {
        document.getElementById("lightbox").classList.add("not-visible")
        removeActive("first")
        removeActive("second")
        removeActive("third")
        removeActive("fourth")
        document.getElementById("lightbox-thanks-for-your-support").classList.remove("not-visible")
        }
})

document.getElementById("third-continue").addEventListener("click", function() {

    if (document.getElementById("third-entered-pledge").value == ""){

        alert("You can't enter empty string!")
    } else {

        document.getElementById("lightbox").classList.add("not-visible")
        removeActive("first")
        removeActive("second")
        removeActive("third")
        removeActive("fourth")
        document.getElementById("lightbox-thanks-for-your-support").classList.remove("not-visible")
    }
    
})

document.getElementById("fourth-continue").addEventListener("click", function() {

    if (document.getElementById("fourth-entered-pledge").value == ""){

        alert("You can't enter empty string!")
    } else {
        document.getElementById("lightbox").classList.add("not-visible")
        removeActive("first")
        removeActive("second")
        removeActive("third")
        removeActive("fourth")
        document.getElementById("lightbox-thanks-for-your-support").classList.remove("not-visible")
    }
})

/*
    Closing second lightbox when "Got it!" button is clicked
*/

document.getElementById("lightbox-thanks-for-your-support-button").addEventListener("click", function() {

    document.getElementById("lightbox-thanks-for-your-support").classList.add("not-visible")
    document.getElementById("bamboo-edition-number-left").innerText = (parseInt(window.localStorage.getItem('secondLightboxNumberLeft'))).toLocaleString()
    document.getElementById("black-edition-number-left").innerText = (parseInt(window.localStorage.getItem('thirdLightboxNumberLeft'))).toLocaleString()
    document.getElementById("mahogany-edition-number-left").innerText = (parseInt(window.localStorage.getItem('fourthLightboxNumberLeft'))).toLocaleString()
    let loaderWidth = (parseInt(window.localStorage.getItem('cash'))*100)/100000
    document.getElementById("percentage-loader").style.width = `${loaderWidth}%`

    if(window.localStorage.getItem('secondLightboxNumberLeft') == 0) {

        nothingLeftInactiveState("bamboo")
        nothingLeftInactiveStateLightbox("second")
    }

    if(window.localStorage.getItem('thirdLightboxNumberLeft') == 0) {

        nothingLeftInactiveState("black")
        nothingLeftInactiveStateLightbox("third")
    }

    if(window.localStorage.getItem('fourthLightboxNumberLeft') == 0) {

        nothingLeftInactiveState("mahogany")
        nothingLeftInactiveStateLightbox("fourth")
    }
})

/*-------------------------------------------------Setting cards in order to calculate money, pledges left and backers-------------------------------------------------*/

/* 
    Settings for the Bamboo Stand on when "continue" button is clicked
*/

document.getElementById("second-continue").addEventListener("click", function() {

    if (document.getElementById("second-entered-pledge").value == "") {

    } else {
        let secondEnteredPledge = document.getElementById("second-entered-pledge").value
        let cash = window.localStorage.getItem('cash')
        let backers = window.localStorage.getItem('backers')
        let secondLightboxNumberLeft = window.localStorage.getItem('secondLightboxNumberLeft')

        secondEnteredPledge = (secondEnteredPledge.trim()).split(" ").join("")

        window.localStorage.setItem('backers', parseInt(backers) + 1)
        document.getElementById("backers").innerText = (parseInt(window.localStorage.getItem('backers'))).toLocaleString()

        window.localStorage.setItem('cash', parseInt(cash) + parseInt(secondEnteredPledge))
        document.getElementById("cash").innerText = "$" + (parseInt(window.localStorage.getItem('cash'))).toLocaleString()

        window.localStorage.setItem('secondLightboxNumberLeft', parseInt(secondLightboxNumberLeft) - 1)
        document.getElementById("second-lightbox-number-left").innerText = (parseInt(window.localStorage.getItem('secondLightboxNumberLeft'))).toLocaleString()
        document.getElementById("second-lightbox-number-left-mobile").innerText = (parseInt(window.localStorage.getItem('secondLightboxNumberLeft'))).toLocaleString()
        }
})

/*
    Settings for Black Edition Stand when "continue" button is clicked
*/ 

document.getElementById("third-continue").addEventListener("click", function() {

    if (document.getElementById("third-entered-pledge").value == "") {
        return
    } else {

        let thirdEnteredPledge = document.getElementById("third-entered-pledge").value
        let cash = window.localStorage.getItem('cash')
        let backers = window.localStorage.getItem('backers')
        let thirdLightboxNumberLeft = window.localStorage.getItem('thirdLightboxNumberLeft')

        thirdEnteredPledge = (thirdEnteredPledge.trim()).split(" ").join("")

        window.localStorage.setItem('backers', parseInt(backers) + 1)
        document.getElementById("backers").innerText = (parseInt(window.localStorage.getItem('backers'))).toLocaleString()

        window.localStorage.setItem('cash', parseInt(cash) + parseInt(thirdEnteredPledge))
        document.getElementById("cash").innerText = "$" + (parseInt(window.localStorage.getItem('cash'))).toLocaleString()

        window.localStorage.setItem('thirdLightboxNumberLeft', parseInt(thirdLightboxNumberLeft) - 1)
        document.getElementById("third-lightbox-number-left").innerText = (parseInt(window.localStorage.getItem('thirdLightboxNumberLeft'))).toLocaleString()
        document.getElementById("third-lightbox-number-left-mobile").innerText = (parseInt(window.localStorage.getItem('thirdLightboxNumberLeft'))).toLocaleString()
    }
})

/*
    Settings for Mahogany Special Edition when "continue" button is clicked
*/ 

document.getElementById("fourth-continue").addEventListener("click", function() {

    if (document.getElementById("fourth-entered-pledge").value == "") {
        return
    } else {

        let fourthEnteredPledge = document.getElementById("fourth-entered-pledge").value
        let cash = window.localStorage.getItem('cash')
        let backers = window.localStorage.getItem('backers')
        let fourthLightboxNumberLeft = window.localStorage.getItem('fourthLightboxNumberLeft')
    
        fourthEnteredPledge = (fourthEnteredPledge.trim()).split(" ").join("")
    
        window.localStorage.setItem('backers', parseInt(backers) + 1)
        document.getElementById("backers").innerText = (parseInt(window.localStorage.getItem('backers'))).toLocaleString()
    
        window.localStorage.setItem('cash', parseInt(cash) + parseInt(fourthEnteredPledge))
        document.getElementById("cash").innerText = "$" + (parseInt(window.localStorage.getItem('cash'))).toLocaleString()
    
        window.localStorage.setItem('fourthLightboxNumberLeft', parseInt(fourthLightboxNumberLeft) - 1)
        document.getElementById("fourth-lightbox-number-left").innerText = (parseInt(window.localStorage.getItem('fourthLightboxNumberLeft'))).toLocaleString()
        document.getElementById("fourth-lightbox-number-left-mobile").innerText = (parseInt(window.localStorage.getItem('fourthLightboxNumberLeft'))).toLocaleString()
    }
})

// localStorage.clear()
window.onload = function() {

    /*
        Setting initial local storage for added cash
    */
    if(window.localStorage.getItem('cash')) {
        document.getElementById("cash").innerText = "$" + (parseInt(window.localStorage.getItem('cash'))).toLocaleString()
        let loaderWidth = (parseInt(window.localStorage.getItem('cash'))*100)/100000
        document.getElementById("percentage-loader").style.width = `${loaderWidth}%`
    } else {
        window.localStorage.setItem('cash', 50000)
        document.getElementById("cash").innerText = "$" + (parseInt(window.localStorage.getItem('cash'))).toLocaleString()
        let loaderWidth = (parseInt(window.localStorage.getItem('cash'))*100)/100000
        document.getElementById("percentage-loader").style.width = `${loaderWidth}%`
    }

    /*
        Setting initial local storage for number of backers
    */ 
    if(window.localStorage.getItem('backers')) {
        document.getElementById("backers").innerText = (parseInt(window.localStorage.getItem('backers'))).toLocaleString()
    } else {
        window.localStorage.setItem('backers', 1000)
        document.getElementById("backers").innerText = (parseInt(window.localStorage.getItem('backers'))).toLocaleString()
    }
    /*
        Setting initial local storage for number of left pledges for Bamboo Stand
    */ 
    if(window.localStorage.getItem('secondLightboxNumberLeft')) {
        document.getElementById("second-lightbox-number-left").innerText = (parseInt(window.localStorage.getItem('secondLightboxNumberLeft'))).toLocaleString()
        document.getElementById("bamboo-edition-number-left").innerText = (parseInt(window.localStorage.getItem('secondLightboxNumberLeft'))).toLocaleString()
    } else {
        window.localStorage.setItem('secondLightboxNumberLeft', 101)
        document.getElementById("second-lightbox-number-left").innerText = (parseInt(window.localStorage.getItem('secondLightboxNumberLeft'))).toLocaleString()
        document.getElementById("bamboo-edition-number-left").innerText = (parseInt(window.localStorage.getItem('secondLightboxNumberLeft'))).toLocaleString()
    }

    /*
        Setting initial local storage for number of left pledges for Black Edition Stand
    */
    if(window.localStorage.getItem('thirdLightboxNumberLeft')) {
        document.getElementById("third-lightbox-number-left").innerText = (parseInt(window.localStorage.getItem('thirdLightboxNumberLeft'))).toLocaleString()
        document.getElementById("black-edition-number-left").innerText = (parseInt(window.localStorage.getItem('thirdLightboxNumberLeft'))).toLocaleString()
    } else {
        window.localStorage.setItem('thirdLightboxNumberLeft', 64)
        document.getElementById("third-lightbox-number-left").innerText = (parseInt(window.localStorage.getItem('thirdLightboxNumberLeft'))).toLocaleString()
        document.getElementById("black-edition-number-left").innerText = (parseInt(window.localStorage.getItem('thirdLightboxNumberLeft'))).toLocaleString()
    }

    /*
        Setting initial local storage for number of left pledges for Mahogany Special Edition
    */
    if(window.localStorage.getItem('fourthLightboxNumberLeft')) {
        document.getElementById("fourth-lightbox-number-left").innerText = (parseInt(window.localStorage.getItem('fourthLightboxNumberLeft'))).toLocaleString()
        document.getElementById("mahogany-edition-number-left").innerText = (parseInt(window.localStorage.getItem('fourthLightboxNumberLeft'))).toLocaleString()
    } else {
        window.localStorage.setItem('fourthLightboxNumberLeft', 1)
        document.getElementById("fourth-lightbox-number-left").innerText = (parseInt(window.localStorage.getItem('fourthLightboxNumberLeft'))).toLocaleString()
        document.getElementById("mahogany-edition-number-left").innerText = (parseInt(window.localStorage.getItem('fourthLightboxNumberLeft'))).toLocaleString()
    }

    if(window.localStorage.getItem('secondLightboxNumberLeft') == 0) {

        nothingLeftInactiveState("bamboo")
        nothingLeftInactiveStateLightbox("second")
    }

    if(window.localStorage.getItem('thirdLightboxNumberLeft') == 0) {

        nothingLeftInactiveState("black")
        nothingLeftInactiveStateLightbox("third")
    }

    if(window.localStorage.getItem('fourthLightboxNumberLeft') == 0) {

        nothingLeftInactiveState("mahogany")
        nothingLeftInactiveStateLightbox("fourth")
    }

}
