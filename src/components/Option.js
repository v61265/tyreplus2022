import OptionInput from "./OptionInput";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin: 0 auto;
  margin-top: 48px;
  display: grid;
  justify-content: center;
  row-gap: 12px;
  @media screen and (min-width: 768px) {
    row-gap: 20px;
  }
`;

export default function Option({ question, setAnswers, answers }) {
  function handleOnChange(e) {
    const key = e.target?.value;
    setAnswers({
      ...answers,
      [question.name]: {
        ...answers[question.name],
        [key]: !answers[question.name][key],
      },
    });
  }
  return (
    <>
      {question.question}
      <InputWrapper>
        {question.options?.map((option, index) => (
          <OptionInput
            key={index}
            name={question.name}
            title={option.value}
            value={option.name}
            isChecked={answers[question.name][option.name]}
            handleOnChange={handleOnChange}
          />
        ))}
      </InputWrapper>
    </>
  );
}
