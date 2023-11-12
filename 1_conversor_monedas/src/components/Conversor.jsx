import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import  useConversion  from "../hooks/useConversion";

function Conversor (){
/*
    const [count,setCount] = useState(0);
    const [rest,setRest] = useState(0);
    useEffect(()=> { console.log("hola") }, [])
*/

    const [euro, setEuro] = useState(0);
    const {convertir} = useConversion();

    return (
    <div>
        <label htmlFor="Conversor">Cantidad A Convertir: </label>
        <input type="number" name="conversor" onChange={(e) => setEuro(convertir(e.target.value))}/>
        <span name="resultado"> Resultado:{euro}</span>

        

       {/*  <div>
            {count}
            <button onClick={() => setCount(count+5)}> Incrementar </button>
            {rest}
            <button onClick={() => setRest(rest+5)}>dasdsa</button>
        </div>
    */}
    </div>)
}

export default Conversor;