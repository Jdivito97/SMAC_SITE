import React from "react";
import Carousel from "./Carousel";
import { MiscInfo, SubContainer2, InfoCard, Info } from "./Components.styles";

const FeaturesInfo = () => {
  return (
    <>
      <Info>
        <SubContainer2>
          <InfoCard>
            <MiscInfo>
              SMAC customers can now use the parking lot behind AquaBrew. This
              includes spots under the white metal auning and the uncovered
              spaces directly across.
            </MiscInfo>
            <MiscInfo>
              Our equipment includes Precor Ellipticals, LifeFitness Bikes &
              Treadmills, Hammer Strength, Rogue, Matrix, Icarian Equipment, and
              Freeweights
            </MiscInfo>
            <MiscInfo>Friendly Atmosphere </MiscInfo>
            <MiscInfo>Located Downtown</MiscInfo>
          </InfoCard>
        </SubContainer2>
        <Carousel />
      </Info>
    </>
  );
};
export default FeaturesInfo;
