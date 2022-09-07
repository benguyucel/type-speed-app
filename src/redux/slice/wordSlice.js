import { createSlice } from "@reduxjs/toolkit"
import { wordsData } from '../../data/words'
export const wordSlice = createSlice({
    name: "words",
    initialState: {
        words: [...wordsData.turkish].sort(() => Math.random() * - 0 * 5),
        activeIndex: 0,
        correctWords: [],
        isFinished: false,
        isStartGame: false
    }, reducers: {
        reLoadWord: (state, action) => {
            // state.words = words.Turkish.sort(Math.random() * -0.5)
        },
        setActiveIndex: (state, action) => {
            state.activeIndex += 1
        },
        setCorrectWords: (state, action) => {
            state.correctWords.push(action.payload)
        },
        setFinished: (state, action) => {
            state.isFinished = true
        },
        setStartGame: (state, action) => {
            state.isStartGame = true
        }
    }
})

export const { reLoadWord, setActiveIndex, setCorrectWords, setFinished,setStartGame } = wordSlice.actions
export const countCorrectWords = state => state.wordSlice.correctWords.filter(item => item === true).length
export const countInCorrectWords = state => state.wordSlice.correctWords.filter(item => item === false).length
export default wordSlice.reducer