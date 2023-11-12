import useConversion from "../hooks/useConversion";
import { CustomInput } from "./CustomInput";

const Conversor = (props) => {
  const { convertir, currencies } = useConversion(props.currValue);
  
  console.log(props);

  return (
    <div>
      <CustomInput onChange={convertir}/>
      <br/>
      <span name="resultadoEuro">Euros: {currencies.euros}</span>
      <br/>
      <span name="resultadoDolar">{props.name} {currencies.currency}</span><span>{props.currSymbol}</span>
    </div>
  );
};

export default Conversor;
