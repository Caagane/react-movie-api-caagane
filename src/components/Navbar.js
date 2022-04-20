import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-center">
                <Link to='/' className="navbar-brand">SomMovie</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favourites">Favourites</Link>
                        </li>
                    </ul>
                    
                    <input
                        className="search form-control me-2 mb-3 mb-md-0" type="search"
                        aria-label="Search"
                        value={props.value}
                        onChange={(event) => props.setSearchValue(event.target.value)}
                        placeholder='Search a Movie...'
                        id='search'
                        style={{display: `${props.serchVisiblity ? 'block' : 'none'}`}}
                    />
                </div>
            </div>
        </nav>

    )
}

export default Navbar