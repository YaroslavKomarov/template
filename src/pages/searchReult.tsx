import { ITrack, IAlbum, IArtistDetail } from '../scripts/commonSpotifyInterfaces';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { fetchSearchingData } from '../scripts/fetchSpotify';
import { useEffect, useState } from 'react';
import LoadingPage from './loading';
import Aside from '../components/shared/aside';
import TrackLine from '../components/trackLine';
import AlbumCard from '../components/albumCard';
import Footer from '../components/shared/footer';
import Header from '../components/shared/header';
import ArtistCard from '../components/artistCard';

interface LocationState {
    query: string;
}

interface ISearchProps {
	albums: {
		items: IAlbum[]
	};
	artists: {
		items: IArtistDetail[]
	};
	tracks: {
		items: ITrack[]
	};
};

function SearchResult() {
    const location = useLocation();
    const { query } = location.state as LocationState;
    const navigate = useNavigate();

    const [searchResult, setSearchResult] = useState<ISearchProps | null>(null);

    useEffect(() => {
        if (query) {
			fetchSearchingData(query).then(data => setSearchResult(data));
		}
    }, []);

    return (
        <div className="app">
			<Header />
			<Aside />
			{searchResult ? (
				<main className="content">
                    <button onClick={() => navigate(-1)} className="back-btn btn">
                        <i className="fa fa-angle-left"></i>
                    </button>
					<h1 className="content__title page-title">Результаты поиска</h1>
                    <div className="prevew-area">
						<div className="prevew-area__title-wrap">
							<h2 className="prevew-area__title page-title">Трэки по вашему запросу</h2>
						</div>
						<div className="content__items-list">
                            <div className="items-list__title">
                                <div>#</div>
                                <div>НАЗВАНИЕ</div>
                                <div>АЛЬБОМ</div>
                                <i className="fa fa-clock-o" />
                            </div>
                            <div className="items-list__content">
                                {searchResult.tracks.items.length > 0 && searchResult.tracks.items.slice(0, 10).map((item, index) => {
                                    return (
                                        <TrackLine key={item.id} track={item} index={index}/>
                                    );
                                })}
                            </div>
                        </div>
					</div>
					<div className="prevew-area">
						<div className="prevew-area__title-wrap">
							<h2 className="prevew-area__title page-title">Альбомы по вашему запросу</h2>
							<NavLink 
								to="/allItems" 
								state={{type: 'album', title: 'Все альбомы по вашему запросу', collection: searchResult.albums.items}}
								className="prevew-area__show-all-items">смотреть все
							</NavLink>
						</div>
						<div className="prevew-area__content">
							{searchResult.albums.items.length > 0 && searchResult.albums.items.slice(0, 5).map((item) => {
								return (
									<AlbumCard key={item.id} album={item} />
								);
							})}
						</div>
					</div>
					<div className="prevew-area">
						<div className="prevew-area__title-wrap">
							<h2 className="prevew-area__title page-title">Исполнители по вашему запросу</h2>
							<NavLink 
								to="/allItems" 
								state={{type: 'artists', title: 'Все исполнители по вашему запросу', collection: searchResult.artists.items}}
								className="prevew-area__show-all-items">смотреть все
							</NavLink>
						</div>
						<div className="prevew-area__content">
							{searchResult.artists.items.length > 0 && searchResult.artists.items.slice(0, 5).map((item) => {
								return (
									<ArtistCard key={item.id} artist={item} />
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
 
export default SearchResult;