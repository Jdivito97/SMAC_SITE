import styled from "@emotion/styled";
import img from "../img/16-dumbbell-wallpaper-0.jpg";
import { ReactComponent as VerticalLine } from "../svg/VerticalLine.svg";
import { Header } from "./NavBar/Navbar.jsx";
import { Swiper, SwiperSlide } from "swiper/react";

export const Section = styled(Header)`
  text-align: center;
  height: fit-content;
`;

export const VerticalBar = styled(VerticalLine)`
  margin: 50px;
  width: 20px;
  @media screen and (max-width: 1097px) {
    display: none;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center;
  height: 300px;
`;

export const Banner = styled.div`
  padding: 10px;
  min-height: 600px;
  background: linear-gradient(
      rgba(100, 100, 100, 0.8),
      rgba(100, 100, 100, 0.8)
    ),
    url(${img});
  background-size: 100%;
  background-repeat: no-repeat;
  @media screen and (max-width: 990px) {
    size-adjust: 2em;
    background-size: 1500px;
  }
`;

export const LogoContainer = styled.div`
  margin: 0;
  min-width: fit-content;
  min-height: fit-content;
`;
export const Logo = styled.img`
  @media screen and (max-width: 400px) {
    size-adjust: 2em;
  }
`;

export const TextBlock = styled.div`
  text-align: center;

  height: fit-content;
  left: 5%;
  top: 20%;
  flex-direction: column;
  max-width: 650px;
`;
export const Heading = styled.h1`
  font-size: 2.9rem;
  font-weight: 900;
  color: whitesmoke;
`;
export const About = styled.h3`
  text-align: center;
  color: #3f4e4f;
`;
export const DetailsContainer = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 976px) {
    margin: 350px 10px 0px 20px;
  }
  @media screen and (max-width: 410px) {
    margin-top: 400px;
  }
`;
export const Details = styled.div`
  background-image: url("https://www.transparenttextures.com/patterns/iron-grip.png");
  height: fit-content;
  background-color: #3f4e4f;
  border-radius: 9px;
  width: fit-content;
`;

export const DetailText = styled.h3`
  margin: 5px;
  color: lightgray;
  padding: 5px;
  font-family: ubuntu;
  font-weight: 100;
  font-size: 1rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  margin: 0;
  background-color: whitesmoke;
`;

export const AboutContainer = styled.div`
  width: 40vw;
`;
export const RatesContainer = styled.div``;

export const Rates = styled.div`
  text-align: center;
  background-color: #787a91;
  background-image: url("https://www.transparenttextures.com/patterns/iron-grip.png");
  border-radius: 9px;
  height: fit-content;
  width: 280px;
  margin: 5px;
  padding: 30px;
`;

export const ListItem = styled.td`
  list-style: none;
  text-align: center;
  width: 170px;
  color: whitesmoke;
  font-size: 1.5rem;
`;

export const SmallListItem = styled(ListItem)`
  font-size: 1.15rem;
  padding: 2px;
`;

export const ListHeader = styled.h3`
  font-size: 2rem;
  margin: 0;
  color: whitesmoke;
`;

export const Location = styled(Info)`
  display: flex;
  flex-wrap: wrap;
  background-color: #3f4e4f;
  background-image: url("https://www.transparenttextures.com/patterns/iron-grip.png");
`;
export const SubContainer = styled(Location)`
  flex-direction: column;
`;
export const SubContainer2 = styled(SubContainer)`
  background-color: whitesmoke;
  background-image: none;
`;
export const InfoCard = styled(Rates)`
  min-height: fit-content;
  margin: 17px;
`;

export const MapEmbed = styled.iframe`
  margin: 20px;
  border: none;
  border-radius: 9px;
  @media screen and (max-width: 700px) {
    max-width: 500px;
  }
  @media screen and (max-width: 600px) {
    max-width: 342px;
    max-height: 400px;
  }
`;

export const AddressInfo = styled.li`
  color: whitesmoke;
  font-size: 1.5rem;
  list-style: none;
`;

export const MiscInfo = styled(AddressInfo)`
  color: whitesmoke;
  font-size: 1.1rem;
  margin: 12px;
  list-style: none;
  text-align: left;
`;

export const CustomSwiper = styled(Swiper)`
  height: 460px;
  border-radius: 9px;
  width: 600px;
  margin: 40px 20px;
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;

export const Features = styled(Info)``;

export const Merch = styled(Location)``;
