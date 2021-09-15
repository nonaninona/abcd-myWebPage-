import React from 'react';
import logo from '../images/logo.png';
import './NavBar.scss';
import { Link } from 'react-router-dom';

function NavBar(){

	return(
		<nav>
			<Link to='/'><img src={logo} alt={'logo'} /></Link>
			<ul>
				<li><Link to='/Coding' className={'link'}>코딩</Link></li>
				<li><Link to='' className={'link'}>사무</Link></li>
				<li><Link to='' className={'link'}>재무</Link></li>
				<li><Link to='' className={'link'}>계획</Link></li>
			</ul>
		</nav>
	)	
}

export default NavBar;