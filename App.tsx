import React, { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';

import store from './src/store';
// import styled from 'styled-components/native'

import Index from './src/comments';

const App: FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })
