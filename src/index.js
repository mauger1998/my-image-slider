import "./style.css"
import SlideOne from "./SlideOne.png"
import SlideTwo from "./SlideTwo.png"
import SlideThree from "./SlideThree.png"


const track = document.querySelector(".imageTrack")
const slides = document.querySelectorAll("li")

const imageList = document.querySelectorAll(".image")

imageList[0].src = SlideOne
imageList[1].src = SlideTwo
imageList[2].src = SlideThree


