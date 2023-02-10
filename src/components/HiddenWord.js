import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function HiddenWord () {
//gets some states
const wordArray = useSelector((state) => state.game.letters)
const winner = useSelector((state) => state.game.winner)

//initialise navigate for redirects
const navigate = useNavigate()

//used for giving each letter a different key
let keysInteger = 0

//when winner state changes to true, this will call the checkWin function,
//which redirects us to the /winner so we can use Route to generate the element
useEffect(() => 
checkWin(),[winner])

    //just increments the counter each time it generates a key, so the next letter is +1
    function createKey () {
        keysInteger +=1
        return (
            keysInteger
        )
    }

    //if winner is true, reroute the browser
    function checkWin (){
        if (winner ===  true) {
            //console.log('win in hidden word triggered')
            navigate(`/winner`, { replace: true })
        }
    }

    //indivial Letterblock component is created using a letter from the state.letter array
    //generates with className hide so user cannot see until it is guessed
    function LetterBlock (props) {
        return(
            <div className='letterBlock'>
                <p id='hiddenLetter' className='letter hide' >{props.letter}</p>
            </div>
        )
    }

    //creates a LetterBlock for each letter in the state.letter array created from the API word
    //used map function to say 'for every letter in the array, make a block
    return (
            <div className="wordContainer">
                {wordArray.map((letter) =>
                <LetterBlock key={createKey()} letter={letter} />)}
            </div>
    )
}

export default HiddenWord