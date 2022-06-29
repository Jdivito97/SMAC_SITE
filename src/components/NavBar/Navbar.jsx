import React from "react";
import styled from "@emotion/styled";

export const Header = styled.nav`
  text-align: left;
  background-color: #3f4e4f;
  background-image: url("https://www.transparenttextures.com/patterns/iron-grip.png");
  margin: auto;
  height: 60px;
  padding-left: 15px;
  color: whitesmoke;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;
const Title = styled.h1`
  margin: 0;
  @media screen and (max-width: 450px) {
    font-size: 95%;
  }
`;
const Address = styled.h5`
  position: relative;
  bottom: 20px;
  color: lightgray;
  font-family: ubuntu;
  font-weight: 100;
`;
const Phone = styled.h5`
  position: relative;
  bottom: 90px;
  text-align: right;
  padding: 20px;
  color: lightgray;
  font-family: ubuntu;
  font-weight: 100;
`;

const NavBar = () => {
  return (
    <Header>
      <Title>San Marcos Athletic Club</Title>
      <Address>126 S. LBJ, San Marcos, TX, 78666</Address>
      <Phone>512-392-0098</Phone>
    </Header>
  );
};
export default NavBar;
