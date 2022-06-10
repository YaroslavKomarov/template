import { fetchPlaylists } from '../scripts/fetchSpotify';
import { useEffect, useState } from 'react';
import { formatTitle } from '../scripts/uiHandler';
import PlaylistCard from '../components/playlistCard'
import Header from './shared/header';
import Aside from './shared/aside';
import Footer from './shared/footer';
import LoadingPage from './loading';

interface IPlaylistsItem {
	id: string;
	images: any[];
	name: string;
	owner: {
		display_name: string;
	};
}

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
							{playlists.items.length > 0 && playlists.items.map((item: IPlaylistsItem) => {
								const imgUrl = item.images?.length > 0 ? item.images[0].url : 'assets/images/tracks/Eminem_Curtain_call.jpg';
								const title = formatTitle(item.name);
								const author = formatTitle(item.owner?.display_name);
								return (
									<PlaylistCard 
										key={item.id}
										playlistImg={imgUrl}
										playlistTitle={title}
										playlistAuthor={author}
									/>
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