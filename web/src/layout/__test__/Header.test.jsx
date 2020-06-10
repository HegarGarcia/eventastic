import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('<Header /> spec', () => {
  let tree = null;

  beforeEach(() => {
    tree = render(<Header />);
  });

  it('Should not regress', () => {
    expect(tree).toMatchSnapshot();
  });

  it('Should show the page title', () => {
    expect(screen.getByText('Eventastic')).toBeTruthy();
  });

  it('Should show sign inbutton', () => {
    expect(screen.getByText(/sign in/i)).toBeTruthy();
  });

  it.todo('Should redirecto to sign in page on click');
});
