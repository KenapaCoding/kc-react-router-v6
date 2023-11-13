/** @format */

import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';

const CarLayout = () => {
	return (
		<>
			<nav className='car-layout'>
				<Link to='/cars/1' replace>Car 1</Link>
				<Link to='/cars/2' reloadDocument>Car 2</Link>
				<Link to='/cars/second'>Second Car</Link>
			</nav>
            <Outlet context={{text: "hello there"}}/>
		</>
	);
};

export default CarLayout;
