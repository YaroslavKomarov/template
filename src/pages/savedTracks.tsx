import { fetchSavedTracks } from '../scripts/fetchSpotify';
import { ITrack } from '../scripts/commonSpotifyInterfaces';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TrackLine from '../components/trackLine';
import Header from '../components/shared/header';
import Aside from '../components/shared/aside';
import Footer from '../components/shared/footer';
import LoadingPage from './loading';

function SavedTracks() {
    const [savedTracks, setSavedTracks] = useState<any>(null)
    //const [selectedTrack, setSelectedTrack] = useState<ITrack | null>(null)
    const navigate = useNavigate();

    useEffect(() => {
        fetchSavedTracks()
            .then(data => setSavedTracks(data));
    }, []);

    return (
        <div className="app">
			<Header/>
			<Aside />
            {savedTracks ? (
                <div className="playlist">
                    <div className="playlist__header">
                        <button onClick={() => navigate(-1)} className="back-btn btn">
                            <i className="fa fa-angle-left"></i>
                        </button>
                        <img 
                            width='250'
                            height='250'
                            src='assets/images/tracks/Eminem_Curtain_call.jpg'/>
                        <h1 className="playlist__title page-title">Сохраненные треки</h1>
                    </div>
                    <div className="items-list">
                        <div className="items-list__title">
                            <div>#</div>
                            <div>НАЗВАНИЕ</div>
                            <div>АЛЬБОМ</div>
                            <i className="fa fa-clock-o" />
                        </div>
                        <div className="items-list__content">
                            {savedTracks.items.length > 0 && savedTracks.items.map((item: { track: ITrack }, index: number) => {
                                const trackItem = item.track;
                                return (
                                    <TrackLine key={trackItem.id} track={trackItem} index={index}/>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <LoadingPage />
            )}
            <Footer />
        </div>
    );
}
 
export default SavedTracks;