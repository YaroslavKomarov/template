import { IAlbum, IArtistDetail, IPlaylistCard } from '../scripts/commonSpotifyInterfaces';
import { Navigate } from 'react-router-dom';
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
		fetchRecommendedArtists('2q3GG88dVwuQPF4FmySr9I').then(data => setRecommendedArtists(data));
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
							<div className="prevew-area__show-all-items">смотреть все</div>
						</div>
						<div className="prevew-area__content">
							{featuredPlaylists.playlists.items.length > 0 && featuredPlaylists.playlists.items.map((item: IPlaylistCard) => {
								return (
									<PlaylistCard key={item.id} playlist={item} />
								);
							})}
						</div>
					</div>
					<div className="prevew-area">
						<div className="prevew-area__title-wrap">
							<h2 className="prevew-area__title page-title">Свежие релизы</h2>
							<div className="prevew-area__show-all-items">смотреть все</div>
						</div>
						<div className="prevew-area__content">
							{newReleases.albums.items.length > 0 && newReleases.albums.items.map((item: IAlbum) => {
								return (
									<AlbumCard key={item.id} album={item}/>
								);
							})}
						</div>
					</div>
					<div className="prevew-area">
						<div className="prevew-area__title-wrap">
							<h2 className="prevew-area__title page-title">Вам могут понравиться эти исполнители</h2>
							<div className="prevew-area__show-all-items">смотреть все</div>
						</div>
						<div className="prevew-area__content">
							{recommendedArtists.artists.length > 0 && recommendedArtists.artists.map((item: IArtistDetail) => {
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