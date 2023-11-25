import React from "react";
import TarjetaCustom from "./components/TarjetaCustom";
import styled from "styled-components";


const ContentDiv = styled.div`
    border: 2px solid white;
    border-radius: 20px;
    width: 95%;
    height: 95%;
    margin: 50px;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

function App() {
  const userData = {
    name: "Pedro",
    surname: "Pedro Monzon",
    username: "Pedriii10",
    birthdate: "22/03/2003",
    age: "20",
    email: "dsadsadsadas",
    province: "Elche",
    image: "", 
  };

  return (
    <>

      <h1>Tarjeta identificativa</h1>

      <ContentDiv>
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 
        <TarjetaCustom user={userData} /> 

      </ContentDiv>
    </>
  );
}

export default App;
