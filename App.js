import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import store from './store/store';
import { Provider } from 'react-redux';

init()
  .then(() => console.log('Database initialized'))
  .catch(err => console.log('Database initialized failed', err))

export default function App() {

  return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
  )
}


