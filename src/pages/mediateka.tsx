import Header from './shared/header';
import Aside from './shared/aside';
import Footer from './shared/footer';
import { NavLink } from 'react-router-dom';

function Mediateka() {
    return (
        <div className="app">
			<Header/>
			<Aside />
            <div className="content">
                <h1 className="content__title page-title">Медиатека</h1>
				<div className="prevew-area">
					<div className="prevew-area__title-wrap">
						<h2 className="prevew-area__title page-title">Плэйлисты</h2>
					</div>
					<div className="prevew-area__content">
						<NavLink to="/playlist" className="card" style={{textDecoration: 'none'}}>
							<img src="assets/images/tracks/Eminem_Curtain_call.jpg"/>
							<div className="card__title">M&M's</div>
							<div className="card__subtitle">Автор: user</div>
						</NavLink>
						<div className="card">
							<img src="assets/images/tracks/Linkin_Park.jpg"/>
							<div className="card__title">ROCK</div>
							<div className="card__subtitle">Автор: user</div>
						</div>
						<div className="card">
							<img src="assets/images/tracks/Bethowen.jpg"/>
							<div className="card__title">Классика</div>
							<div className="card__subtitle">Автор: user</div>
						</div>
						<div className="card">
							<img src="assets/images/tracks/Eminem-revival-sober.jpg"/>
							<div className="card__title">Вечеринка</div>
							<div className="card__subtitle">Автор: user</div>
						</div>
						<div className="card">
							<img src="assets/images/tracks/Boyarski.jpg"/>
							<div className="card__title">Тренировка</div>
							<div className="card__subtitle">Автор: user</div>
						</div>
                        <div className="card">
							<img src="assets/images/tracks/Eminem_show.jpg"/>
							<div className="card__title">Rap God</div>
							<div className="card__subtitle">Автор: user</div>
						</div>
						<div className="card">
							<img src="assets/images/tracks/relax.png"/>
							<div className="card__title">Relax</div>
							<div className="card__subtitle">Автор: user</div>
						</div>
					</div>
				</div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Mediateka;