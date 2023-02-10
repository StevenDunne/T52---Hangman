import { useSelector } from "react-redux"
function EndGameWin() {
    const word = useSelector((state) => state.game.word)


    //generates when the user wins the game
    return (
        <div className="endGameContainer">
            <p>You win!</p>
            <p>The word was {word}</p>
            <p>Hit the reset button to play again!</p>
        </div>
    )
}

export default EndGameWin