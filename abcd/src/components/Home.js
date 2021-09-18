import github from '../images/GitHub.png';
import figma from '../images/Figma.png';
import jandi from '../images/JANDI.png';
import notion from '../images/Notion.png';
import NavBar from './NavBar.js';
import TodoListBoard from './TodoListBoard.js';
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

		<NavBar selectedMenu={1}></NavBar>

		<main>
			<section className={'bookmark'}>
				<div className={'section-title'}>자주 가는 사이트</div>
				<p className={'bookmark-images'}>
					<a href="https://github.com/" target="_blank" rel="noreferrer"><img className={'bookmark-image'} style={{left: '0px'}} src={github} alt={'github'} /></a>
					<a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img className={'bookmark-image'} style={{left: '300px'}} src={figma} alt={'figma'} /></a>
					<a href="https://www.jandi.com//" target="_blank" rel="noreferrer"><img className={'bookmark-image'} style={{left: '600px'}} src={jandi} alt={'jandi'} /></a>
					<a href="https://www.notion.so/" target="_blank" rel="noreferrer"><img className={'bookmark-image'} style={{left: '900px'}} src={notion} alt={'notion'} /></a>
				</p>
			</section>
			<section className={'todo'}>
				<div className={'section-title'}>오늘의 할 일</div>
				<TodoListBoard></TodoListBoard>
			</section>
		</main>

		<footer>
		</footer>
	</div>
	);
}

export default Home;
