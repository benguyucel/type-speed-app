import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { rety } from '../../redux/slice/wordSlice'
import Timer from '../Timer'
const Container = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 10%;
`
function Footer() {
    const { wordLang } = useSelector(state => state.wordSlice)
    const dispatch = useDispatch()
    return (
        <Container>
            <Timer />
            <button onClick={() => dispatch(rety(wordLang))}>Rety</button>
        </Container>
    )
}

export default Footer