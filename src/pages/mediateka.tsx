import { IPlaylistCard } from '../scripts/commonSpotifyInterfaces';
import { fetchPlaylists } from '../scripts/fetchSpotify';
import { useEffect, useState } from 'react';
import PlaylistCard from '../components/playlistCard'
import Header from '../components/shared/header';
import Aside from '../components/shared/aside';
import Footer from '../components/shared/footer';
import LoadingPage from './loading';

function Mediateka() {
    const [playlists, setPlaylists] = useState<any>(null)

    useEffect(() => {
        fetchPlaylists().then(playlistsData => setPlaylists(playlistsData));
    }, []);
	
    return (
        <div className="app">
			<Header/>
			<Aside />
			{playlists ? (
				<div className="content">
					<h1 className="content__title page-title">Медиатека</h1>
					<div className="prevew-area">
						<div className="prevew-area__title-wrap">
							<h2 className="prevew-area__title page-title">Плэйлисты</h2>
						</div>
						<div className="prevew-area__content">
							{playlists.items.length > 0 && playlists.items.map((item: IPlaylistCard) => {
								return (
									<PlaylistCard key={item.id} playlist={item} />
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
 
export default Mediateka;