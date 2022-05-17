import RadioInput from "./RadioInput";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-top: 48px;
  display: grid;
  justify-content: center;
  row-gap: 12px;
  @media screen and (min-width: 768px) {
    row-gap: 20px;
  }
`;

export default function Radio({ question, setAnswers, answers }) {
  return (
    <>
      {question.question}
      <InputWrapper>
        {question.options.map((option, index) => (
          <RadioInput
            key={index}
            name={question.name}
            title={option}
            value={option}
            isInfo={false}
            isChecked={option === answers[question.name]}
            onChange={(e) => {
              setAnswers({ ...answers, [question.name]: e.target.value });
            }}
          />
        ))}
      </InputWrapper>
    </>
  );
}
