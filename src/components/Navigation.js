/** @format */

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    const [active,setActive] = useState()
	return (
		<>
			<ul>
				<li>
					<NavLink className={({isActive}) => {return isActive ? 'active': ''}}
						to='/'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink className={({isActive}) => {return isActive ? 'active': ''}} to='/cars'>Cars</NavLink>
				</li>
				<li>
					<NavLink className={({isActive}) => {return isActive ? 'active': ''}} to='/contact'>Contact</NavLink>
				</li>
				<li>
					<NavLink className={({isActive}) => {return isActive ? 'active': ''}}to='/about'>About</NavLink>
				</li>
			</ul>
		</>
	);
};

export default Navigation;
