import { createSlice } from "@reduxjs/toolkit"
import words from '../../data/words.json'

export const wordSlice = createSlice({
    name: "words",
    initialState: {
        words: words.Turkish
    }, reducers: {
        reLoadWord: (state, action) => {
            state.words = words.Turkish.sort(Math.random() * -0.5)
        }
    }
})

export const { reLoadWord } = wordSlice.actions
export default wordSlice.reducer