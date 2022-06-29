import React from "react";
import {
  Banner,
  Logo,
  Heading,
  TextBlock,
  LogoContainer,
  VerticalBar,
  Details,
  DetailText,
  IntroContainer,
  DetailsContainer,
} from "./Components.styles";

const MainBanner = () => {
  const date = new Date();

  const year = date.getFullYear();
  console.log({ year });
  const years = year - 1976;
  return (
    <Banner>
      <IntroContainer>
        <TextBlock>
          <Heading>
            An old school iron gym for getting fit, and staying fit.
          </Heading>
          <DetailText>
            For the past {years} years we have kept our rates the same. You
            won’t find any place else where you can workout for just{" "}
            <strong>$2.00</strong>.
          </DetailText>
        </TextBlock>
        <VerticalBar />
        <LogoContainer>
          <Logo src={require("../img/SmacLogo.png")} alt="S.M.A.C. Logo" />
        </LogoContainer>
      </IntroContainer>

      <DetailsContainer>
        <Details>
          <DetailText>
            No Contracts | No Bankdrafts | <strong>No Nonsense</strong> | No
            Sales Pressure | No Startup Fees
          </DetailText>
        </Details>
      </DetailsContainer>
    </Banner>
  );
};

export default MainBanner;
