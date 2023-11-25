import React from "react";
import { Card, Header, Body, Footer, Image, UserDetails, AgeBirthday } from "../styles/StyleCard";



const TarjetaCustom = ({ user }) => {
  const { name, surname, username, birthdate, age, email, province, image } = user;

  return (
    <Card>
      <Header>
        <h2>{username}</h2>
      </Header>
      <Body>
        <Image src={image} alt="User" />
        <UserDetails>
          <span>{name}</span>
          <span>{surname}</span>
          <AgeBirthday>
            <span>{birthdate}</span>
            <span>({age})</span>
          </AgeBirthday>
        </UserDetails>
      </Body>
      <Footer>
        <span>{email}</span>
        <span>{province}</span>
      </Footer>
    </Card>
  );
};

export default TarjetaCustom;
