import styled from "styled-components";

const InputWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextareaInput = styled.textarea`
  width: 100%;
  height: 134px;
  resize: none;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #009944;
  padding: 8px;
  :focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 29px;
    padding: 16px;
  }
`;

export default function Textarea({ question, setAnswers, answers }) {
  function handleOnChange(e) {
    setAnswers({
      ...answers,
      [question.name]: e.target.value,
    });
  }
  return (
    <>
      {question.question}
      <InputWrapper>
        <TextareaInput onChange={handleOnChange} />
      </InputWrapper>
    </>
  );
}
