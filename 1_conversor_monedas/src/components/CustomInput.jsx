import React, { useState } from "react";
import useConversion from "../hooks/useConversion";


export function CustomInput ({currencySymbol, value, nameSymbol}) {
    
    const { convertir } = useConversion();

    return (
        <div>
            <br></br>
            <input type="number" placeholder={`${currencySymbol} ${nameSymbol}`} onChange={(e) => handleInputChange(e.target.value, {nameSymbol})}/>
            <br></br>
            <span name="resultadoEuros">Euros: </span>
            <br></br>
            <span name="resultadoDolares">Dolares: </span>
            <br></br>
        </div>
    )
}