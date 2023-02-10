import { useSelector } from "react-redux"


function EndGameLose() {
    //show the user the word in the endgame box
    const word = useSelector((state) => state.game.word)
    
    //return simple container to say you lose.
    return (
        <div className="endGameContainer">
            <p>you lose</p>
            <p>The word was {word}</p>
        </div>
    )
}

export default EndGameLose