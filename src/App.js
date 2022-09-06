import styled, { createGlobalStyle } from "styled-components";
import FormComponent from "./components/Form";
import WordContainer from "./components/Word/WordContainer";

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
border-radius: 10px;
margin:10px auto 0 auto;
padding: 10px;

`
const App = () => {
  return (
    <>
      <AppContainer>
        <WordContainer />
        <FormComponent />
      </AppContainer>
      <GlobalStyle />
    </>

  );
}

export default App;
