import Header from '../pages/shared/header';
import Aside from '../pages/shared/aside';
import Footer from '../pages/shared/footer';
import { NavLink } from 'react-router-dom';

function Playlist() {
    return (
        <div className="app">
			<Header/>
			<Aside />
            <div className="content">
                <h1 className="content__title page-title">Плэйлист</h1>
				<div className="prevew-area">
					<div className="prevew-area__title-wrap">
						<h2 className="prevew-area__title page-title">M&M's</h2>
					</div>
					<div className="prevew-area__content">
					</div>
				</div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Playlist;