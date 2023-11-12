import useConversion from "../hooks/useConversion";

const Conversor = () => {
  const { convertir, currencies } = useConversion();
  
  
  return (
    <div>
      <input type="number" placeholder="euro" onChange={convertir}/>
      <br/>
      <span name="resultadoEuro">Euros: {currencies.euros}</span>
      <br/>
      <span name="resultadoDolar">Dolares: {currencies.dolares}</span>
      
    </div>
  );
};

export default Conversor;
