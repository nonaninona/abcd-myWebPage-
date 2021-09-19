import './Finance.scss';
import NavBar from './NavBar.js';
import { Tabs, Tab, Table } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';

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
				<Table striped bordered hover>
				  <thead>
					<tr>
					  <th>통장 이름</th>
					  <th>목적 및 설명</th>
					  <th>책정 예산</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>적금통장</td>
					  <td>데이트비용, 종잣돈을 위한 군적금을 모으는 통장</td>
					  <td>200,000</td>
					</tr>
					<tr>
					  <td>경제적독립일투자통장</td>
					  <td>장기적 투자로 경제적 독립을 이루기 위한 통장</td>
					  <td>200,000</td>
					</tr>
					<tr>
					  <td>필수생활통장</td>
					  <td>Larry필수생활비를 위한 통장(자동이체 등록)</td>
					  <td>33,000</td>
					</tr>
					<tr>
					  <td>품위유지 및 자기투자통장</td>
					  <td>품위유지 및 자기투자를 위한 통장</td>
					  <td>80,000</td>
					</tr>
					<tr>
					  <td>개인지출통장</td>
					  <td>기호에 따른 소비 통장</td>
					  <td>20,000</td>
					</tr>
					<tr>
					  <td>선물통장</td>
					  <td>선물을 위한 통장</td>
					  <td>30,000</td>
					</tr>
					<tr>
					  <td>짜투리통장</td>
					  <td>위 통장들에 나눠넣고 남은 돈을 넣는 통장</td>
					  <td>-</td>
					</tr>
					<tr>
					  <td>송금용더미통장</td>
					  <td>송금을 위한 더미통장</td>
					  <td>-</td>
					</tr>
				  </tbody>
				</Table>
			</section>
			<section className={'investment-status'}>
				<div className={'section-title'}>투자상황</div>
				<div>포트폴리오, 자산 비율, 수익률 등 이것도 table로</div>
				<Table striped bordered hover>
				  <thead>
					<tr>
					  <th>tick</th>
					  <th>비율</th>
					  <th>유형</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>QQQ</td>
					  <td>25%</td>
					  <td>주식</td>
					</tr>
					<tr>
					  <td>TQQQ</td>
					  <td>75%</td>
					  <td>주식</td>
					</tr>
				  </tbody>
				</Table>
				<div>수익률 : 25%</div>
			</section>
			<section className={'account-book'}>
				<div className={'section-title'}>가계부</div>
				<div>지출내역</div>
				<Table striped bordered hover>
				  <thead>
					<tr>
					  <th>설명</th>
					  <th>가격</th>
					  <th>통장</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>px이용</td>
					  <td>5,000</td>
					  <td>개인지출통장</td>
					</tr>
					<tr>
					  <td>일기장구매</td>
					  <td>2,870</td>
					  <td>품위유지 및 자기투자통장</td>
					</tr>
				  </tbody>
				</Table>
			</section>
		</main>

		<footer>
		</footer>
	</div>
	)
}

export default Finance;