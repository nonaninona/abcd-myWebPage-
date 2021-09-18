import './Finance.scss';
import NavBar from './NavBar.js';
import { Tabs, Tab } from 'react-bootstrap';
import { Bar, Line, Pie } from 'react-chartjs-2';

function Finance(){
	const data = {
	  labels: [
		'주식',
		'채권',
		'현금'
	  ],
	  datasets: [{
		label: 'My First Dataset',
		data: [300, 50, 100],
		backgroundColor: [
		  'rgb(255, 99, 132)',
		  'rgb(54, 162, 235)',
		  'rgb(255, 205, 86)'
		],
		hoverOffset: 4
	  }]
	};
	const options = {
	  // responsive 속성을 false로 지정한다.
	  responsive: false,
	  scales: {
		yAxes: [
		  {
			ticks: {
			  beginAtZero: true,
			},
		  },
		],
	  },
	};
	return (
	<div>

		<header>
		</header>

		<NavBar selectedMenu={3}></NavBar>

		<main>
			<section className={'finance-status'}>
				<div className={'section-title'}>재무상태</div>
				<div className={'piechart'}>
					<Pie
						data={data}
						width={300}
						height={200}
						options={options}
						style={{width:'500px', height:'500px'}}
					/>
				</div>
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