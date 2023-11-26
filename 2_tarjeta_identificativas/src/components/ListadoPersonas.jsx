import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import TarjetaCustom from "./TarjetaCustom";

const ListadoPersonas = () => {
  const { data, error, fetchData, isLoading} = useFetch();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data)

  return (
    <div>
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

