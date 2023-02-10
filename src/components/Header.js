import { Link } from "react-router-dom"

//header generate the Heading as well as a help button which routes
function Header () {

    return (
        <div className="headerContainer">
            <div className="hContainer">
                <h3>Welcome to:</h3>
                <h1>Hangman.</h1>
            </div>
            <div className="helpLinkContainer">
                <Link to='/help' className="helpBtn">Help</Link>
            </div>
        </div>
    )
}

export default Header