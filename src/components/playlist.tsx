import Header from '../pages/shared/header';
import Aside from '../pages/shared/aside';
import Footer from '../pages/shared/footer';

function Playlist() {
    return (
        <div className="app">
			<Header/>
			<Aside />
            <div className="playlist">
                <div className="playlist__header">
                    <div className="playlist__back-btn btn">
                        <i className="fa fa-chevron-circle-left"/>
                    </div>
                    <img src="assets/images/tracks/Eminem_Curtain_call.jpg"/>
                    <h1 className="playlist__title page-title">M&M's</h1>
                </div>
                <div className="items-list">
                    <div className="items-list__title">
                        <div>#</div>
                        <div>НАЗВАНИЕ</div>
                        <div>АЛЬБОМ</div>
                        <i className="fa fa-clock-o" />
                    </div>
                    <div className="items-list__content">
                        <div className="item" >
                            <div className="item__id">1</div>
                            <div className="item__song-title">
                                <img className="item__img" src="assets/images/tracks/Eminem_Curtain_call.jpg" />
                                <div className="item__title">The Real Slim Shady</div>
                                <div className="item__subtitle">Eminem</div>
                            </div>
                            <div className="item__album">The Marshall Mathers LP</div>
                            <div className="item__clock">3:57</div>
                        </div>
                        <div className="item" >
                            <div className="item__id">2</div>
                            <div className="item__song-title">
                                <img className="item__img" src="assets/images/tracks/Eminem_Curtain_call.jpg" />
                                <div className="item__title">The Real Slim Shady</div>
                                <div className="item__subtitle">Eminem</div>
                            </div>
                            <div className="item__album">The Marshall Mathers LP</div>
                            <div className="item__clock">3:57</div>
                        </div>
                        <div className="item" >
                            <div className="item__id">3</div>
                            <div className="item__song-title">
                                <img className="item__img" src="assets/images/tracks/Eminem_Curtain_call.jpg" />
                                <div className="item__title">The Real Slim Shady</div>
                                <div className="item__subtitle">Eminem</div>
                            </div>
                            <div className="item__album">The Marshall Mathers LP</div>
                            <div className="item__clock">3:57</div>
                        </div>
                        <div className="item" >
                            <div className="item__id">4</div>
                            <div className="item__song-title">
                                <img className="item__img" src="assets/images/tracks/Eminem_Curtain_call.jpg" />
                                <div className="item__title">The Real Slim Shady</div>
                                <div className="item__subtitle">Eminem</div>
                            </div>
                            <div className="item__album">The Marshall Mathers LP</div>
                            <div className="item__clock">3:57</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Playlist;