import './Plan.scss';
import NavBar from './NavBar.js';
import planImg from '../images/plan.jpg';
import { Table } from 'react-bootstrap';

function Plan(){
  return (
    <div>
		  
		<header>
		</header>
		  
		<NavBar selectedMenu={4}></NavBar>
		
		<main>
			<section className={'week-plan'}>
				<div className={'section-title'}>이번주 계획표</div>
				<div>img파일? 아니면 자체적으로 레이아웃?</div>
				<img src={planImg} alt={'planimg'}></img>
			</section>
			<section className={'habits'}>
				<div className={'section-title'}>습관</div>
				<div>habit 리스트</div>
				<ul>
					<li>물 3통 마시기</li>
					<li>하루 2회 세안</li>
					<li>이틀에 한 번은 가족, 여자친구에게 전화 돌리기</li>
					<li>일기 쓰기</li>
					<li>독후감 쓰기</li>
					<li>책 읽기</li>
				</ul>
			</section>
			<section className={'todo'}>
				<div className={'section-title'}>할 일</div>
				<div>체크리스트 재사용해서 완료하면 사라지게</div>
			</section>
		</main>

		<footer>
		</footer>
    </div>
  )
}

export default Plan;