import { useSelector } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";
import FormComponent from "./components/Form";
import ResultModal from "./components/ResultModal";
import WordList from "./components/Word/WordList";
const GlobalStyle = createGlobalStyle`
body{
  background-color: #f9ca24;
  justify-content: center;
  align-items: center;
}
*{
  padding: 0;
  margin: 0;
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
  const { isFinished } = useSelector(state => state.wordSlice)
  return (
    <>
      <AppContainer>
        <WordList />
        <FormComponent />
        <Footer />
        {isFinished && (<ResultModal />)}
      </AppContainer>
      <GlobalStyle />
    </>

  );
}

export default App;
