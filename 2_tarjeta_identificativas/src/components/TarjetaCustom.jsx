
import { Card, Header, Body, Footer, Image, UserDetails, AgeBirthday } from "../styles/StyleCard";



const TarjetaCustom = (props) => {

  console.log(props)

  return (
    <Card>
      <Header>
        <h2>{props.username}</h2>
      </Header>
      <Body>
        <Image src={props.image} alt="User" />
        <UserDetails>
          <span>{props.name}</span>
          <span>{props.surname}</span>
          <AgeBirthday>
            <span>{props.birthdate}</span>
            <span>({props.age})</span>
          </AgeBirthday>
        </UserDetails>
      </Body>
      <Footer>
        <span>{props.email}</span>
        <span>{props.province}</span>
      </Footer>
    </Card>
  );
};

export default TarjetaCustom;
