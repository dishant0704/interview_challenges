import {Fragment} from 'react';
import TeskDependencies from './components/TeskDependencies/TeskDependencies'
import './App.css';
import CountFun from './components/TasksCounter/CountFun';
import CountClass from './components/TasksCounter/CountClass';
import AxiosClass from './components/TaskAxios/AxiosClass';

function App() {
  return (
    <Fragment>
    <h1>ketan sawant</h1>
    {/* <TeskDependencies />
    <CountFun />
    <CountClass /> */}
    <AxiosClass baseURL = "https://lobster-app-ddwng.ondigitalocean.app/product/list" api_key="Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"/>
    </Fragment>
  );
}

export default App;
