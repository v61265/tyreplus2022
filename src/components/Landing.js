import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

const LandingContainer = styled.div`
  margin: 0 auto;
`;

const LandingTitle = styled.h1`
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  color: #ffed00;
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
  font-size: 12px;
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

export default function Landing({ setStep }) {
  return (
    <LandingContainer>
      <div>
        <LandingTitle>滿意度大挑戰</LandingTitle>
        <LandingDescriptionMobile>
          你是以車為業的人嗎？ 你是嗜車如命的人嗎？
          <br />
          你的保修廠符合你呵護愛車的期待嗎？你正在尋覓更美好的保修體驗嗎？
          馳加徵求百名多元計程車司機參與問券調查，分享你的保修經驗
          <br />
          活動將抽出十位幸運車主來一場免費五星保養體驗
          <br />
          馳加「米其林認證保養」挑戰你追求完美的保養期待讓你的愛車備受尊寵華麗升級！
        </LandingDescriptionMobile>
        <LandingDescriptionDesktop>
          你是以車為業的人嗎？
          你是嗜車如命的人嗎？你的保修廠符合你呵護愛車的期待嗎？
          你正在尋覓更美好的保修體驗嗎？
          <br />
          馳加徵求百名多元計程車司機參與問券調查，分享你的保修經驗。活動將抽出十位幸運車主來一場免費五星保養體驗，
          <br />
          馳加「米其林認證保養」挑戰你追求完美的保養期待，讓你的愛車備受尊寵華麗升級！
        </LandingDescriptionDesktop>
        <ButtonWrapper>
          <PrimaryButton title='參加挑戰' onClick={() => console.log(123)} />
        </ButtonWrapper>
      </div>
    </LandingContainer>
  );
}
