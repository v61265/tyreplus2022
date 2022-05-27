import styled from "styled-components";
import TyreIcon from "../assets/tyre-icon.svg";
import HomeIcon from "../assets/home.png";
import ShareIcon from "../assets/share-icon.svg";
import FbIcon from "../assets/fb.svg";
import LineIcon from "../assets/line.png";
import { useState } from "react";

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  z-index: 200;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 16px 24px;
  }
`;

const Share = styled.img`
  width: 24px;
  height: 24px;
  :hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const ShareIcons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(0, 70px);
  padding: 0 12px;
  z-index: 200;
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
  height: 35px;
  &:hover {
    cursor: pointer;
  }
`;

const TyreLogo = styled.a`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translate(-50%, 0);
  @media screen and (min-width: 768px) {
    top: 16px;
  }
`;

export default function Header() {
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
        <Share
          alt='share'
          src={ShareIcon}
          onClick={() => setShowIcons(!showIcons)}
        />
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
