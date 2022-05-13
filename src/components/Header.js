import styled from "styled-components";
import TyreIcon from "../assets/tyre-icon.svg";
import MirrorIcon from "../assets/mirror-icon.svg";
import ShareIcon from "../assets/share-icon.svg";

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  z-index: 200;
  @media screen and (min-width: 768px) {
    padding: 16px 24px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <a target='_blank' href='https://www.mirrormedia.mg/' rel='noreferrer'>
        <img alt='mirror' src={MirrorIcon} />
      </a>
      <a target='_blank' href='https://tyreplus.com.tw/' rel='noreferrer'>
        <img alt='tyre' src={TyreIcon} />
      </a>

      <img alt='share' src={ShareIcon} />
    </HeaderContainer>
  );
}
