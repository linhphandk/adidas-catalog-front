import React, {FunctionComponent} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './ducks';
import promise from 'redux-promise';
import Homepage from './pages/HomePage/Homepage';
const store = createStore(rootReducer, applyMiddleware(promise));

const App:FunctionComponent = ()=>{
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
};

export default App;
