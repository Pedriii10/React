import  { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import TarjetaCustom from "./TarjetaCustom";

const ListadoPersonas = () => {
  const { data, error, fetchData, isLoading} = useFetch();
  const [resultsNumber, setResultsNumber] = useState(5);

  useEffect(() => {
    fetchData(resultsNumber);
  }, [fetchData, resultsNumber]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data)

  return (
    <div>
      <select onChange={(evt) => setResultsNumber(evt.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>

      {isLoading && "Cargando..."}
  
      {data &&
        data.map((user, index) => (
         <TarjetaCustom key={index} user={user} 
            name={user.name.first} 
            surname={user.name.last} 
            username={user.login.username} 
            birthdate={new Date(user.dob.date).toLocaleDateString()}
            age={user.dob.age}
            email={user.email}
            province={user.location.city}
            image={user.picture.large}/>
        ))}
    </div>
  );
};

export default ListadoPersonas;

