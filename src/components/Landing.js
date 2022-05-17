import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import CoverImg from "../assets/cover.png";
import CoverMobileImg from "../assets/cover-mobile.png";

const LandingContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 128px;
`;

const LandingTitle = styled.h1`
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  color: #ffed00;
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const LandingDescriptionMobile = styled.p`
  margin: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 180.02%;
  text-align: center;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const LandingDescriptionDesktop = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: inherit;
    margin: 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 180.02%;
    text-align: center;
    color: #ffffff;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Cover = styled.img`
  width: 100vw;
  height: 0;
  padding-bottom: 66%;
  background: url(${CoverMobileImg});
  background-size: cover;
  @media screen and (min-width: 320px) {
    padding-bottom: 42%;
    background: url(${CoverImg});
    background-size: cover;
  }
`;

export default function Landing({ setStep }) {
  function handleClickStart() {
    setStep(1);
  }
  return (
    <LandingContainer>
      <div>
        <Cover />
        <LandingTitle>滿意度大挑戰</LandingTitle>
        <LandingDescriptionMobile>
          你是以車為業的人嗎？你是愛車如命的人嗎？
          <br />
          你的保修廠符合你呵護愛車的期待嗎？你正在尋覓更美好的保養體驗嗎？
          <br />
          馳加徵求百名多元計程車司機參與問卷調查，分享你的保養經驗
          <br />
          活動將抽出十位幸運車主來一場免費五星保養及換胎體驗
          <br />
          馳加「米其林認證保養」挑戰你追求完美的保養期待
          <br />
          讓你的愛車備受尊寵華麗升級
          <br />
        </LandingDescriptionMobile>
        <LandingDescriptionDesktop>
          你是以車為業的人嗎？你是愛車如命的人嗎？
          你的保修廠符合你呵護愛車的期待嗎？你正在尋覓更美好的保養體驗嗎？
          <br />
          馳加徵求百名多元計程車司機參與問卷調查，分享你的保養經驗
          <br />
          活動將抽出十位幸運車主來一場免費五星保養及換胎體驗
          <br />
          馳加「米其林認證保養」挑戰你追求完美的保養期待，
          讓你的愛車備受尊寵華麗升級
          <br />
        </LandingDescriptionDesktop>
        <ButtonWrapper>
          <PrimaryButton title='參加挑戰' handleClick={handleClickStart} />
        </ButtonWrapper>
      </div>
    </LandingContainer>
  );
}
