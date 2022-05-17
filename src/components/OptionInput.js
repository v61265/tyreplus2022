import styled from "styled-components";

const Label = styled.label`
  display: flex;
  justify: center;
  align-items: flex-start;
  text-align: start;
  line-height: 20px;
  @media screen and (min-width: 768px) {
    line-height: 32px;
  }
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.isInfo &&
    `
    margin-top: 8px;
    max-width: 200px;
    flex-wrap: wrap;
      &:not(:first-child) {
        margin-left: 4px;
        @media screen and (min-width: 768px) {
          margin-left: 12px;
        }
      }
    `}
`;

const Input = styled.input`
  display: none;
`;

const MockInput = styled.div`
  min-width: 20px;
  min-height: 20px;
  background: #ffffff;
  margin-right: 12px;
  @media screen and (min-width: 768px) {
    min-width: 32px;
    min-height: 32px;
    margin-right: 20px;
  }
  ${(props) =>
    props.isChecked &&
    `
      &::after {
          content: '';
          display: block;
          width: 14px;
          height: 14px;
          background: #004F9F;
          transform: translate(3px, 3px);
          @media screen and (min-width: 768px) {
            width: 20px;
            height: 20px;
            transform: translate(6px, 6px);
          }
      }
      `}
  &:hover {
    &::after {
      content: "";
      display: block;
      width: 14px;
      height: 14px;
      background: #004f9f;
      transform: translate(3px, 3px);
      @media screen and (min-width: 768px) {
        width: 20px;
        height: 20px;
        transform: translate(6px, 6px);
      }
    }
  }

  ${(props) =>
    props.isInfo &&
    `
      margin-right: 4px;
      @media screen and (min-width: 768px) {
        margin-right: 12px;
      }
    `}
`;

export default function OptionInput({
  name,
  value,
  title,
  isChecked,
  handleOnChange,
  isInfo,
}) {
  return (
    <Label isInfo={isInfo}>
      <Input
        type='checkbox'
        name={name}
        value={value}
        key={name}
        onChange={handleOnChange}
      />
      <MockInput isChecked={isChecked} isInfo={isInfo} />
      {title}
    </Label>
  );
}
