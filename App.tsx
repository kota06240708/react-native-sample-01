import React, { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';

import store from './src/store';
// import styled from 'styled-components/native'

import Index from './src/comments';

import { decode, encode } from 'base-64';

// firebaseこれがないと動かなかった
if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const App: FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;
