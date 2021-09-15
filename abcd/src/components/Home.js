import github from '../images/GitHub.png';
import figma from '../images/Figma.png';
import jandi from '../images/JANDI.png';
import notion from '../images/Notion.png';
import NavBar from './NavBar.js';
import './Home.scss';

/* 

	이미지는 소문자, component는 대문자
	className은 -로 구분
*/

function Home() {
  return (
    <div>
		  
		<header>
		</header>
		  
		<NavBar></NavBar>
		
		<main>
			<section className={'bookmark'}>
				<div className={'section-title'}>자주 가는 사이트</div>
				<p>
					<a href="https://github.com/" target="_blank" rel="noreferrer"><img style={{left: '0px'}} src={github} alt={'github'} /></a>
					<a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img style={{left: '300px'}} src={figma} alt={'figma'} /></a>
					<a href="https://www.jandi.com//" target="_blank" rel="noreferrer"><img style={{left: '600px'}} src={jandi} alt={'jandi'} /></a>
					<a href="https://www.notion.so/" target="_blank" rel="noreferrer"><img style={{left: '900px'}} src={notion} alt={'notion'} /></a>
				</p>
			</section>
			<section className={'todolist'}>
				<div className={'section-title'}>오늘의 할 일</div>
				<div>
					<ul>
						<li><input type="checkbox" id="todo1" /><label htmlFor="todo1"><span /></label><span>코딩 공부하기</span></li>
						<li><input type="checkbox" id="todo2" /><label htmlFor="todo2"><span /></label><span>계획표 짜기</span></li>
						<li><input type="checkbox" id="todo3" /><label htmlFor="todo3"><span /></label><span>독서하기</span></li>
						<li><input type="checkbox" id="todo4" /><label htmlFor="todo4"><span /></label><span>디자인 공부하기</span></li>
					</ul>
				</div>
			</section>
		</main>

		<footer>
		</footer>
    </div>
  );
}

export default Home;
