import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import Background from "./assets/background.svg";
import Header from "./components/Header.js";
import Landing from "./components/Landing.js";
import LightBox from "./components/LightBox.js";
import Form from "./components/Form.js";
import appendSpreadsheet from "./utils/googlesheets";
import Agreement from "./components/Agreement";
import PrimaryButton from "./components/PrimaryButton";
import Success from "./components/Success";

// GA
import ReactGA from "react-ga";
ReactGA.initialize("UA-83609754-1", {
  debug: true,
});
ReactGA.pageview("/campaigns/tyreplus-2022");

const QUESTIONS = [
  {
    name: "q0",
    type: "info",
    questions: [
      {
        name: "area",
        type: "radio",
        question: "所在地區",
        options: ["北部", "中部", "南部", "東部"],
      },
      {
        name: "type",
        type: "radio",
        question: "駕駛車種",
        options: ["歐系", "美系", "日系", "韓系", "國產"],
      },
      {
        name: "age",
        type: "radio",
        question: "駕駛車齡",
        options: ["1-5年", "5-10年", "10年以上", "20年以上"],
      },
      {
        name: "fleet",
        type: "option",
        question: "所屬多元計程車車隊 (可複選)",
        options: [
          {
            name: "uber",
            value: "Uber",
          },
          {
            name: "yoxi",
            value: "Yoxi",
          },
          {
            name: "lineTaxi",
            value: "LineTaxi",
          },
          {
            name: "55688",
            value: "台灣大車隊",
          },
          {
            name: "other",
            value: "其他",
          },
        ],
      },
      {
        name: "seniority",
        type: "radio",
        question: "從業年資",
        options: ["1-5年", "5-10年", "10-15年", "15年以上"],
      },
      {
        name: "turnover",
        type: "radio",
        question: "月均營業額",
        options: ["4萬以下", "4萬-6萬", "6萬-8萬", "8萬-10萬", "10萬以上"],
      },
    ],
  },
  {
    name: "q1",
    type: "radio",
    question: "保養頻率",
    options: ["每月一次", "三個月一次", "半年一次", "一年一次"],
  },
  {
    name: "q2",
    type: "option",
    question: "最常保養項目 (可複選)",
    options: [
      {
        name: "q2a",
        value: "機油",
      },
      {
        name: "q2b",
        value: "齒輪油",
      },
      {
        name: "q2c",
        value: "剎車油",
      },
      {
        name: "q2d",
        value: "雨刷",
      },
      {
        name: "q2e",
        value: "輪胎",
      },
      {
        name: "q2f",
        value: "煞車",
      },
      {
        name: "q2g",
        value: "燈",
      },
    ],
  },
  {
    name: "q3",
    type: "option",
    question:
      "當車輛需要保養時，以下哪一項是你挑選專業保養廠的主要關鍵？ (可複選)",
    options: [
      {
        name: "q3a",
        value: "維修技術",
      },
      {
        name: "q3b",
        value: "價格透明",
      },
      {
        name: "q3c",
        value: "售後保障",
      },
    ],
  },
  {
    name: "q4",
    type: "option",
    question: "當愛車交付保養，你期待技師的保養技術與保護細節？ (可複選)",
    options: [
      {
        name: "q4a",
        value: "能檢查車輛的很仔細、全面掌握車輛狀況",
      },
      {
        name: "q4b",
        value: "維修技師在保養過程中，盡可能保護我的車輛",
      },
      {
        name: "q4c",
        value:
          "技師在檢查車輛、保養、維修的過程中，能運用專業儀器輔助讓我更信任",
      },
    ],
  },
  {
    name: "q5",
    type: "radio",
    question: "你認為技師檢查完後，給予專業解說與溝通的必要性？",
    options: ["很重要，能讓我更安心", "不重要", "無所謂"],
  },
  {
    name: "q6",
    type: "radio",
    question: "你認為保養汽車項目清楚、價格透明重要嗎？",
    options: [
      "很重要，我覺得店家重複與我確認報價、不會擅自拆卸零件、強迫推銷是很好的體驗",
      "不重要",
      "無所謂",
    ],
  },
  {
    name: "q7",
    type: "radio",
    question: "把愛車送交保養，你會希望可以觀看養護的過程嗎？",
    options: [
      "最好可以旁觀，這樣更放心",
      "不想旁觀，我想待在客休室休息",
      "可以邊休息、邊旁觀就好了",
    ],
  },
  {
    name: "q8",
    type: "radio",
    question: "保養過程中，你會在意技師/接待員的服務態度嗎？",
    options: ["會在意，態度親切會讓我更舒服", "不太在意", "無所謂"],
  },
  {
    name: "q9",
    type: "radio",
    question: "愛車在保養店裡等待時，你會在意客休室的環境舒適度嗎？",
    options: ["會在意，會影響我的保養體驗心情", "不太在意", "無所謂"],
  },
  {
    name: "q10",
    type: "radio",
    question: "你認為保養維修提供的預約時間方便性重要嗎？",
    options: ["很重要", "不重要", "無所謂"],
  },
  {
    name: "q11",
    type: "radio",
    question: "對保養維修更換的零件，你會擔心原廠與否或質量問題嗎？",
    options: [
      "會擔心，畢竟假冒偽劣零件不少",
      "不擔心，沒遇過換假零件情況",
      "無所謂",
    ],
  },
  {
    name: "q12",
    type: "radio",
    question:
      "當汽車保養需要更換零件時，你願意多花一點錢在愛車上使用領導品牌產品嗎？",
    options: [
      "我願意，一分錢一分貨，原廠品質及售後才有保障",
      "我覺得副廠的產品價格較低，品質也不會差太多",
      "無所謂",
    ],
  },
  {
    name: "q13",
    type: "textarea",
    question: "過往在汽車相關服務經驗中，最糟糕的印象及最有感的部分是什麼？",
  },
  {
    name: "q14",
    type: "info",
    questions: [
      {
        name: "name",
        question: "姓名",
        type: "text",
      },
      {
        name: "phone",
        question: "手機",
        type: "text",
        hint: "請填入正確的手機號碼",
      },
      {
        name: "email",
        question: "E-mail",
        type: "text",
        hint: "請輸入有效的 Email 地址",
      },
    ],
  },
];

