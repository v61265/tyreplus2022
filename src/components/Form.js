import styled from "styled-components";
import Radio from "./Radio";
import Option from "./Option";
import Textarea from "./Textarea";
import Info from "./Info";

const Container = styled.div`
  padding: 45px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  position: relative;
  z-index: 100;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 35px;
    max-width: 720px;
    margin: 0 auto;
  }
`;

const ProgressBar = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-bottom: 120px;
  }
`;

const ProgressDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => (props.isActive ? "#FFED00" : "#fff")};
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }

  & + & {
    margin-left: 12px;
    @media screen and (min-width: 768px) {
      margin-left: 28px;
    }
  }
`;

export default function Form({
  questions,
  step,
  setAnswers,
  answers,
  validation,
  setValidation,
}) {
  function validatePhone() {
    const regex = /((?=(09))[0-9]{9})$/;
    setValidation({ ...validation, phone: regex.test(answers.phone) });
  }
  function validateEmail() {
    const regex = /\S+@\S+\.\S+/;
    setValidation({ ...validation, email: regex.test(answers.email) });
  }

  return (
    <Container>
      {
        <ProgressBar>
          {step !== 14 &&
            questions.map((item, index) => {
              return <ProgressDot isActive={step >= index + 1} key={index} />;
            })}
        </ProgressBar>
      }
      <div>
        {questions.map((item, index) => {
          if (step !== index + 1) return "";
          switch (item.type) {
            case "radio":
              return (
                <Radio
                  question={item}
                  key={index}
                  setAnswers={setAnswers}
                  answers={answers}
                />
              );
            case "option":
              return (
                <Option
                  question={item}
                  key={index}
                  setAnswers={setAnswers}
                  answers={answers}
                />
              );
            case "info":
              return (
                <Info
                  questionItems={item.questions}
                  key={index}
                  setAnswers={setAnswers}
                  answers={answers}
                  validatePhone={validatePhone}
                  validateEmail={validateEmail}
                  validation={validation}
                />
              );
            default:
              return (
                <Textarea
                  question={item}
                  key={index}
                  setAnswers={setAnswers}
                  answers={answers}
                />
              );
          }
        })}
      </div>
    </Container>
  );
}
