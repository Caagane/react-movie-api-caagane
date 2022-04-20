import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import Navbar from './Navbar';

import RemoveFavourites from './RemoveFavourites';

function Favourites() {

    // const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);



    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('react-movie-app-favourites')
        );

        if (movieFavourites) {
            setFavourites(movieFavourites);
        }
    }, []);
    const updateToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );

        updateToLocalStorage(newFavouriteList);
        setFavourites(newFavouriteList);
    };

    
    
    // document.getElementById('search').style.display= 'none'



    return (
        <div className='container movie-app'>
            <Navbar />
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Favourites' />
            </div>
            <div className='row m-auto justify-content-center'>
                <MovieList
                    movies={favourites}
                    handleFavouritesClick={removeFavouriteMovie}
                    favouriteComponent={RemoveFavourites}
                />
            </div>

        </div>
    )
}

export default Favourites