import { Link } from "react-router-dom"

//displays a simple container with information on how to play hangman
function Help () {
    return (
        <div className="helpContainer">
            <div>
                <p>In the game of hangman you must guess the hidden word. However
                    for every incorrect guess you make, you will be one step closer to
                    the demise of our stick man.
                </p>
                <p>Click a letter on the keyboard to begin guessing and see if you can save him.</p>
                <p>Good luck. He's counting on you.</p>
            </div>
            <Link to='/' className="closeBtn">Close</Link>
        </div>
    )
}

export default Help 