import github from '../images/GitHub.png';
import figma from '../images/Figma.png';
import jandi from '../images/JANDI.png';
import notion from '../images/Notion.png';
import NavBar from './NavBar.js';
import './Home.scss';
import { useState } from 'react';

/* 

	이미지는 소문자, component는 대문자
	className은 -로 구분
*/

function todoList(){
	
}

function addList(){
	
}

function Home() {

	let [attendanceTime, changeAttendanceTime] = useState(0);
	let [todoLists, changeTodoLists] = useState({});
	
	return (
	<div>

		<header>
		</header>

		<NavBar selectedMenu={1}></NavBar>

		<main>
			<section className={'attendance-book'}>
				<div className={'section-title'}>Prop 테스트</div>
				<div className={'attendance-time'} onClick={()=>{changeAttendanceTime(attendanceTime+1)}}>{attendanceTime}</div>
			</section>
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
				<div className={'todolist-board'}>
					<div className={'add-list'} style={{fontSize:'40px'}} onClick={addList}>+</div>
					{
					<ul className={'todolist'}>
						<li className={'todoline'}>
							<input type="checkbox" id="todo1" /><label className={'my-checkbox'} htmlFor="todo1"><span className={'my-checkmark'} /></label>
							<span>코딩 공부하기</span></li>
						<li className={'todoline'}>
							<input type="checkbox" id="todo2" /><label className={'my-checkbox'} htmlFor="todo2"><span className={'my-checkmark'} /></label>
							<span>계획표 짜기</span>
						</li>
						<li className={'todoline'}>
							<input type="checkbox" id="todo3" /><label className={'my-checkbox'} htmlFor="todo3"><span className={'my-checkmark'} /></label>
							<span>독서하기</span>
						</li>
						<li className={'todoline'}>
							<input type="checkbox" id="todo4" /><label className={'my-checkbox'} htmlFor="todo4"><span className={'my-checkmark'} /></label>
							<span>디자인 공부하기</span>
						</li>
					</ul>
					}
				</div>
			</section>
		</main>

		<footer>
		</footer>
	</div>
	);
}

export default Home;