const Container = styled.div`
  background: rgba(0, 153, 68, 1);
  width: 100vw;
  min-height: 100vh;
  background-position: bottom;
  background-size: cover;
  position: relative;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  text-size-adjust: none;
  @media screen and (min-width: 769px) {
    ${(props) => props.step === 0 && `background-image: url(${Background});`}
  }
`;

const LightBoxLink = styled.span`
  position: absolute;
  bottom: 20px;
  left: 100vw;
  transform: translate(calc(-100% - 20px), 0);
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  text-decoration-line: underline;
  color: #ffffff;
  z-index: 100;
  width: fit-content;
  ${(props) =>
    props.step !== 0 &&
    `
    position: fixed;
    `}
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    bottom: 52px;
    position: fixed;
    left: 100vw;
    transform: translate(calc(-100% - 52px), 0);
  }
  &:hover {
    cursor: pointer;
  }
`;

const Mask = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: #77bc20;
  z-index: 70;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  position: relative;
  z-index: 100;
  padding-bottom: 120px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 60px;
  }
  span:nth-child(2) {
    margin-top: 8px;
    @media screen and (min-width: 768px) {
      margin-top: 0px;
      margin-left: 48px;
    }
  }
`;

const Hint = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  margin: 0 auto;
  text-align: center;
  z-index: 100;
  position: relative;
  transform: translate(0, 20px);
  @media screen and (min-width: 768px) {
    transform: translate(0, 40px);
    font-size: 16px;
    line-height: 24px;
  }
`;

