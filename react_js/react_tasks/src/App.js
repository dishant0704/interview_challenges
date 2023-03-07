import { Fragment } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TeskDependencies from './components/TeskDependencies/TeskDependencies'
import './App.scss';
import CountFun from './components/TasksCounter/CountFun';
import CountClass from './components/TasksCounter/CountClass';
import AxiosClass from './components/TaskAxios/AxiosClass';
import MoviesListClass from './components/MoveList/MoviesListClass';
import MoviesListClassIMG from './components/MoveList/MoviesListClassImg';
import SmallChallenges from './components/SmallChallenges/SmallChallenges';
import UserList from './components/listAxiox/UserList';
import Pagination from './components/Pagination/Pagination';
import CreateNewProduct from './components/listAxiox/CreateNewProduct';
import Challenges from './components/Challenges';
import ListData from './components/ListData';

function App() {
  return (
    <Fragment>
      {/*<h1>REACT INTERVIEW CHALLENGES</h1>
       <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>home</div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>profile</div>
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>contact</div>
        <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex={0}>disabled</div>
      </div> 
     <TeskDependencies />
    <CountFun />
    <CountClass /> 
    <AxiosClass baseURL = "https://lobster-app-ddwng.ondigitalocean.app/product/list" api_key="Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"/>
    <MoviesListClassIMG />
    <MoviesListClass/>    
    <Pagination baseUrl="https://dummyjson.com/products" pageCount={3} />  
     <UserList baseUrl="https://reqres.in/api/{resource}" pageCount={6} />
     <CreateNewProduct pageCount={10} />
     <SmallChallenges />   
     <Challenges />*/}
      <ListData />        
    </Fragment>
  );
}

export default App;
