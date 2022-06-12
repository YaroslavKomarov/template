import { IPlaylist } from '../scripts/commonSpotifyInterfaces';
import { fetchPlaylistData } from '../scripts/fetchSpotify';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../components/shared/footer';
import Header from '../components/shared/header';
import TrackLine from '../components/trackLine';
import Aside from '../components/shared/aside';
import LoadingPage from './loading';

function Playlist() {
    const [playlist, setPlaylist] = useState<IPlaylist | null>(null)
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetchPlaylistData(id).then(playlistsData => setPlaylist(playlistsData));
    }, [id]); 

    return (
        <div className="app">
			<Header />
			<Aside />
            {playlist ? (
                <div className="playlist">
                    <div className="playlist__header">
                        <button onClick={() => navigate(-1)} className="back-btn btn">
                            <i className="fa fa-angle-left"></i>
                        </button>
                        <img src={playlist.images.length > 0 ? playlist.images[0].url : 'assets/images/tracks/Eminem_Curtain_call.jpg'}/>
                        <h1 className="playlist__title page-title">{playlist.name}</h1>
                    </div>
                    <div className="items-list">
                        <div className="items-list__title">
                            <div>#</div>
                            <div>НАЗВАНИЕ</div>
                            <div>АЛЬБОМ</div>
                            <i className="fa fa-clock-o" />
                        </div>
                        <div className="items-list__content">
                            {playlist.tracks.items.map((item, index) => {
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
 
export default Playlist;