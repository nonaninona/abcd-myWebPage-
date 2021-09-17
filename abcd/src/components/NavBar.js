import React from 'react';
import logo from '../images/logo.png';
import './NavBar.scss';
import { Link } from 'react-router-dom';

function selectedMenu(props, current){
	if(props.selectedMenu == current){
		return(
			{
				color:'blue',
				fontWeight:'bold',
			
			}
		)
	}
	else{
		return(
			{color:'black'}
		)
	}
}

function NavBar(props){

	return(
		<nav>
			<Link to='/'><img src={logo} alt={'logo'} /></Link>
			<ul>
				<li><Link to='/coding' className={'link'} style={selectedMenu(props, 1)}>코딩</Link></li>
				<li><Link to='/office' className={'link'} style={selectedMenu(props, 2)}>사무</Link></li>
				<li><Link to='/finance' className={'link'} style={selectedMenu(props, 3)}>재무</Link></li>
				<li><Link to='/plan' className={'link'} style={selectedMenu(props, 4)}>계획</Link></li>
			</ul>
		</nav>
	)	
}

export default NavBar;