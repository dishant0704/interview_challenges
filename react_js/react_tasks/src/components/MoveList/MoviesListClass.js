import React, { Fragment } from 'react';
import MoviesData from './data/moviesData.json'
import './scss/_moveList.scss'

class MoviesListClass extends React.Component {

    constructor() {
        super();
        this.state = {
            moviesData: MoviesData,
            searchField: ""
        }
    }

    onSearchChange = (event) =>{
        const searchStriing = event.target.value.toLocaleLowerCase();
        this.setState(()=>{
            return {searchField: searchStriing}
            })
    }

    render() {
        const { moviesData, searchField } = this.state;
        const {onSearchChange} = this

        const filterMoviesArray = moviesData.filter((movie)=>{
            return movie.catName.toLocaleLowerCase().includes(searchField);
        });

        return (
            <Fragment>
                <div className='row text-center'>
                    <h3>List Page</h3>
                    <p>Here is some text</p>
                </div>
                <div className='row '>
                    <div className="card">
                        <div className="card-body">
                            <div className='col searchBar'>
                                <input 
                                    className='searchBox' 
                                    onChange={onSearchChange} 
                                    type="search" 
                                    placeholder='Search Text' />
                            </div> 
                            <div className='d-flex flex-row mb-3'>
                            {filterMoviesArray.map((movieCat, a) => (
                                <div key={"con_" + a} className="card col cardWrapper">
                                    <div className="card-body">
                                        <h5 key={"title_" + a } className="card-title cardTitle">{movieCat.catName}</h5>
                                        <ul>
                                        {movieCat.movies.map((movie, b)=>(
                                            <li key={"mov_"+a+"_"+b}>{movie.name}</li>
                                        ))}
                                        </ul>                             
                                    </div>
                                </div>
                            ))}
                            </div> 
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default MoviesListClass;