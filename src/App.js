import { Container } from "@material-ui/core"
import FormSearch from "./components/FormSearch"
import HeaderLenta from "./components/headerLenta"

function App() {
  
  return (
    <>
      <Container>
        <HeaderLenta/>
        <FormSearch onFormSubmit={onFormSubmit}/>
      </Container>
    </>
  );
}

function onFormSubmit(data) {
  console.log(data.query)
}

export default App;