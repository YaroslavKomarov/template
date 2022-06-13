import { IAlbum, IArtistDetail, IPlaylistCard } from '../scripts/commonSpotifyInterfaces';
import { Navigate, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { 
	fetchFeaturedPlaylists, 
	fetchNewReleases,
	fetchRecommendedArtists 
} from '../scripts/fetchSpotify'
import PlaylistCard from '../components/playlistCard';
import AlbumCard from '../components/albumCard';
import Header from '../components/shared/header';
import Footer from '../components/shared/footer';
import Aside from '../components/shared/aside';
import LoadingPage from './loading';
import Cookies from 'js-cookie';
import ArtistCard from '../components/artistCard';

function Index() {
	const [recommendedArtists, setRecommendedArtists] = useState<any>(null);
	const [featuredPlaylists, setFeaturedPlaylists] = useState<any>(null);
	const [newReleases, setNewReleases] = useState<any>(null);

    useEffect(() => {
		fetchRecommendedArtists('7dGJo4pcD2V6oG8kP0tJRR').then(data => setRecommendedArtists(data));
		fetchFeaturedPlaylists().then(data => setFeaturedPlaylists(data));
		fetchNewReleases().then(data => setNewReleases(data));
    }, []);
	
	if (!Cookies.get('access_token')) {
		return <Navigate to='/login' />;
	}

	return (
		<div className="app">
			<Header/>
			<Aside />
			{featuredPlaylists && newReleases && recommendedArtists ? (
				<main className="content">
					<h1 className="content__title page-title">Рекомендации</h1>
					<div className="prevew-area">
						<div className="prevew-area__title-wrap">
							<h2 className="prevew-area__title page-title">Взгляните на эти плейлисты</h2>
							<NavLink 
								to="/allItems" 
								state={{type: 'playlist', title: 'Взгляните на эти плейлисты', collection: featuredPlaylists}}
								className="prevew-area__show-all-items">смотреть все
							</NavLink>
						</div>
						<div className="prevew-area__content">
							{featuredPlaylists.playlists.items.length > 0 && featuredPlaylists.playlists.items.slice(0, 5).map((item: IPlaylistCard) => {
								return (
									<PlaylistCard key={item.id} playlist={item} />
								);
							})}
						</div>
					</div>
					<div className="prevew-area">
						<div className="prevew-area__title-wrap">
							<h2 className="prevew-area__title page-title">Свежие релизы</h2>
							<NavLink 
								to="/allItems" 
								state={{type: 'album', title: 'Свежие релизы', collection: newReleases}}
								className="prevew-area__show-all-items">смотреть все
							</NavLink>
						</div>
						<div className="prevew-area__content">
							{newReleases.albums.items.length > 0 && newReleases.albums.items.slice(0, 5).map((item: IAlbum) => {
								return (
									<AlbumCard key={item.id} album={item}/>
								);
							})}
						</div>
					</div>
					<div className="prevew-area">
						<div className="prevew-area__title-wrap">
							<h2 className="prevew-area__title page-title">Вам могут понравиться эти исполнители</h2>
							<NavLink 
								to="/allItems" 
								state={{type: 'artists', title: 'Вам могут понравиться эти исполнители', collection: recommendedArtists}}
								className="prevew-area__show-all-items">смотреть все
							</NavLink>
						</div>
						<div className="prevew-area__content">
							{recommendedArtists.artists.length > 0 && recommendedArtists.artists.slice(0, 5).map((item: IArtistDetail) => {
								return (
									<ArtistCard key={item.id} artist={item}/>
								);
							})}
						</div>
					</div>
				</main>
			) : (
				<LoadingPage />
			)}
			<Footer/>
		</div>
	);
}

export default Index;