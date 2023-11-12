import React from "react";
import { useState } from "react";
import useConversion from "../hooks/useConversion";

function Conversor() {
  const [euro, setEuro] = useState(0);
  const [dolar, setDolar] = useState(0);
  const { convertir } = useConversion();

  const handleInputChange = (value, type) => {
    const convertedValue = convertir(value, type);
    if (type === "euros") {
      setEuro(value);  
      setDolar(convertedValue.dolares);
    } else if (type === "dolares") {
      setDolar(value);
      setEuro(convertedValue.euros);
    }
  };
  
  

  return (
    <div>
      <input type="number" placeholder="euros" onChange={(e) => handleInputChange(e.target.value, "euros")} />
      <span name="resultado">Dolares: {convertir(euro, "euros").dolares}</span>
      <br />
      <input type="number" placeholder="dolares" onChange={(e) => handleInputChange(e.target.value, "dolares")} />
      <span name="resultado">Euros: {convertir(dolar, "dolares").euros}</span>
    </div>
  );
}

export default Conversor;
