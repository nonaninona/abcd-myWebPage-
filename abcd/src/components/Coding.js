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
		  
		<NavBar menu={{menu1:false, menu2:true, menu3:true, menu4:true}}></NavBar>
		
		<main>
			<section className={'bookmarktechstack'	}>
				<div className={'section-title'}>관심 있는 기술 스택</div>
				<p>
					<img src={GitHub} alt="GitHub"></img>
					<img src={HTMLCSSJS} alt="HTML/CSS/JS"></img>
					<img src={React} alt="React"></img>
					<img src={Notion} alt="Notion"></img>
				</p>
			</section>
			<section className={'portfolios'}>
				<div className={'section-title'}>포트폴리오</div>
				
				<div className={'portfolio'}>
					<img className={'logo'} src={logo} alt="logo" />
					<p>	
						L2H는 나의 각종 업무를 도와주는 웹페이지이다.
					</p>
				</div>
				<div className={'portfolio'}>
					<img src={guntor} alt="guntor&guntee" />
					<p>
						guntor&guntee는 osam 프로젝트다.
					</p>
				</div>
			</section>
		</main>

		<footer>
		</footer>
    </div>
  )
}

export default Coding;