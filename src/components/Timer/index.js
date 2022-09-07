import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setFinished } from '../../redux/slice/wordSlice'

const TimerContainer = styled.span`
display: flex;
justify-content: center;
padding: 10px;
border-radius: 2px;
background-color: #7ed6df;
font-size: 15px;
font-weight: bold;
color: #130f40;
`
function Timer() {
    const { isStartGame } = useSelector(state => state.wordSlice)
    const dispatch = useDispatch();
    const [timer, setTimer] = useState(60)
    const countDown = () => {
        setTimeout(() => setTimer(prev => prev - 1), 1000)
    }
    useEffect(() => {
        if (isStartGame === true) timer !== 0 && countDown()
        timer === 0 && dispatch(setFinished())
    }, [timer, isStartGame])

    return (
        <TimerContainer>{timer === 60 ? "1:00" : timer < 10 ? `0${timer}` : timer}</TimerContainer>
    )
}

export default Timer