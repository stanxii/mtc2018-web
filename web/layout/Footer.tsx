import * as React from 'react';
import styled from 'styled-components';
import { colors, getTextStyle } from '../components/styles';
import { NamespacesConsumer } from 'react-i18next';

const Footer = () => (
  <Wrapper>
    <Body>
      <Copy>© 2018 Mercari, Inc.</Copy>
      <EmptySpace />
      <Link href="/2017" target="_blank" rel="noopener noreferrer">
        Mercari Tech Conf 2017
      </Link>
      <NamespacesConsumer ns={['common']}>
        {t => (
          <Link
            href={t('overview.url')}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('overview.title')}
          </Link>
        )}
      </NamespacesConsumer>
    </Body>
  </Wrapper>
);

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${colors.yuki};
`;

const Body = styled.div`
  width: 100%;
  max-width: 920px;
  padding: 0 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    padding: 24px 0;
    height: auto;
    flex-direction: column;

    > * {
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const Copy = styled.small`
  ${getTextStyle('display2')};
  font-weight: bold;
  color: ${colors.yuki};
`;

const EmptySpace = styled.div`
  flex-grow: 1;
`;

const Link = styled.a`
  ${getTextStyle('display1')};
  color: ${colors.yuki};
  text-decoration: none;
  margin-left: 60px;

  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`;

export default Footer;
