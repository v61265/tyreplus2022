import { useEffect, useState } from "react";
import styled from "styled-components";
import useIsDesktop from "../../hooks/useIsDesktop.js";

const Wrapper = styled.div`
  background: #77bc1f;
  padding: 156px 40px 16px 40px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 400;
  color: #ffffff;
  transition: transform 1s;
  ${(props) =>
    props.closed &&
    `
    transform: translate(-100%, 0)
  `}}
  @media screen and (min-width: 768px) {
    padding: 208px 28px 16px 28px;
  }
`;

const Section = styled.div`
  &:not(:first-child) {
    margin-top: 36px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

const Parts = styled.ul``;

const PartItem = styled.li`
  margin-top: 16px;
  color: #f2f2f2;
  display: flex;
  align-items: center;
  font-size: 14px;
  &:before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    background: #f2f2f2;
    margin-right: 8px;
    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }
  }
  ${(props) =>
    props.active &&
    `
  color: #FFED00;
  &:before {
    background: #FFED00;
  }
  `}
  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 21px;
    line-height: 30px;
  }
`;

export default function SideBar({ sections, isOpenSideBar, nowSection }) {
  const isDesktop = useIsDesktop();
  const [sectionShown, setSectionShown] = useState(sections);
  useEffect(() => {
    if (isDesktop) {
      setSectionShown([sections[nowSection[0] - 1] || {}]);
    }
  }, [sections, isDesktop, nowSection]);
  return (
    <Wrapper closed={!isOpenSideBar}>
      {sectionShown.map((section, index) => (
        <Section key={`sideBar-section-${index}`}>
          {!isDesktop && (
            <Name>
              {section.name.map((part, i) => (
                <div key={`sideBar-section-${index}-name-${i}`}>{part}</div>
              ))}
            </Name>
          )}
          <Parts>
            {section.parts.map((part, partIndex) => (
              <PartItem
                key={`sideBar-section-${index}-part-${partIndex}`}
                active={
                  nowSection[0] === index + 1 && nowSection[1] === partIndex + 1
                }
              >
                {part}
              </PartItem>
            ))}
          </Parts>
        </Section>
      ))}
    </Wrapper>
  );
}
