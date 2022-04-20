import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='col d-flex pt-3'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;