import { useDispatch, useSelector } from "react-redux"
import { incorrectGuess, guess } from "../store/game";
//letters for keyboard
const keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function Keyboard () {
    const dispatch = useDispatch()
    const wordArray = useSelector((state) => state.game.letters)

    //create an individual key in the keybaord. Each key is a button with a click function and props passing its letter
    function CreateKey (props) {
        return (
            <button type="button" className="key" onClick={handleClick}>{props.letter}</button>
        )
    }
    //click function for each key, when clicked:
    //it checks if the letter on the key is also in the state.letters array, if it is, then it dispatches the guess reducer with
    //its innerHTML as the payload.
    //otherwise we dispatch the incorrectGuess reducer and then set the used key to .hidden
    function handleClick (e) {
        if (wordArray.includes(e.target.innerHTML)){
            dispatch(guess(e.target.innerHTML))
        }
        else {
            dispatch(incorrectGuess())
        }
        // console.log('hello')
        // console.log(e.target.innerHTML)
        // dispatch(guess(e.target.innerHTML))
        e.target.className = 'hidden'
    }

    //for every letter in the keys variable at the start,
    //create an individual key component, with the letter as its text content, the letter can also be the
    //key identifier as none of them will clash
    return (
        <div className="keyboardContainer">
            {keys.map((key) => 
            <CreateKey key={key} letter={key} />)}
        </div>
    )
}

export default Keyboard