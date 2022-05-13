import styled from "styled-components";

const Button = styled.span`
  padding: 15px;
  background: #004f9f;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffed00;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 34px;
    border-radius: 23px;
  }

  &:hover {
    cursor: pointer;
    background: #ffed00;
    color: #004f9f;
  }
`;

export default function PrimaryButton({ title }) {
  return <Button>{title}</Button>;
}
