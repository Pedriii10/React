import React from "react";
import Conversor from "./components/Conversor";
import { CustomInput } from "./components/CustomInput";

function App() {
  return (
    <div className="main">

      <h1>Conversor de Moneas</h1>
      
      <Conversor currSymbol="$" initValue={15} currValue={1.07} name="dolar"/>
      <Conversor currSymbol="฿" initValue={15} currValue={38.41} name="bath"/>
      <Conversor currSymbol="₵" initValue={15} currValue={0.079} name="cedi"/>
    </div>
  );
}

export default App;

