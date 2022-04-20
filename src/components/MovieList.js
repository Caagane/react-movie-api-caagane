import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-center m-2' key={movie.imdbID}>
                    <img src={movie.Poster} alt='movie'></img>
                    <div
                        // onClick={() => props.handleFavouritesClick(movie)}
                        className='overlay d-flex flex-column align-items-center justify-content-center'
                    >
                        <p style={{ marginTop: '-10px' }}><span className='text-success'>Title: </span><small>{movie.Title}</small></p>
                        <p style={{ marginTop: '-10px' }}><span className='text-success'>Year: </span><small>{movie.Year}</small></p>
                        <p style={{ marginTop: '-10px' }}><span className='text-success'>Type: </span><small>{movie.Type}</small></p>

                        {/* <Link to={"/details/" + movie.imdbID} className="btn btn-light">Details</Link> */}
                        <FavouriteComponent
                            handleFavouritesClick={props.handleFavouritesClick}
                            movie={movie}
                        />
                    </div>
                </div>
            ))}
        </>
    );

};

export default MovieList;