import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr max-content;
  grid-template-areas:
    'appbar'
    'main'
    'footer';

  & > main {
    grid-area: main;
    height: 100%;
  }
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <Header />
    <main data-testid="main-content">{children}</main>
  </LayoutContainer>
);

export default Layout;
