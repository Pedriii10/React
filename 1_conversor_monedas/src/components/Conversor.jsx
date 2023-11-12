import useConversion from "../hooks/useConversion";

const Conversor = (props) => {
  const { convertir, currencies } = useConversion(props.currValue);
  
  console.log(props);

  return (
    <div>
      <input type="number" placeholder="Introduce cantidad" onChange={convertir} />
      <br/>
      <span name="resultadoEuro">Euros: {currencies.euros}</span>
      <br/>
      <span name="resultadoDolar">Dolares: {currencies.dolares}</span><span>{props.currSymbol}</span>
    </div>
  );
};

export default Conversor;
