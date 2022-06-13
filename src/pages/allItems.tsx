import { IAlbum, IArtistDetail, IPlaylistCard } from '../scripts/commonSpotifyInterfaces';
import { useLocation, useNavigate } from 'react-router-dom';
import Aside from '../components/shared/aside';
import AlbumCard from '../components/albumCard';
import Footer from '../components/shared/footer';
import Header from '../components/shared/header';
import ArtistCard from '../components/artistCard';
import PlaylistCard from '../components/playlistCard';

interface LocationState {
    type: string;
    title: string;
    collection: any;
}

function AllItems() {
    const location = useLocation();
    const { type, title, collection } = location.state as LocationState;
    const navigate = useNavigate();

    const getRenderItems = () => {
        if (type === 'playlist') {
            return collection.playlists.items.length > 0 && collection.playlists.items.map((item: IPlaylistCard) => {
                return (
                    <PlaylistCard key={item.id} playlist={item} />
                );
            });
        } else if (type === 'album') {
            return collection.albums.items.length > 0 && collection.albums.items.map((item: IAlbum) => {
                return (
                    <AlbumCard key={item.id} album={item}/>
                );
            });
        } else {
            return collection.artists.length > 0 && collection.artists.map((item: IArtistDetail) => {
                return (
                    <ArtistCard key={item.id} artist={item}/>
                );
            });
        }
    };

	return (
        <div className="app">
			<Header/>
			<Aside />
            <main className="content">
                <button onClick={() => navigate(-1)} className="back-btn btn">
                    <i className="fa fa-angle-left"></i>
                </button>
                <div className="prevew-area">
                    <div className="prevew-area__title-wrap">
                        <h2 className="prevew-area__title page-title">{title}</h2>
                    </div>
                    <div className="prevew-area__content">
                        {getRenderItems()}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
	);
}

export default AllItems;