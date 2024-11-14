import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screen/loanForm';   
import Layout from './layout';
const App = () => {
  return (
    <>
      <Router> 
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} /> 
          </Switch>
          </Layout> 
      </Router>     
    </>
  );
};

export default App;

