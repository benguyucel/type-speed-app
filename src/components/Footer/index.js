import React from 'react'
import styled from 'styled-components'
import Timer from '../Timer'
const Container = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 10%;
`
function Footer() {
    return (
        <Container>
              <Timer />
        </Container>
    )
}

export default Footer