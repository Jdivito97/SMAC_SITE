import React from "react";
import MainBanner from "../Banner";
import { DetailText, ListHeader, Section } from "../Components.styles";
import FeaturesInfo from "../Features";
import LocationInfo from "../Location";
import RatesInfo from "../Rates";
import { Merchandise } from "../Merch";

const LandingPage = () => {
  return (
    <>
      <MainBanner />
      <Section>
        <ListHeader>
          Rates
          <DetailText>All rates include sales tax</DetailText>
        </ListHeader>
      </Section>
      <RatesInfo />
      <Section>
        <ListHeader>Open every day of the year without exception.</ListHeader>
      </Section>
      <LocationInfo />

      <Section />
      <FeaturesInfo />
      <Section>
        <ListHeader>Merchandise</ListHeader>
      </Section>
      <Merchandise />
    </>
  );
};

export default LandingPage;
