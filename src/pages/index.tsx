import Header from './shared/header';
import Aside from './shared/aside';
import Footer from './shared/footer';
import Cookies from 'js-cookie';
import { CODE_URL } from './auth';

function Index() {
	// if (!Cookies.get('access_token')) {
	// 	return (
	// 		<div className="app">
	// 			<div className="authorization">
	// 				<img className="authorization__img" src="assets/images/spotify-logo-login.png"></img>
	// 				<a href={CODE_URL} className="authorization__login-link">Log in Spotify</a>
	// 			</div>
	// 		</div>
	// 	);
	// }
	return (
		<div className="app">
			<Header/>
			<Aside />
			<main className="content">
				<h1 className="content__title page-title">Рекомендации</h1>
				<div className="prevew-area">
					<div className="prevew-area__title-wrap">
						<h2 className="prevew-area__title page-title">Послушайте эти трэки</h2>
						<div className="prevew-area__show-all-items">смотреть все</div>
					</div>
					<div className="prevew-area__content">
						<div className="card">
							<img className="card__image" src="assets/images/tracks/Eminem_Curtain_call.jpg"/>
							<div className="card__title">Without me</div>
							<div className="card__subtitle">Eminem</div>
						</div>
						<div className="card">
							<img className="card__image"src="assets/images/tracks/Eminem_show.jpg"/>
							<div className="card__title">Lose Yourself</div>
							<div className="card__subtitle">Eminem</div>
						</div>
						<div className="card">
							<img className="card__image" src="assets/images/tracks/Eminem_To_Be_Murdered_By.jpg"/>
							<div className="card__title">Rap God</div>
							<div className="card__subtitle">Eminem</div>
						</div>
						<div className="card">
							<img className="card__image" src="assets/images/tracks/Eminem-revival-sober.jpg"/>
							<div className="card__title">Soldier</div>
							<div className="card__subtitle">Eminem</div>
						</div>
						<div className="card">
							<img className="card__image" src="assets/images/tracks/Eminem_show.jpg"/>
							<div className="card__title">'Till I Collapse</div>
							<div className="card__subtitle">Eminem</div>
						</div>
					</div>
				</div>
				<div className="prevew-area">
					<div className="prevew-area__title-wrap">
						<h2 className="prevew-area__title page-title">Вам могут понравиться эти исполнители</h2>
						<div className="prevew-area__show-all-items">смотреть все</div>
					</div>
					<div className="prevew-area__content">
						<div className="author-card card">
							<img className="card__image" src="assets/images/authors/Eminem.jpg"/>
							<div className="card__title">Eminem</div>
							<div className="card__subtitle">Исполнитель</div>
						</div>
						<div className="author-card card">
							<img className="card__image" src="assets/images/authors/Tzoi.jpg"/>
							<div className="card__title">Виктор Цой</div>
							<div className="card__subtitle">Исполнитель</div>
						</div>
						<div className="author-card card">
							<img className="card__image" src="assets/images/authors/Linkin_Park.jpg"/>
							<div className="card__title">Linkin Park</div>
							<div className="card__subtitle">Исполнитель</div>
						</div>
						<div className="author-card card">
							<img className="card__image" src="assets/images/authors/DDT.jpg"/>
							<div className="card__title">ДДТ</div>
							<div className="card__subtitle">Исполнитель</div>
						</div>
						<div className="author-card card">
							<img className="card__image" src="assets/images/authors/Boyarsky.jpg"/>
							<div className="card__title">Михаил Боярский</div>
							<div className="card__subtitle">Исполнитель</div>
						</div>
					</div>
				</div>
			</main>
			<Footer/>
		</div>
	);
}

export default Index;