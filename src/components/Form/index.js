import { Form, Input, Item } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveIndex, setCorrectWords, setStartGame } from '../../redux/slice/wordSlice'

function FormComponent() {
    const { words, activeIndex, correctWords, isFinished } = useSelector(state => state.wordSlice)
    const dispatch = useDispatch()
    const [userInput, setUserInput] = useState("")
    const handleChange = (value) => {
        if (value.endsWith(' ')) {
            dispatch(setActiveIndex()); setUserInput('')
            words[activeIndex] === userInput ? dispatch(setCorrectWords(true)) : dispatch(setCorrectWords(false))
        } else {
            setUserInput(value)
        }
    }
    return (
        <Form.Item style={{ marginTop: 10 }}>
            <Input onKeyUp={() => dispatch(setStartGame())} disabled={isFinished} style={{ borderRadius: 5 }} value={userInput} onChange={(e) => handleChange(e.target.value)} />
        </Form.Item>
    )
}

export default FormComponent