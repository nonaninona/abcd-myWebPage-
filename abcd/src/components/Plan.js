import './Plan.scss';
import NavBar from './NavBar.js';


function Plan(){
  return (
    <div>
		  
		<header>
		</header>
		  
		<NavBar menu={{menu1:true, menu2:true, menu3:true, menu4:false}}></NavBar>
		
		<main>
			<section className={'week-plan'}>
				<div className={'section-title'}>이번주 계획표</div>
			</section>
			<section className={'habits'}>
				<div className={'section-title'}>습관</div>
			</section>
			<section className={'todo'}>
				<div className={'section-title'}>할 일</div>
			</section>
		</main>

		<footer>
		</footer>
    </div>
  )
}

export default Plan;