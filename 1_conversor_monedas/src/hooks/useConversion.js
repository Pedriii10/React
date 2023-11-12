const useConversion = () => {

   const convertir = (euros) => {

        return euros * 1.07;
   }

   return {convertir};
}

export default useConversion;