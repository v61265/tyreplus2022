import styled from "styled-components";
import RadioInput from "./RadioInput";
import OptionInput from "./OptionInput";

const Text = styled.input`
  width: 100%;
  height: 30px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #009944;
  padding: 0 8px;
  :focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    padding: 0 16px;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
`;

const Hint = styled.p`
  margin-top: 8px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 12px;
  color: #ffed00;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export default function InfoFormItem({
  type,
  options,
  handleChangeInfoValue,
  name,
  answers,
  handleOnChangeInfoBoolean,
  hint,
  isValid,
}) {
  switch (type) {
    case "text":
      return (
        <TextWrapper>
          <Text type='text' onChange={handleChangeInfoValue} name={name} />
          {!isValid && hint && <Hint>{hint}</Hint>}
        </TextWrapper>
      );
    case "radio":
      return options.map((option, i) => (
        <RadioInput
          key={i}
          name={name}
          title={option}
          value={option}
          isChecked={option === answers[name]}
          onChange={handleChangeInfoValue}
          isInfo={true}
        />
      ));
    case "option":
      return options.map((option, index) => (
        <OptionInput
          key={index}
          name={name}
          title={option.value}
          value={option.name}
          isChecked={answers.fleet[option.name]}
          handleOnChange={handleOnChangeInfoBoolean}
          isInfo={true}
        />
      ));
    default:
      return "";
  }
}
