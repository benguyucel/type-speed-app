import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background-color: #f9ca24;
  justify-content: center;
  align-items: center;

}
`
const AppContainer = styled.div`
width:100%;
max-width: 900px;
background-color: #f6e58d;
min-height: 500px;
border-radius: 10px;
margin:10px auto 0 auto;
`
const App = () => {
  return (
    <>
      <AppContainer>
      </AppContainer>

      <GlobalStyle />
    </>

  );
}

export default App;
