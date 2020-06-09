import React, { cloneElement } from 'react';
import FirebaseProvider from './firebase';
import AuthProvider from './auth';

const joinElements = (children, parent) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  cloneElement(parent, {
    children
  });

const ProviderComposer = ({ contexts, children }) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  contexts.reduceRight(joinElements, children);

const ContextProvider = ({ children }) => (
  <ProviderComposer contexts={[<FirebaseProvider />, <AuthProvider />]}>
    {children}
  </ProviderComposer>
);

export default ContextProvider;
