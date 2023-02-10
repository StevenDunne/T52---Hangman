import imgState1 from '../assets/state1.GIF'
import imgState2 from '../assets/state2.GIF'
import imgState3 from '../assets/state3.GIF'
import imgState4 from '../assets/state4.GIF'
import imgState5 from '../assets/state5.GIF'
import imgState6 from '../assets/state6.GIF'
import imgState7 from '../assets/state7.GIF'
import imgState8 from '../assets/state8.GIF'
import imgState9 from '../assets/state9.GIF'
import imgState10 from '../assets/state10.GIF'
import imgState11 from '../assets/state11.GIF'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

//images are placed into an array,
//then when we update the state, that will affect which index in the array
//we source the img from

function RenderImg () {
//arrary of img sources
const imgsArray = [imgState1, imgState2, imgState3, imgState4,
imgState5, imgState6, imgState7, imgState8, imgState9, imgState10,
imgState11]

//get the imgSrc state
const imgSrc = useSelector((state) => state.game.imgSrc)
//initalise navigate
const navigate = useNavigate()

//used to check if you imgSrc has reached state 10, then route to /gameover 
function checkEnd(){
    if (imgSrc === 10) {
        navigate(`/gameover`, { replace: true })
    }
}

//every time the imgsrc changes, we check if it's at 10 to generate the loss
useEffect(() =>{
    checkEnd()
  },[imgSrc])

    //returns a container with the img, using the imgArray as its src
    return (
        
            <div className="imgContainer">
                <img src={imgsArray[imgSrc]} alt='hangman' />
            </div>
        
    )
}

export default RenderImg