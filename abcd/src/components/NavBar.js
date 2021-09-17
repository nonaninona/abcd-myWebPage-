import React from 'react';
import logo from '../images/logo.png';
import './NavBar.scss';
import { Link } from 'react-router-dom';

function NavBar(props){

	return(
		<nav>
			<Link to='/'><img src={logo} alt={'logo'} /></Link>
			<ul>
				<li><Link to='/coding' className={'link'}>{props.menu.menu1 && '코딩'}</Link></li>
				<li><Link to='/office' className={'link'}>{props.menu.menu2 && '사무'}</Link></li>
				<li><Link to='/finance' className={'link'}>{props.menu.menu3 && '재무'}</Link></li>
				<li><Link to='/plan' className={'link'}>{props.menu.menu4 && '계획'}</Link></li>
			</ul>
		</nav>
	)	
}

export default NavBar;