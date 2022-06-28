import { useEffect, useState } from "react";
import Header from "./part-two/Header.js";
import SideBar from "./part-two/SideBar.js";
import useIsDesktop from "../hooks/useIsDesktop.js";
import ReserveButton from "./part-two/ReserveButton";
// import Conclusions from "./part-two/Conclusions";
import styled from "styled-components";

const SECTIONS = [
  {
    name: ["最強職人", "養護愛車調查大公開"],
    parts: [
      "汽車保養廠選擇關鍵",
      "完美保養要件",
      "最受歡迎的保養服務",
      "最堅持的保養原則",
      "最在意的保養事項",
    ],
  },
  {
    name: ["米其林認證保養", "體驗心得大直擊"],
    parts: ["「頂尖對決」滿意度大挑戰	", "車主體驗真心話", "網友好評回饋"],
  },
];

const CONCLUSIONS = [
  {
    title: "挑選專業保養廠的主要關鍵？",
    subtitle: "價格透明是關鍵",
    content: [
      "88.5%車主認為價格透明是挑選專業保養廠主要關鍵，馳加秉持透明公開精神，在維修過程中，不但價格透明、提供售後保障，",
      "而維修技術更佔了86.7%的比例，就有車主表示因為自己頻繁需進廠保養，曾經遇到技師懂得比自己更少，溝通過程中失去對保養廠的信任，馳加技師團隊皆需經過專業訓練認證，為的就是提供車主安心信賴的汽車保養服務中心。",
    ],
  },
];

const ContentsWrapper = styled.div`
  @media screen and (min-width: 768px) {
    padding: 90px 0 0 311px;
    background: red;
    width: 100vw;
    min-height: 100vh;
  }
`;

export default function PartTwo() {
  const isDesktop = useIsDesktop();
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [nowSection, setNowSection] = useState([1, 1]);
  useEffect(() => {
    if (isDesktop) {
      setIsOpenSideBar(true);
    }
  }, [isDesktop]);
  return (
    <div>
      <Header
        sections={SECTIONS}
        isOpenSideBar={isOpenSideBar}
        setIsOpenSideBar={setIsOpenSideBar}
        nowSection={nowSection}
      />
      <SideBar
        sections={SECTIONS}
        isOpenSideBar={isOpenSideBar}
        nowSection={nowSection}
      />
      <ContentsWrapper>{/* <Conclusions /> */}</ContentsWrapper>

      <ReserveButton />
    </div>
  );
}
