import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

const WinnersContainer = styled.div`
  font-family: "Noto Sans TC";
  font-style: normal;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;

  span {
    width: fit-content;
    margin: 0 auto;
  }
`;

const WinnersTitle = styled.h1`
  margin-top: 60px;
  font-weight: 900;
  font-size: 14px;
  line-height: 21px;
  color: #ffed00;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 35px;
  }
`;

const WinnersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 360px;
  margin-top: 32px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    max-width: 544px;
    margin-top: 32px;
    margin-bottom: 60px;
  }
`;

const WinnersItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  flex: 50%;
  margin-top: 8px;
  text-align: start;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 35px;
    margin-top: 36px;
  }
`;

const WinnersHint = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffed00;
  margin: 0 23px 32px 23px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 23px;
    margin-bottom: 60px;
  }
`;

export default function Success({ winners }) {
  return (
    <WinnersContainer>
      <WinnersTitle>得獎名單公佈</WinnersTitle>
      <WinnersList>
        {winners.map((winner) => (
          <WinnersItem>{winner}</WinnersItem>
        ))}
      </WinnersList>
      <WinnersHint>
        主辦單位將於06/16-06/17與得獎者聯繫，如未收到通知，可來電02-6633-3834或email至salesteam@mirrormedia.mg詢問
      </WinnersHint>
      <PrimaryButton
        title='前往馳加官網'
        handleClick={() => window.open("https://tyreplus.com.tw/", "_blank")}
      />
    </WinnersContainer>
  );
}
