import React, { useState, useEffect } from 'react';

import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import AddFavourites from './AddToFavourites';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);
    const [checkFavourites, setCheckFavourites] = useState([]);

    const navigate = useNavigate()

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue ? searchValue : 'Avengers'}&apikey=81316d52`;
        // const url = `http://www.omdbapi.com/?t=movie&apikey=81316d52`;

        const response = await fetch(url);
        const responseJson = await response.json();

        // console.log(responseJson);

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };



    // const addFavouriteMovie = (movie) => {
    //     const movieFavourites = JSON.parse(
    //         localStorage.getItem('react-movie-app-favourites')
    //     );
    //     setCheckFavourites(movieFavourites);

    //     if (checkFavourites) {
    //         checkFavourites.map(checkFavourite => {
    //             console.log(checkFavourite.imdbID);
    //             if (checkFavourite.imdbID !== movie.imdbID) {
    //                 const newFavouriteList = [...favourites, movie];
    //                 setFavourites(newFavouriteList);
    //                 saveToLocalStorage(newFavouriteList);
    //                 // navigate('/favourites')
    //             } else {
    //                 alert('already exist!')
    //             }
    //         })
    //     } else {
    //         alert(movie.imdbID);
    //         const newFavouriteList = [...favourites, movie];
    //         setFavourites(newFavouriteList);
    //         saveToLocalStorage(newFavouriteList);
    //         // navigate('/favourites')
    //     }
    // };


    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
        navigate('/favourites')
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);


    return (

        <div className='container movie-app'>
            <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className='row m-auto mb-5 justify-content-center'>
                <MovieListHeading heading='Movies' />
            </div>
            <div className='row m-auto justify-content-center'>
                <MovieList
                    movies={movies}
                    favouriteComponent={AddFavourites}
                    handleFavouritesClick={addFavouriteMovie}
                />
            </div>

        </div>
    )
}

export default Home