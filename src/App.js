import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { imgSrc, setWord, createArray, resetAll, reset } from "./store/game";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "./App.css";
//import components
import Header from './components/Header'
import Main from './components/Main'
import Keyboard from "./components/Keyboard";
import Help from "./components/Help";
import EndGameLose from "./components/EndGameLose";
import HiddenWord from "./components/HiddenWord";
import EndGameWin from "./components/EndGameWin";
//used for the app reset, leave alone
let resetCount = 0


function App() {

  // Initiating the dispatch + navigate variable using the useDispatch function.
  const dispatch = useDispatch();
  const navigate = useNavigate()

  //resets the app by calling resetAll to put all state back to initalstate
  //navigates back to the main page route '/'
  //triggers a change in a variable which is used in the useEffect for the API call
  function resetApp () {
   dispatch(resetAll())
   navigate(`/`, { replace: true })
   resetCount += 1
  }

  //calls on an API to get 5 random words, it then takes the first word of that array and dispatches it to our setWord reducer
  //which stores the word in state. Had to use this 5 word API as the single word API was having problems. 
  function apiCall() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5b0516adb7msh26c080124da8265p1f939djsna996ce9bd854',
            'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
        }
    };
    
       fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=5', options)
        .then(response => response.json())
        .then(response => {
            console.log(response[0]);
            dispatch(setWord(response[0]));
            dispatch(createArray(response[0]))
        })
        .catch(err => console.error(err));

}
//useEffect will call the API once on inital render. Then again each time the resetCount variable changes
useEffect(() =>{
  apiCall()
  console.log('API Called')
},[resetCount])


//app renders the elements
return (
  <>
    <div className="App">
    <button type='button' className="resetBtn" onClick={resetApp}>Reset</button>
    <Header />
      <Routes>
        <Route exact path='/help' element={<Help />} />
        <Route exact path='/gameover' element={<EndGameLose />} />  
        <Route exact path='/winner' element={<EndGameWin />} />
      </Routes>
      <Main />
      <HiddenWord />
      <Keyboard />
    </div>
  </> 
);
}
export default App;