function App() {
  const [hasSubmit, setHasSubmit] = useState(false);
  const [canClickNext, setCanClickNext] = useState(false);
  const [agree, setAgree] = useState(false);
  const [showLightBox, setShowLightBox] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const lightBoxLinkRef = useRef();
  const lightBoxLinkOnFormRef = useRef();
  const [validation, setValidation] = useState({
    email: true,
    phone: true,
    all: false,
  });

  useEffect(() => {
    if (!step || step > 15) return;
    if (step === 15) {
      setValidation({
        ...validation,
        all: !Object.values(answers).includes(""),
      });
      if (
        validatePhone(answers.phone) &&
        validateEmail(answers.email) &&
        Object.values(answers.fleet).includes(true) &&
        agree &&
        !Object.values(answers).includes("")
      ) {
        setCanClickNext(true);
      } else {
        setCanClickNext(false);
      }
      return;
    }

    if (step === 1) {
      if (
        answers.age &&
        answers.area &&
        Object.values(answers.fleet).includes(true) &&
        answers.type &&
        answers.seniority &&
        answers.turnover
      ) {
        return setCanClickNext(true);
      } else {
        return setCanClickNext(false);
      }
    }

    const answersThisPage = answers[`q${step - 1}`];
    if (
      (typeof answersThisPage === "string" && answersThisPage) ||
      Object.values(answersThisPage).includes(true)
    ) {
      setCanClickNext(true);
    } else {
      setCanClickNext(false);
    }
  }, [step, answers, agree]);

  useEffect(() => {
    let emptyAnswer = {};
    let questions = [];
    QUESTIONS.forEach((ques) => {
      if (ques.type === "info") return questions.push(...ques.questions);
      return questions.push(ques);
    });
    questions.forEach((question) => {
      if (question.type === "option") {
        let emptyAnswerForQuestion = {};
        question.options.forEach((option) => {
          emptyAnswerForQuestion[option.name] = false;
        });
        emptyAnswer[question.name] = emptyAnswerForQuestion;
      } else {
        emptyAnswer[question.name] = "";
      }
    });
    setAnswers(emptyAnswer);
  }, []);

  async function handleSubmit() {
    let submitAnswer = {};
    Object.keys(answers).forEach((key) => {
      if (typeof answers[key] === "object") {
        const answer = answers[key];
        Object.keys(answer).forEach((k) => {
          submitAnswer[k] = answer[k];
        });
      } else {
        submitAnswer[key] = answers[key];
      }
    });
    try {
      await appendSpreadsheet(submitAnswer);
    } catch (e) {
      console.log(e);
      alert("oops!好像出錯囉!");
      window.open("/");
      window.close();
    }

    setHasSubmit(true);
  }

  useEffect(() => {
    if (step === 16 && !hasSubmit) handleSubmit();
  }, [step]);

  function validatePhone(value) {
    let isValid = true;
    if (!value) return false;
    if (!/^[0-9]*$/.test(value) || value.length !== 10) isValid = false;
    setValidation({ ...validation, phone: isValid });
    return isValid;
  }
  function validateEmail(value) {
    const regex = /\S+@\S+\.\S+/;
    setValidation({ ...validation, email: regex.test(value) });
    return regex.test(value);
  }

  return (
    <Container step={step}>
      {step !== 0 && <Mask width={`${(100 / 16) * (16 - step)}vw`} />}
      <Header />
      {step === 0 && !hasSubmit && <Landing setStep={setStep} />}
      {step !== 0 && step <= 15 && !hasSubmit && (
        <>
          {step !== 0 && (
            <Form
              step={step}
              setStep={setStep}
              questions={QUESTIONS}
              setAnswers={setAnswers}
              answers={answers}
              setShowLightBox={setShowLightBox}
              validation={validation}
              setValidation={setValidation}
              validatePhone={validatePhone}
              validateEmail={validateEmail}
            />
          )}
          {step === 15 && (
            <div ref={lightBoxLinkOnFormRef}>
              <Agreement
                agree={agree}
                setAgree={setAgree}
                openLightBox={() => setShowLightBox(true)}
              />
            </div>
          )}
          {step === 1 && (
            <Hint>*所有選項皆為必填，送出前請確認您是否填寫完畢？</Hint>
          )}
          <ButtonContainer>
            {step !== 0 && 1 < step && step < 15 && (
              <PrimaryButton
                title='上一題'
                handleClick={() => setStep(step - 1)}
              />
            )}
            {step !== 0 && step < 15 && (
              <PrimaryButton
                title='下一題'
                handleClick={() => {
                  if (canClickNext) setStep(step + 1);
                }}
                disabled={!canClickNext}
              />
            )}
            {step >= 15 && (
              <PrimaryButton
                title='確認送出'
                handleClick={() => {
                  if (canClickNext) setStep(step + 1);
                }}
                disabled={!canClickNext}
              />
            )}
          </ButtonContainer>
        </>
      )}
      {!hasSubmit && (
        <>
          <LightBoxLink
            step={step}
            onClick={() => {
              setShowLightBox(true);
              window.scrollTo(0, 0);
            }}
            ref={lightBoxLinkRef}
          >
            活動辦法與個資說明
          </LightBoxLink>
          {showLightBox && (
            <LightBox
              setShowLightBox={setShowLightBox}
              showLightBox={showLightBox}
              lightBoxLinkRef={lightBoxLinkRef}
              lightBoxLinkOnFormRef={lightBoxLinkOnFormRef}
              width={`${step ? (100 / 16) * (16 - step) : 0}vw`}
            />
          )}
        </>
      )}
      {hasSubmit && <Success />}
    </Container>
  );
}

export default App;
