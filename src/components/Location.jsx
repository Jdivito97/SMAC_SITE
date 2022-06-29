import React from "react";
import {
  Location,
  InfoCard,
  SubContainer,
  AddressInfo,
  ListHeader,
  SmallListItem,
} from "./Components.styles";
import GoogleMap from "./GoogleMap";

const LocationInfo = () => {
  return (
    <>
      <Location>
        <GoogleMap />
        <SubContainer>
          <InfoCard>
            <ListHeader>Hours</ListHeader>
            <tr>
              <SmallListItem>Mon-Thur</SmallListItem>
              <SmallListItem>5AM - 10PM</SmallListItem>
            </tr>
            <tr>
              <SmallListItem>Fri</SmallListItem>
              <SmallListItem>5AM - 9PM</SmallListItem>
            </tr>
            <tr>
              <SmallListItem>Sat</SmallListItem>{" "}
              <SmallListItem>9AM - 5PM </SmallListItem>
            </tr>
            <tr>
              <SmallListItem>Sun </SmallListItem>{" "}
              <SmallListItem>10AM - 4PM</SmallListItem>
            </tr>
          </InfoCard>
          <InfoCard>
            <ListHeader>Address</ListHeader>
            <AddressInfo>126 S. LBJ</AddressInfo>
            <AddressInfo>San Marcos, TX 78666</AddressInfo>{" "}
            <AddressInfo>512-392-0098</AddressInfo>
          </InfoCard>
        </SubContainer>
      </Location>
    </>
  );
};

export default LocationInfo;
