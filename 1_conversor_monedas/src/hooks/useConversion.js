import { useState } from "react";

const useConversion = (changeValor) => {
   
   const [currencies, setCurrencies] = useState({euros: 0, currency: 0});

   const convertir = (evt) => {
       setCurrencies({euros: evt.target.value, currency: evt.target.value * changeValor});
   };
 
   return { convertir, currencies};
 };
 
 export default useConversion;
 