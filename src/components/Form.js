import styled from "styled-components";

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
  return <HeaderContainer>123</HeaderContainer>;
}
