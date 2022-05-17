import styled from "styled-components";

const AgreementLabel = styled.div`
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #ffffff;
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
  justify-content: center;
  z-index: 100;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 23px;
    margin-top: 60px;
  }
`;

const Input = styled.input`
  display: none;
`;

const MockInput = styled.div`
  min-width: 20px;
  height: 20px;
  background: #fff;
  margin-right: 16px;
  position: relative;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }

  &:hover {
    cursor: pointer;
    &::before {
      content: "";
      width: 14px;
      height: 14px;
      background: #004f9f;
      position: absolute;
      top: 3px;
      left: 3px;
    }
  }
  ${(props) =>
    props.isCheck &&
    `
  &::before {
    content: "";
    width: 14px;
    height: 14px;
    background: #004f9f;
    position: absolute;
    top: 3px;
    left: 3px;
  }
  `}
`;

const Link = styled.span`
  color: #ffed00;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

export default function Agreement({ agree, setAgree, openLightBox }) {
  return (
    <AgreementLabel>
      <label>
        <Input type='checkbox' onChange={() => setAgree(!agree)} />
        <MockInput isCheck={agree} />
      </label>
      我同意本網站的<Link onClick={openLightBox}>隱私權使用政策</Link>及
      <Link onClick={openLightBox}>活動注意事項</Link>。
    </AgreementLabel>
  );
}
