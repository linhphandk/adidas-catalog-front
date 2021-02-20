import React, {FunctionComponent} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, Store} from 'redux';
import rootReducer from './ducks';
import promise from 'redux-promise';
import HomePage from './pages/Homepage';
import ShoesPage from './pages/ShoePage/ShoePage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import IRootReducer from './ducks/IRootReducer';
import styled from 'styled-components';
const store: Store<IRootReducer>=
createStore(rootReducer, applyMiddleware(promise));

const App:FunctionComponent = ()=>{
  return (
    <Provider store={store as any}>
      <Router>
        <StyledPageWrapper>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shoes/:id" component={ShoesPage} />

          </Switch>
        </StyledPageWrapper>
      </Router>
    </Provider>
  );
};

const StyledPageWrapper = styled.div`
  max-width: 900px;
  left: 50%;
  transform:translateX(-50%);
  position:relative;
`;

export default App;
