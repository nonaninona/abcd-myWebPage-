import './Finance.scss';
import NavBar from './NavBar.js';
import { Tabs, Tab } from 'react-bootstrap';

function Finance(){
  return (
    <div>
		  
		<header>
		</header>
		  
		<NavBar menu={{menu1:true, menu2:true, menu3:false, menu4:true}}></NavBar>
		
		<main>
			<section className={'finance-status'}>
				<div className={'section-title'}>재무상태</div>
				<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
					<Tab eventKey="stock" title="주식">
						주식1: 얼마(몇주)<br />
						주식2: 얼마(몇주)
					</Tab>
					<Tab eventKey="bond" title="채권">
						채권1: 얼마<br />
						채권2: 얼마<br />
					</Tab>
					<Tab eventKey="cash" title="현금">
						얼마
					</Tab>
				</Tabs>
			</section>
			<section className={'budget'}>
				<div className={'section-title'}>이번달 예산 편성</div>
			</section>
			<section className={'investment-status'}>
				<div className={'section-title'}>투자상황</div>
			</section>
			<section className={'account-book'}>
				<div className={'section-title'}>가계부</div>
			</section>
		</main>

		<footer>
		</footer>
    </div>
  )
}

export default Finance;