import styled from "styled-components";
import InfoFormItem from "./InfoFormItem";

const InfoContainter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
`;

const InfoHint = styled.p`
  margin-top: 24px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
`;

const QuestionWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const QuestionRow = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${(props) => {
    if (props.type === "text") return "flex-direction: row;";
  }}
  & + & {
    margin-top: 8px;
    ${(props) => {
      if (props.step === 1) return "margin-top: 32px;";
    }}
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 29px;
    display: flex;
    ${(props) => {
      if (props.type === "option") return "flex-direction: column;";
    }}
    & + & {
      margin-top: 12px;
      ${(props) => {
        if (props.step === 1) return "margin-top: 28px;";
      }}
    }
  }
`;

const QuestionTitle = styled.div`
  min-width: 104px;
  margin-bottom: 10px;
  li span {
    position: relative;
    left: -10px;
  }
  ${(props) => {
    if (props.title === "月均營業額") return "margin-right: 24px;";
  }}
  ${(props) => {
    if (props.step === 1)
      return `
      font-size: 16px;
      font-weight: 600;
      @media screen and (min-width: 768px) {
        font-size: 24px;
      }
    `;
  }}
`;

const OptionWrapper = styled.div`
  display: flex;
  width: 100%;
  ${(props) =>
    props.isOption &&
    `
    max-width: 200px;
    flex-wrap: wrap;
    @media screen and (min-width: 768px) {
      max-width: 600px;
    }
    label:nth-child(4) {
      margin: 8px 0 0 0;
      @media screen and (min-width: 768px) {
        margin: 8px 0 0 12px;
      }
    }
    
    `}
`;

export default function Info({
  setAnswers,
  answers,
  questionItems,
  validatePhone,
  validateEmail,
  validation,
  step,
}) {
  async function handleChangeInfoValue(e) {
    const { name, value } = e.target;
    await setAnswers({ ...answers, [name]: value });
    if (name === "phone") validatePhone(value);
    if (name === "email") validateEmail(value);
  }
  function handleOnChangeInfoBoolean(e) {
    const { value } = e.target;
    setAnswers({
      ...answers,
      fleet: { ...answers.fleet, [value]: !answers.fleet[value] },
    });
  }

  return (
    <InfoContainter>
      {step === 15 && (
        <>
          本問卷將於6/15公佈得獎名單，請留下您的聯絡方式，後續將由專人與您聯繫
          <InfoHint>＊所有選項皆為必填</InfoHint>
        </>
      )}
      <QuestionWrapper>
        {questionItems.map((item, index) => {
          return (
            <QuestionRow type={item.type} key={index} step={step}>
              <QuestionTitle title={item.question} step={step}>
                {step === 15 && item.question}
                {step === 1 && (
                  <li>
                    <span>{item.question}</span>
                  </li>
                )}
              </QuestionTitle>
              <OptionWrapper isOption={item.type === "option"}>
                <InfoFormItem
                  type={item.type}
                  options={item.options}
                  name={item.name}
                  hint={item.hint}
                  answers={answers}
                  isValid={validation[item.name]}
                  handleChangeInfoValue={handleChangeInfoValue}
                  handleOnChangeInfoBoolean={handleOnChangeInfoBoolean}
                />
              </OptionWrapper>
            </QuestionRow>
          );
        })}
      </QuestionWrapper>
    </InfoContainter>
  );
}
