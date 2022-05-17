import styled from "styled-components";
import { useRef, useEffect } from "react";
import CloseIcon from "../assets/close.svg";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  background: rgba(0, 153, 68, 1);
  width: 100vw;
  min-height: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  z-index: 110;
`;

const Container = styled.div`
  margin: 69px 14px;
  width: calc(100% - 28px);
  height: fit-content;
  background: #fff;
  padding: 20px 16px;
  position: relative;
  z-index: 120;
  @media screen and (min-width: 768px) {
    padding: 20px 46px;
    max-width: 731px;
  }
`;

const SvgClose = styled.div`
  width: 16px;
  height: 16px;
  background: url(${CloseIcon});
  background-size: cover;
  position: absolute;
  top: 8px;
  right: 8px;
  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 16px;
    right: 16px;
  }
`;

const Title = styled.h2`
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #009944;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 35px;
  }
`;

const Content = styled.p`
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #009944;
  margin-top: 36px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 23px;
    margin-tiop: 14px;
  }
`;

const Mask = styled.div`
  width: ${(props) => props.width};
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: #77bc20;
  z-index: 105;
`;

export default function LightBox({
  setShowLightBox,
  lightBoxLinkRef,
  lightBoxLinkOnFormRef,
  width,
}) {
  const lightBoxRef = useRef();

  function handleClick(e) {
    if (
      !lightBoxRef?.current?.contains(e.target) &&
      !lightBoxLinkRef.current?.contains(e.target) &&
      !lightBoxLinkOnFormRef.current?.contains(e.target)
    ) {
      setShowLightBox(false);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <Background>
      <Mask width={width} />
      <Container ref={lightBoxRef}>
        <SvgClose onClick={() => setShowLightBox(false)} />
        <Title>活動辦法與個資說明</Title>
        <Content>
          󠄀隱私權使用政策
          <br />
          個人資料蒐集聲明
          <br />
          <br />
          1.
          您了解及同意所留下的資料，主辦單位基於贈品抽獎活動、行銷、問題統計分析之目的範圍內，可進行蒐集、處理及利用。除此之外，主辦單位不會將您的資料提供給他人。
          <br />
          2. 除法令另有規定或本活動小組執行職務、業務所必須外，您可透過活動信箱
          salesteam@mirrormedia.mg，請主辦單位對上開資料(1)查閱或閱覽、(2)製給複製本、(3)補充或更正、(4)停止蒐集、處理或利用、(5)刪除。本告知事項內容如有更新，請詳見主辦單位網站公告。{" "}
          <br />
          3. 若您未提供相關個人資料，將影響您參加本活動之資格。
          <br />
          <br />
          活動注意事項
          <br />
          <br />
          1.本活動由馳加與精鏡傳媒股份有限公司(以下簡稱主辦單位)共同舉辦。
          <br />
          2.本活動僅限在中華民國台灣（包含金門、馬祖、澎湖）地區設有住居所之本國人或外國人參加。
          <br />
          3.本活動體驗及換胎服務以實物為準，中獎者不得要求折現或轉換它項產品，主辦單位保留更換等值產品之權利，相關內容以門市公告為主，主辦單位保留審核之權利。
          <br />
          4.獲獎者所填寫的聯繫方式如電話或地址等相關資訊不完整，導致無法聯繫，將不具獲獎資格。
          <br />
          5.依中華民國稅法規定，中獎價值如超過新台幣$1,000元(含)以上者，獎項所得將列入個人年度綜合所得稅申報，故得獎人需依規定填寫領獎收據及繳交兌獎者身分證正反面影本(若未達法定年齡，尚無身分證者，請附上戶口名簿影本，並須由父母或監護人代為領取)，在活動主辦單位確認兌獎資格後，方可領獎。若贈品所得總額超過NT$20,000，需另繳納10%稅額，若無法配合，則視為自動棄權，不具得獎資格。
          <br />
          6.獲獎者簽收獎項後，若有遺失或被竊等喪失佔有之情形，主辦單位不負補發獎項之責任。
          <br />
          7.本活動如遇其他不可抗力之事由者，得順延之；主辦單位保有取消、終止、修改或暫停、審核民眾參加本活動資格及解釋本活動相關事項之權利，同時保留對此活動之所有事宜最終解釋與裁決的權利。
          <br />
          8.關於本活動的細節如有任何問題請聯繫活動小組：salesteam@mirrormedia.mg
          。<br />
        </Content>
      </Container>
    </Background>
  );
}
