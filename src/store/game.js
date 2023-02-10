import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
name: "game",
initialState: {
guesses: 0,
word: '',
letters: [],
imgSrc: 0,
winner: false,
reset: 0
},

reducers: {

incorrectGuess: (state) => {
        state.imgSrc += 1;
        console.log(`${state.imgSrc} incorrect guesses`)        
    },

guess: (state, action) => {
    let arrayLength = document.getElementsByClassName('hide').length
    state.guesses +=1;
    if(state.letters.includes(action.payload)) {
        console.log('correct guess')
        let elements = document.getElementsByClassName('hide')
        for (let i=0; i<elements.length; i++){
            if(elements[i].innerHTML === action.payload){
                elements[i].classList = 'letter'
            }
        }
        console.log(elements)
    }
    //win condition
    if( arrayLength === 1 ){
        console.log('Winner')
        state.winner = true
        console.log(state.winner)
    }

},

setWord: (state, action) => {
    state.word = action.payload
    console.log(action.payload)
},

createArray: (state, action) => {
    console.log(action.payload)
    let array = action.payload.split('')
    state.letters = array
    console.log(state.letters)
},

resetAll: (state) => {
    console.log('reset')
    state.imgSrc = 0
    state.letters = []
    state.guesses = 0
    state.word = ''
    state.winner = false 
    state.reset += 1
},

},
});

export const { incorrectGuess, guess, setWord, createArray, resetAll, winner, reset } = gameSlice.actions;

export default gameSlice.reducer;