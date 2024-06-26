import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import store from './store/store';
import { Provider } from 'react-redux';


export default function App() {

  return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
  )
}


