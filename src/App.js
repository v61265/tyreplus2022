import styled from "styled-components";
import { useState, useRef } from "react";
import Background from "./assets/background.svg";
import Header from "./components/Header.js";
import Landing from "./components/Landing.js";
import LightBox from "./components/LightBox.js";
import Form from "./components/Form.js";

// import appendSpreadsheet from './utils/googlesheets'

const Container = styled.div`
  background: rgba(0, 153, 68, 1);
  width: 100vw;
  min-height: 100vh;
  background-position: bottom;
  background-size: cover;
  position: relative;
  @media screen and (min-width: 768px) {
    background-image: url(${Background});
  }
`;

const LightBoxLink = styled.span`
  position: absolute;
  transform: translate(-50%, 0);
  bottom: 16px;
  left: 50%;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  text-decoration-line: underline;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    bottom: 52px;
  }

  &:hover {
    cursor: pointer;
  }
`;

function App() {
  const [showLightBox, setShowLightBox] = useState(false);
  const [step, setStep] = useState(0);
  const lightBoxLinkRef = useRef();

  return (
    <Container>
      <Header />
      {step === 0 && <Landing setStep={setStep} />}
      {step !== 0 && <Form />}
      <LightBoxLink onClick={() => setShowLightBox(true)} ref={lightBoxLinkRef}>
        活動辦法與個資說明
      </LightBoxLink>
      {showLightBox && (
        <LightBox
          setShowLightBox={setShowLightBox}
          lightBoxLinkRef={lightBoxLinkRef}
        />
      )}
    </Container>
  );
}

export default App;
