import styled from "styled-components";

export const Card = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #ccc;
  background-color: white; 
  margin: 15px;
  border: 2px solid black;
  border-radius: 20px;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  background-color: black;
  color: white;
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  height: 70%;
  padding: 20px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  height: 15%;
  padding: 10px;
`;

export const Image = styled.img`
  padding: 5px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid black;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  
`;

export const AgeBirthday = styled.div`
  display: flex;
  
`;