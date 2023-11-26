import styled from "styled-components";
import ListadoPersonas from "./components/ListadoPersonas"


const ContentDiv = styled.div`
    border: 2px solid white;
    border-radius: 20px;
    width: 95%;
    height: 95%;
    margin: 50px;
    padding: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

function App() {

  return (
    <>
      <h1>Tarjeta identificativa</h1>

      <ContentDiv>
        <ListadoPersonas />
      </ContentDiv>
    </>
  );
}

export default App;
