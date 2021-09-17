import './Office.scss';
import NavBar from './NavBar.js';
import gmail from '../images/Gmail.png';
import navermail from '../images/NAVERMail.png';
import googlenews from '../images/GoogleNews.png';

function Office(){
  return (
    <div>
		  
		<header>
		</header>
		  
		<NavBar selectedMenu={2}></NavBar>
		
		<main>
			<section className={'office-bookmark'}>
				<div className={'section-title'}>사무 웹페이지</div>
				<div className={'office-bookmark-images'}>
					<a href="https://mail.google.com/" target="_blank" rel="noreferrer"><img className={'bookmark-image'} src={gmail} alt="gmail" /></a>
					<a href="https://mail.naver.com/" target="_blank" rel="noreferrer"><img className={'bookmark-image'} src={navermail} alt="gmail" /></a>
					<a href="https://news.google.com/" target="_blank" rel="noreferrer"><img className={'bookmark-image'} src={googlenews} alt="gmail" /></a>
				</div>
			</section>
		</main>

		<footer>
		</footer>
    </div>
  )
}

export default Office;