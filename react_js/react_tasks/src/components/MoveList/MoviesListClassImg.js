import React, { Fragment } from 'react';
import MoviesData from './data/moviesData.json'
import './scss/_moveList.scss'
class MoviesListClassImg extends React.Component {

    constructor() {
        super();
        this.state = {
            moviesData: MoviesData,
            serchField: ""
        }
    }

    onSearchChange = (event) => {
        const searchStriing = event.target.value.toLocaleLowerCase();
        this.setState(()=>{
                    return{serchField: searchStriing}
         })       
    }

    render() {
        const { moviesData, serchField} = this.state;
        const { onSearchChange } = this

        const filteredMovies = moviesData.filter((movie) => {
            return movie.catName.toLocaleLowerCase().includes(serchField);
        });

        return (
            <Fragment>
                <div className='row text-center'>
                    <h3>List Page</h3>
                    <p>Here is some text</p>
                </div>
                <div className='row '>
                    <div className="card">
                        <div className="card-body ">
                            <div className='col searchBar'>
                                <input
                                    className='searchBox'
                                    type='search'
                                    placeholder="Search List"
                                    onChange={onSearchChange}
                                />
                            </div>
                            {filteredMovies.map((movieCat, a) => (
                                <div key={"con_" + a} className="card col cardWrapper">
                                    <div className="card-body">
                                        <h5 key={"title_" + a} className="card-title cardTitle">{movieCat.catName}</h5>
                                        {movieCat.movies.map((movie, b) => (
                                            <div key={"mov_" + a + "_" + b} className="d-flex align-items-center dFlex ">
                                                <div className="flex-shrink-0">
                                                    <img src={movie.img} alt={movie.name} />
                                                </div>
                                                <div className="flex-grow-1 ms-3 itemName">
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

export default MoviesListClassImg;