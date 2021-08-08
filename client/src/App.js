import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/home';
import aboutPage from './components/pages/about';
import contactPage from './components/pages/contact';
import notFound from './components/pages/notFound';
import Counter from './components/pages/HOC/counter';
import PureComp from './components/pages/pureComponent';
import Hoc from './components/pages/HOC/hocDemo';
import TestHooks from './components/pages/hookstest'
import LifecycleA from './components/pages/componentlifeCycle/lifeCycleA';
import ParentComp from './components/pages/pureComponents/ParentComp';
import ErrorBoundaryDemo from './components/pages/errorBoundaries/errorBoundarydemo';
import Register from './components/pages/jwt/register';
import Login from './components/pages/jwt/login';
import MainComponent from './components/pages/context/main';
import MainReducer from './components/pages/reducersApi/mainReducer';
import MainComponentContext from './components/pages/context-reducerapi/main'
import MainFetchComponent from './components/pages/context-reducerapi/apiFetch/mainFetch';
import MainCallBackComponent from './components/pages/callBackHook/main';
import MainMemoComponent from './components/pages/useMemo/main';
import DataStructures from './components/pages/dataStructures/main';
const App = () => {
  console.log(localStorage);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route
            path="/about"
            exact
            component={aboutPage}
          ></Route>
          <Route
            path="/contact"
            exact
            component={contactPage}
          ></Route>
          <Route
            path="/counter"
            exact
            component={Counter}
          ></Route>
          <Route
            path="/purecomponent"
            exact
            component={PureComp}
          ></Route>
          <Route
            path="/hoc"
            exact
            component={Hoc}
          ></Route>
          <Route
            path="/hooks"
            exact
            component={TestHooks}
          ></Route>
          <Route
            path="/lifeCycle"
            exact
            component={LifecycleA}
          ></Route>
          <Route
            path="/parentComp"
            exact
            component={ParentComp}
          ></Route>
          <Route
            path="/errorboundary"
            exact
            component={ErrorBoundaryDemo}
          ></Route>
          <Route
            path="/register"
            exact
            component={Register}
          ></Route>
          <Route
            path="/login"
            exact
            component={Login}
          ></Route>
          <Route
            path="/context"
            exact
            component={MainComponent}
          ></Route>
          <Route
            path="/reducer"
            exact
            component={MainReducer}
          ></Route>
          <Route
            path="/context-Reducer"
            exact
            component={MainComponentContext}
          ></Route>
         <Route
            path="/mainFetch"
            exact
            component={MainFetchComponent}
          ></Route> 
          <Route
            path="/callback"
            exact
            component={MainCallBackComponent}
          ></Route>
          <Route
            path="/usememo"
            exact
            component={MainMemoComponent}
          ></Route>
          <Route
            path="/test"
            exact
            component={DataStructures}
          ></Route>
          <Route path="*" exact component={notFound} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
