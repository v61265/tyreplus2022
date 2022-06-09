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
          <b>活動時間│2022/06/1-2022/06/12</b>
          <br />
          <b>活動對象│極度呵護愛車的多元計程車司機</b>
          <br />
          <b>活動獎項│免費米其林認證保養+換胎服務*10名</b>
          <br />
          <br />
          台灣米其林輪胎股份有限公司號召全台百位司機參加「米其林認證保養 VS.
          最強職人
          滿意度大挑戰」活動，車主只要確實填寫問卷，將有機會獲得「免費體驗米其林認證保養+換胎服務」，獎項包含輪胎更換（4顆）及四輪定位（註1）、機油更換一次、愛車健檢服務一次（註2）；10位幸運獲獎車主將於06/15公佈於活動網頁中，並於06/16-06/17由專人電話通知並安排體驗時間（註3），讓您的愛車享受五星保養服務。
          <br />
          <br />
          註1：輪胎型號將以原廠配置規格與台灣米其林官方在台販售花紋為主，若車主自行改裝升級輪胎者，須補足差價，差價包含輪胎售價以及相關升級造成之拆卸定位等技術服務費用，若遇指定規格缺貨或改裝規格有行車安全之虞，台灣米其林有權改提供同規格之其他花紋商品或取消獲獎資格，贈品不得轉賣，換胎體驗結束後不會免費提供重新拆除/安裝；馳加可協助回收車主舊有輪胎，若車主有需要亦可自行將卸除之舊胎自行載回。
          <br />
          註2：健檢服務為體驗保養及換胎服務時當場提供，若健檢後須追加修理項目由車主自付。
          <br />
          註3：06/16-06/17專人電話通知並安排於06/20-07/03期間體驗，體驗過程將全程由鏡週刊拍攝及採訪體驗心得，獲獎車主同意肖像權及採訪內容授權馳加/鏡週刊於報導及行銷（廣告）等使用，若無法聯繫上、無法於體驗期間內體驗或不同意授權，視同放棄得獎資格。
          <br />
          <br />
          <b>＝＝＝＝＝＝＝＝＝＝活動注意事項＝＝＝＝＝＝＝＝＝＝</b>
          <br />
          1.
          本活動由台灣米其林輪胎股份有限公司與精鏡傳媒股份有限公司（以下簡稱主辦單位）共同舉辦。
          <br />
          2.
          本活動僅限在中華民國台灣（包含金門、馬祖、澎湖）地區設有住居所之本國人或外國人參加。
          <br />
          3.
          本活動獎品以實際體驗及服務內容為準，中獎者不得要求折現或轉換它項產品，主辦單位保留更換等值產品之權利，相關內容以服務中心公告為主，主辦單位保留審核之權利。
          <br />
          4.
          獲獎者所填寫的聯繫方式如電話或地址等相關資訊不完整，導致無法聯繫，將不具獲獎資格。
          <br />
          5.
          依中華民國稅法規定，中獎價值如超過新台幣1,000元（含）以上者，獎項所得將列入個人年度綜合所得稅申報，故得獎人需依規定填寫領獎收據及繳交兌獎者身分證正反面影本（若未達法定年齡，尚無身分證者，請附上戶口名簿影本，並須由父母或監護人代為領取），在活動主辦單位確認兌獎資格後，方可領獎。若贈品所得總額超過新台幣20,000元，需另繳納10%稅額，若無法配合，則視為自動棄權，不具得獎資格。
          <br />
          6.
          獲獎者簽收獎項後即自負保管責任，若有遺失或被竊等喪失占有之情形，主辦單位不負補發獎項之責任。
          <br />
          7.
          本活動如遇其他不可抗力之事由者，得順延之；主辦單位保有取消、終止、修改或暫停、審核民眾參加本活動資格及解釋本活動相關事項之權利，同時保留對此活動之所有事宜最終解釋與裁決的權利。
          <br />
          8.
          關於本活動的細節如有任何問題請聯繫活動小組：salesteam@mirrormedia.mg
          。<br />
          <br />
          <b>＝＝＝＝＝＝＝＝＝＝個人資料蒐集聲明＝＝＝＝＝＝＝＝＝＝</b>
          <br />
          1.
          您了解及同意所留下的姓名、電話、地址、電子信箱地址等識別類個人資料，主辦單位基於贈品抽獎活動、行銷、問題統計分析之目的範圍內，可進行上揭個人資料的蒐集、處理及利用，個人資料將利用於主辦單位及舉辦本活動所在地區，利用期間為本活動存續期間。除此之外，主辦單位不會將您的資料提供給與辦理本活動無關之他人。
          <br />
          2. 除法令另有規定，您可透過活動信箱
          salesteam@mirrormedia.mg，請主辦單位對上開資料(1)提供查閱或閱覽、(2)製給複製本、(3)補充或更正、(4)停止蒐集、處理或利用、(5)刪除。本告知事項內容如有更新，請詳見主辦單位網站公告。
          <br />
          3. 若您未提供相關個人資料，將影響您參加本活動之資格，不得異議。
          <br />
          <br />
          󠄀
        </Content>
      </Container>
    </Background>
  );
}
