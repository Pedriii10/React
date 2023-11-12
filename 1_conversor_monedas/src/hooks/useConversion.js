import { useState } from "react";

const useConversion = () => {
   
   const [currencies, setCurrencies] = useState({euros: 0, dolares: 0});

   const convertir = (evt) => {
       setCurrencies({euros: evt.target.value, dolares: evt.target.value * 1.07});
   };
 
   return { convertir, currencies};
 };
 
 export default useConversion;
 