import React, { Fragment } from 'react';
import MoviesData from './data/moviesData.json'
import './scss/_moveList.scss'

class MoviesListClass extends React.Component {

    constructor() {
        super();
        this.state = {
            moviesData: MoviesData
        }
    }

    render() {
        const { moviesData } = this.state;
        return (
            <Fragment>
                <div className='row text-center'>
                    <h3>List Page</h3>
                    <p>Here is some text</p>
                </div>
                <div className='row '>
                    <div className="card">
                        <div className="card-body d-flex flex-row mb-3">
                            {moviesData.map((movieCat, a) => (
                                <div key={"con_" + a} className="card col cardWrapper">
                                    <div className="card-body">
                                        <h5 key={"title_" + a } className="card-title">{movieCat.catName}</h5>
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
            </Fragment>
        )
    }

}

export default MoviesListClass;