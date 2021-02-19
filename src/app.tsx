import React, {FunctionComponent} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, Store} from 'redux';
import rootReducer from './ducks';
import promise from 'redux-promise';
import HomePage from './pages/HomePage/Homepage';
import ShoesPage from './pages/ShoePage/ShoePage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import IRootReducer from './ducks/IRootReducer';
const store: Store<IRootReducer>=
createStore(rootReducer, applyMiddleware(promise));

const App:FunctionComponent = ()=>{
  return (
    <Provider store={store as any}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shoes/:id" component={ShoesPage} />

        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
