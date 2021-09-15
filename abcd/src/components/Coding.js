import './Coding.scss';
import NavBar from './NavBar.js';
import GitHub from '../images/GitHub.png';
import HTMLCSSJS from '../images/HTML-CSS-JS.png';
import React from '../images/React.png';
import Notion from '../images/Notion.png';
import logo from '../images/logo.png';
import guntor from '../images/guntor.png';

function Coding(){
  return (
    <div>
		  
		<header>
		</header>
		  
		<NavBar></NavBar>
		
		<main>
			<section className={'bookmarktechstack'	}>
				<h2>관심 있는 기술 스택</h2>
				<p>
					<img src={GitHub} alt="GitHub"></img>
					<img src={HTMLCSSJS} alt="HTML/CSS/JS"></img>
					<img src={React} alt="React"></img>
					<img src={Notion} alt="Notion"></img>
				</p>
			</section>
			<section className={'portfolio'}>
				<h2>포트폴리오</h2>
				<p>
					<img className={'logo'} src={logo} alt="logo"></img>
					L2H는 나의 각종 업무를 도와주는 웹페이지이다.
				</p>
				<p>
					<img src={guntor} alt="guntor&guntee"></img>
					guntor guntee는 osam 프로젝트다.
				</p>
			</section>
		</main>

		<footer>
		</footer>
    </div>
  )
}

export default Coding;