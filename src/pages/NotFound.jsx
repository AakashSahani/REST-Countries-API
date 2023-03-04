import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className="notFound">
			<h1>Oops!</h1>
			<p>The page you are looking for is not here.</p>
			<Link to="/" className="button">
				<button className="button">Go Back</button>
			</Link>
		</div>
	);
}

export default NotFound;
