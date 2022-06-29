import React from "react";
import { SubContainer, InfoCard, MiscInfo, Merch } from "./Components.styles";

export const Merchandise = () => {
  return (
    <>
      <Merch>
        <img src={require("../img/SMAC_Shirt-removebg.png")} />
        <SubContainer>
          <InfoCard>
            <MiscInfo>S.M.A.C. T-Shirts are available in house only.</MiscInfo>
            <MiscInfo>First come, first serve.</MiscInfo>
          </InfoCard>
        </SubContainer>
      </Merch>
    </>
  );
};
