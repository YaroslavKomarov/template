import { fetchPlaylists } from '../scripts/fetchSpotify';
import { useEffect, useState } from 'react';
import { formatTitle } from '../scripts/uiHandler';
import PlaylistCard from '../components/playlistCard'
import Header from './shared/header';
import Aside from './shared/aside';
import Footer from './shared/footer';

interface IPlaylists {
    items: {
		id: string;
		images: any[];
		name: string;
		owner: any;
	}[];
};

function Mediateka() {
    const [playlists, setPlaylists] = useState({} as IPlaylists)

    useEffect(() => {
        const fetchData = async () => {
            await fetchPlaylists().then(playlistsData => setPlaylists(playlistsData));			
        }
        fetchData();
    }, []);
	
    return (
        <div className="app">
			<Header/>
			<Aside />
            <div className="content">
                <h1 className="content__title page-title">Медиатека</h1>
				<div className="prevew-area">
					<div className="prevew-area__title-wrap">
						<h2 className="prevew-area__title page-title">Плэйлисты</h2>
					</div>
					<div className="prevew-area__content">
						{playlists.items.length > 0 && playlists.items.map(item => {
							const imgUrl = item.images?.length > 0 ? item.images[0].url : 'assets/images/tracks/Eminem_Curtain_call.jpg';
							const title = formatTitle(item.name);
							const author = formatTitle(item.owner?.display_name);
							return (
								<PlaylistCard 
									playlistId={item.id}
									playlistImg={imgUrl}
									playlistTitle={title}
									playlistAuthor={author}
								/>
							);
						})}
					</div>
				</div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Mediateka;