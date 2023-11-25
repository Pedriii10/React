import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #ccc;
  padding: 20px;
  background-color: white; 
  margin: 15px
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  background-color: black;
  color: white;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  height: 70%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  height: 15%;
`;

const Image = styled.img`
  padding: 5px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid black;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  
`;

const AgeBirthday = styled.div`
  display: flex;
  
`;

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
