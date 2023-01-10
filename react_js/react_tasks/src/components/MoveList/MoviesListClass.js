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
                        {/* <div className="card-body d-flex flex-row mb-3"> */}
                        <div className="card-body ">
                            {moviesData.map((movieCat, a) => (
                                <div key={"con_" + a} className="card col cardWrapper">
                                    <div className="card-body">
                                        <h5 key={"title_" + a } className="card-title cardTitle">{movieCat.catName}</h5>
                                        {/* <ul>
                                        {movieCat.movies.map((movie, b)=>(
                                            <li key={"mov_"+a+"_"+b}>{movie.name}</li>
                                        ))}
                                        </ul> */}
                                        {movieCat.movies.map((movie, b)=>(
                                            <div key={"mov_"+a+"_"+b} className="d-flex align-items-center dFlex ">
                                                <div className="flex-shrink-0">
                                                    <img src={movie.img} alt={movie.name} />
                                                </div>
                                                <div class="flex-grow-1 ms-3 itemName">
                                                    {movie.name}
                                                </div>
                                            </div>
                                        ))}
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
