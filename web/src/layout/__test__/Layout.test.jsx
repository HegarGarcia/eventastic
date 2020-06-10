import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

describe('<Layout /> spec', () => {
  let tree = null;

  beforeEach(() => {
    tree = render(
      <Layout>
        <h1>body</h1>
      </Layout>
    );
  });

  it('Should not regress', () => {
    expect(tree).toMatchSnapshot();
  });

  it('Should render a header', () => {
    expect(screen.getByTestId('header')).toBeTruthy();
  });

  it('Should render content', () => {
    expect(screen.getByTestId('main-content')).toBeTruthy();
  });
});
