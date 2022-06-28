import styled from "styled-components";
import ReserveImg from "../../assets/reserve.jpg";

const Wrapper = styled.div`
  position: fixed;
  bottom: 43px;
  right: 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: translate(-1px, -1px);
  }
  @media screen and (min-width: 768px) {
    bottom: 7px;
    right: 24px;
  }
`;

export default function ReserveButton() {
  return (
    <Wrapper>
      <img src={ReserveImg} alt='reverse' />
    </Wrapper>
  );
}
