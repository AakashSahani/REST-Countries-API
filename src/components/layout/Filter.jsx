import React from 'react';

function Filter() {
	return (
		<div className="container">
			<button>Filter by Region</button>
			<div className="filter">
				<button>Africa</button>
				<button>America</button>
				<button>Asia</button>
				<button>Europe</button>
				<button>Oceania</button>
			</div>
		</div>
	);
}

export default Filter;
