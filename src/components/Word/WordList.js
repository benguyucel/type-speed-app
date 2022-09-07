import { nanoid } from '@reduxjs/toolkit'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Word from './Word'
const Container = styled.div`
padding: 10px;
background-color: #fff;
filter: drop-shadow(0px 0px 2px #000);
border-radius: 3px;
min-height: 280px;
font-family: 'Roboto', sans-serif;
font-weight: 600;
`
function WordList() {
    const { words, activeIndex, correctWords } = useSelector(state => state.wordSlice)
    return (
        <>
            <Container>
                {words.map((word, idx) => (
                    <Word key={nanoid()} word={word} current={idx === activeIndex} isCorrect={correctWords[idx]} />
                ))}
            </Container>
        </>
    )
}

export default memo(WordList)