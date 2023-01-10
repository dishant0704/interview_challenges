import {Fragment} from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TeskDependencies from './components/TeskDependencies/TeskDependencies'
import './App.css';
import CountFun from './components/TasksCounter/CountFun';
import CountClass from './components/TasksCounter/CountClass';
import AxiosClass from './components/TaskAxios/AxiosClass';
import MoviesListClass from './components/MoveList/MoviesListClass';

function App() {
  return (
    <Fragment>
    <h1>REACT INTERVIEW CHALLENGES</h1>
    {/* <TeskDependencies />
    <CountFun />
    <CountClass /> 
    <AxiosClass baseURL = "https://lobster-app-ddwng.ondigitalocean.app/product/list" api_key="Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"/>*/}
    <MoviesListClass />
    </Fragment>
  );
}

export default App;
