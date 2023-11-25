/** @format */

import React from 'react';
import Cars from './pages/Cars'
import CarDetail from './pages/CarDetail';
import SecondCar from './pages/SecondCar'
import CarLayout from './CarLayout';
import { Routes, Route } from 'react-router-dom';

const CarsRoute = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<CarLayout />}>
				<Route
					index
					element={<Cars />}
				/>
				<Route
					path=':id'
					element={<CarDetail />}
				/>
				<Route
					path='second'
					element={<SecondCar />}
				/>
			</Route>
		</Routes>
	);
};

export default CarsRoute;
