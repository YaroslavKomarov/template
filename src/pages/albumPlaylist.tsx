import { IAlbumDetail } from '../scripts/commonSpotifyInterfaces';
import { fetchAlbumData } from '../scripts/fetchSpotify';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LoadingPage from './loading';
import Aside from '../components/shared/aside';
import Footer from '../components/shared/footer';
import Header from '../components/shared/header';
import AlbumTrackLine from '../components/albumTrackLine';

function AlbumPlaylist() {
    const [albumPlaylist, setAlbumPlaylist] = useState<IAlbumDetail | null>(null)
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const doFetch = async () => {
            await fetchAlbumData(id).then(playlistsData => setAlbumPlaylist(playlistsData));
        }
        doFetch();
    }, [id]); 

    return (
        <div className="app">
			<Header />
			<Aside />
            {albumPlaylist ? (
                <div className="album playlist">
                    <div className="playlist__header">
                        <button onClick={() => navigate(-1)} className="playlist__back-btn btn">
                            <i className="fa fa-angle-left"></i>
                        </button>
                        <img src={albumPlaylist.images.length > 0 ? albumPlaylist.images[0].url : 'assets/images/tracks/Eminem_Curtain_call.jpg'}/>
                        <div className="playlist__title-wrap">
                            <h1 className="playlist__title page-title">{albumPlaylist.name}</h1>
                            <p className="playlist__subtitle">{`Альбом, число треков: ${albumPlaylist.total_tracks}`}</p>
                        </div>
                    </div>
                    <div className="album-items-list items-list">
                        <div className="album-items-list__title">
                            <div>#</div>
                            <div>НАЗВАНИЕ</div>
                            <i className="fa fa-clock-o" />
                        </div>
                        <div className="items-list__content">
                            {albumPlaylist.tracks.items.map((item, index) => {
                                return (
                                    <AlbumTrackLine key={item.id} track={item} index={index} />
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
 
export default AlbumPlaylist;