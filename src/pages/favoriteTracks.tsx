import Header from './shared/header';
import Aside from './shared/aside';
import Footer from './shared/footer';

function FavoriteTracks() {
    return (
        <div className="app">
			<Header/>
			<Aside />
            <div className="content">
                <h1 className="content__title page-title">Любимые треки</h1>
                <div className="prevew-area">
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default FavoriteTracks;