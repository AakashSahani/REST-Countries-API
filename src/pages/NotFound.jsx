import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className="flex-1 h-[90vh] flex flex-col justify-between items-center gap-10 p-[10%]">
			<h1 className="text-5xl font-bold">404! Page Not Found</h1>
			<p className="text-3xl">The page you are looking for is not here.</p>
			<Link to="/" className="button">
				<button className="px-4 h-10 rounded bg-white text-veryDarkBlueText dark:bg-darkBlue dark:text-white shadow-md">
					Go Back
				</button>
			</Link>
		</div>
	);
}

export default NotFound;
