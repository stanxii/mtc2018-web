import * as React from 'react';
import styled from 'styled-components';
import { Button, Text } from '../../components';
import { colors, getTextStyle } from '../../components/styles';

const MainVisual = () => (
  <Wrapper>
    <EmptySpace>
      <Logo />
    </EmptySpace>
    <Date>Oct. 4th, 2018 thu</Date>
    <Place>@Roppongi Academy hills</Place>
    <BuyButton>BUY TICKET</BuyButton>
    <BottomArrow />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100vh;
  min-height: 768px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7.8vh; /* 60 / 768 */
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    height: 520px;
    min-height: 0;
    padding: 16px;
    margin-top: 60px;
  }
`;

const EmptySpace = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 280px;
  height: 134px;
  border: 1px solid rgba(255, 255, 255, 0.5);

  @media screen and (max-width: 767px) {
    width: 200px;
    height: 96px;
  }
`;

const Date = styled(Text)`
  ${getTextStyle('display5')};
  margin-bottom: 2.6vh; /* 20 / 768 */
  color: ${colors.yuki};
`;

const Place = styled(Text)`
  ${getTextStyle('display3')};
  margin-bottom: 8.3vh; /* 64 / 768 */
  color: ${colors.yuki};

  @media screen and (max-width: 767px) {
    ${getTextStyle('display1')};
    color: ${colors.yuki};
  }
`;

const BuyButton = styled(Button)`
  margin-bottom: 9.3vh; /* 72 / 768 */
`;

const BottomArrow = styled.img.attrs({
  src: '../../static/images/arrow_bottom.svg'
})`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export default MainVisual;
