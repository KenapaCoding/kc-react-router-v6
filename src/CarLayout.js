/** @format */

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CarLayout = () => {
	return (
		<>
			<nav className='car-layout'>
				<Link to='/cars/1'>Car 1</Link>
				<Link to='/cars/2'>Car 2</Link>
				<Link to='/cars/3'>Car 3</Link>
			</nav>
            <Outlet context={{text: "this is a nice car"}}/>
		</>
	);
};

export default CarLayout;
