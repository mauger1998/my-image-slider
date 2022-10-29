import "./style.css"
import SlideOne from "./SlideOne.png"
import SlideTwo from "./SlideTwo.png"
import SlideThree from "./SlideThree.png"


const track = document.querySelector(".imageTrack")
const slides = document.querySelectorAll("li")
const imageList = document.querySelectorAll(".image")
const nextButton = document.querySelector(".nextButton")
const prevButton = document.querySelector(".prevButton")
const slidesArray = Array.from(slides)


const slideWidth = 400


nextButton.addEventListener("click", (e) => {
    let currentSlide = document.querySelector(".currentSlide")
    let nextSlide = currentSlide.nextElementSibling

    if (nextSlide != null) 
    {
        let amountToMove = nextSlide.getBoundingClientRect().width
        track.style.transform = `translateX(-${amountToMove * slidesArray.indexOf(nextSlide)}px)`
        currentSlide.classList.remove("currentSlide")
        nextSlide.classList.add("currentSlide")
    
        currentSlide = nextSlide
        nextSlide = currentSlide.nextElementSibling
        console.log(nextSlide)
    } else
    {

    }

    


})



console.log(slideWidth)

imageList[0].src = SlideOne
imageList[1].src = SlideTwo
imageList[2].src = SlideThree


