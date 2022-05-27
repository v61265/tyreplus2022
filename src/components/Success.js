import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 17px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 35px;
  }
`;

const Thanks = styled.p`
  margin-bottom: 11px;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export default function Success() {
  return (
    <SuccessContainer>
      <Thanks>感謝您的參與 !</Thanks>
      <PrimaryButton
        title='我想更了解馳加'
        handleClick={() => window.open("https://tyreplus.com.tw/", "_blank")}
      />
    </SuccessContainer>
  );
}
