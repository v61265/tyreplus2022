import styled from "styled-components";
import TyreIcon from "../../assets/tyre-icon.svg";
import HomeIcon from "../../assets/home-part2.svg";
import ShareIcon from "../../assets/share-icon.svg";
import BurgerSvg from "../../assets/burger.svg";
import FbIcon from "../../assets/fb.svg";
import LineIcon from "../../assets/line.png";
import useIsDesktop from "../../hooks/useIsDesktop.js";
import { useState } from "react";

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
  z-index: 200;
  align-items: center;
  background: #009944;
  width: 100vw;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 500;
  }
`;

const Share = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 12px;
  :hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    width: 34px;
    height: 32px;
  }
`;

const ShareIcons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(0, 70px);
  padding: 0 20px;
  z-index: 200;
  height: 24px;
  @media screen and (min-width: 768px) {
    padding: 0 24px;
  }
`;

const IconItem = styled.div`
  background: #fff;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #009944;
  :hover {
    cursor: pointer;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
    transform: translate(1px, 1px);
  }
  & + & {
    margin-top: 12px;
  }
  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }

  img {
    height: 70%;
  }
`;

const HomeLogo = styled.img`
  height: 24px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    height: 36px;
  }
`;

const TyreLogo = styled.a`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 76px;
  @media screen and (min-width: 768px) {
    top: 20px;
    left: 76px;
    transform: none;
    width: 108px;
  }
`;

const BurgerIcon = styled.img`
  width: 28px;
  height: 16px;
  transition: transform 2s;
  &:hover {
    cursor: pointer;
  }
  ${(props) => props.opened && `transform:rotate(90deg);}`}
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const Sections = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
`;

const SectionItem = styled.span`
  position: relative;
  &:not(:first-child) {
    margin-left: 96px;
  }
  &:after {
    display: block;
    height: 4px;
    width: calc(100% - 30px);
    background: #ffff29;
    position: absolute;
    bottom: -27px;
    left: 15px;
  }
  &:hover {
    cursor: pointer;
    color: #ffff29;
    &:after {
      content: "";
    }
  }
  ${(props) =>
    props.active &&
    `color: #ffff29;
  &:after {
    content: "";

  }`}
`;

export default function Header({
  isOpenSideBar,
  setIsOpenSideBar,
  sections,
  nowSection,
}) {
  const isDesktop = useIsDesktop();
  const [showIcons, setShowIcons] = useState(false);
  function reload() {
    window.location.reload();
  }
  return (
    <>
      <HeaderContainer>
        <HomeLogo alt='mirror' src={HomeIcon} onClick={reload} />
        <TyreLogo
          target='_blank'
          href='https://tyreplus.com.tw/'
          rel='noreferrer'
        >
          <img alt='tyre' src={TyreIcon} />
        </TyreLogo>

        {isDesktop && (
          <Sections>
            {sections.map((section, index) => (
              <SectionItem
                active={nowSection[0] === index + 1}
                key={`header-section-item-${index}`}
              >
                {section.name}
              </SectionItem>
            ))}
          </Sections>
        )}

        <HeaderRight>
          {!isDesktop && (
            <BurgerIcon
              alt='burger'
              src={BurgerSvg}
              onClick={() => setIsOpenSideBar(!isOpenSideBar)}
              opened={isOpenSideBar}
            />
          )}
          <Share
            alt='share'
            src={ShareIcon}
            onClick={() => setShowIcons(!showIcons)}
          />
        </HeaderRight>
      </HeaderContainer>
      {showIcons && (
        <ShareIcons>
          <IconItem
            onClick={() =>
              window.open(
                "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.mirrormedia.mg%2Fcampaigns%2Ftyreplus2022%2Findex.html&amp;src=sdkpreparse",
                "_blank"
              )
            }
          >
            <img alt='fcebook' src={FbIcon} />
          </IconItem>
          <IconItem>
            <img
              alt='line'
              src={LineIcon}
              onClick={() =>
                window.open(
                  "https://social-plugins.line.me/lineit/share?url=https://www.mirrormedia.mg/campaigns/tyreplus2022/index.html",
                  "_blank"
                )
              }
            />
          </IconItem>
        </ShareIcons>
      )}
    </>
  );
}
