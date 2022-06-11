import { 
    ITrack,
    IAlbum, 
    IArtistDetail,  
} from '../scripts/commonSpotifyInterfaces';
import { 
    fetchArtist, 
    fetchArtistAlbums, 
    fetchArtistTopTracks 
} from '../scripts/fetchSpotify';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../components/shared/footer';
import Header from '../components/shared/header';
import TrackLine from '../components/trackLine';
import Aside from '../components/shared/aside';
import LoadingPage from './loading';
import AlbumCard from '../components/albumCard';

function Artist() {
    const [artistInfo, setArtistInfo] = useState<IArtistDetail | null>(null);
    const [topTracks, setTopTracks] = useState<any>(null);
    const [albums, setAlbums] = useState<any>(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetchArtist(id).then(data => setArtistInfo(data));
        fetchArtistTopTracks(id).then(data => setTopTracks(data));
        fetchArtistAlbums(id).then(data => setAlbums(data));
    }, [id]); 

    return (
        <div className="app">
			<Header />
			<Aside />
            {artistInfo && topTracks && albums ? (
                <div className="artist">
                    <div className="artist__header">
                        <button onClick={() => navigate(-1)} className="playlist__back-btn btn">
                            <i className="fa fa-angle-left"></i>
                        </button>
                        <img className='artist__header-img' src={artistInfo.images.length > 0 ? artistInfo.images[0].url : 'assets/images/tracks/Eminem_Curtain_call.jpg'}/>
                        <div className="playlist__title-wrap">
                            <h1 className="playlist__title page-title">{artistInfo.name}</h1>
                            <p className="playlist__subtitle">{`Число фолловеров: ${artistInfo.followers.total}`}</p>
                        </div>
                    </div>
                    <div className="items-list artist-list">
                        <h2 className="items-list__header">Популярные треки</h2>
                        <div className="items-list__title">
                            <div>#</div>
                            <div>НАЗВАНИЕ</div>
                            <div>АЛЬБОМ</div>
                            <i className="fa fa-clock-o" />
                        </div>
                        <div className="items-list__content">
                            {topTracks.tracks.map((item: ITrack, index: number) => {
                                return (
                                    <TrackLine key={item.id} track={item} index={index}/>
                                );
                            })}
                        </div>
                    </div>
                    <div className="album-prevew-area">
						<div className="prevew-area__title-wrap">
							<h2 className="items-list__header">Альбомы</h2>
						</div>
						<div className="prevew-area__content">
                            {albums.items.map((item: IAlbum) => {
                                return (
                                    <AlbumCard key={item.id} album={item}/>
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
 
export default Artist;