import React, { useState } from "react";
import useConversion from "../hooks/useConversion";


export function CustomInput (props) {

    return (
        <input type="number" placeholder="Introduce cantidad" onChange={props.onChange} className="input"/>
    )
}