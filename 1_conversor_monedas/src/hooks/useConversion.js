const useConversion = () => {
   const convertir = (valor, tipo) => {
      if (tipo === "euros") {
         return {
            euros: valor * 1,
            dolares: valor * 1.07 // Cambiado de 0.93 a 1.07
         };
      } else if (tipo === "dolares") {
         return {
            euros: valor * 0.93, // Cambiado de 1.07 a 0.93
            dolares: valor * 1
         };
      }
   }

   return { convertir };
}

export default useConversion;

