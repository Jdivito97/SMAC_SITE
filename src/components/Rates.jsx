import React from "react";
import {
  Info,
  About,
  Rates,
  AboutContainer,
  ListItem,
  ListHeader,
} from "./Components.styles";
const RatesInfo = () => {
  return (
    <>
      <Info id="pricing">
        <Rates>
          <ListHeader>Men</ListHeader>

          <br />
          <tr>
            <ListItem>1 month</ListItem>
            <ListItem> $27.00</ListItem>
          </tr>
          <tr>
            <ListItem>2 months</ListItem>
            <ListItem> $47.00</ListItem>
          </tr>
          <tr>
            <ListItem>3 months</ListItem> <ListItem> $69.00</ListItem>
          </tr>
          <tr>
            {" "}
            <ListItem>6 months</ListItem> <ListItem> $130.00</ListItem>
          </tr>
          <tr>
            <ListItem>1 year </ListItem> <ListItem> $185.00 </ListItem>
          </tr>
        </Rates>
        <Rates>
          <ListHeader>Women</ListHeader>
          <br />
          <tr>
            <ListItem>1 month</ListItem> <ListItem> $17.00</ListItem>
          </tr>
          <tr>
            {" "}
            <ListItem>2 months</ListItem> <ListItem> $31.00</ListItem>
          </tr>
          <tr>
            <ListItem>3 months</ListItem> <ListItem>$44.00</ListItem>
          </tr>
          <tr>
            {" "}
            <ListItem>6 months</ListItem>
            <ListItem> $80.00</ListItem>
          </tr>
          <tr>
            <ListItem>1 year</ListItem> <ListItem>$135.00</ListItem>
          </tr>
        </Rates>
      </Info>
      <Info>
        <Rates>
          <ListHeader>Single Day Workout $2.00</ListHeader>
        </Rates>
        <Rates>
          <ListHeader>Single Week Workout $9.00</ListHeader>
        </Rates>
      </Info>

      <Info>
        <AboutContainer>
          <About>No fuss, no TVs, no sales pressure, no distractions.</About>
        </AboutContainer>
      </Info>
    </>
  );
};

export default RatesInfo;
