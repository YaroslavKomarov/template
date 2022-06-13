import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchToken } from './scripts/fetchSpotify';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import Auth from './pages/auth';
import Login from './pages/login';
import Index from './pages/index';
import Artist from './pages/artist';
import Search from './pages/search';
import Profile from './pages/profile';
import Playlist from './pages/playlist';
import AllItems from './pages/allItems';
import Mediateka from './pages/mediateka';
import SavedTracks from './pages/savedTracks';
import SearchResult from './pages/searchReult';
import AlbumPlaylist from './pages/albumPlaylist';

export default function App() {
    const doesTokenExist = typeof(Cookies.get('access_token')) === 'string';

    useEffect(() => {
        if (Cookies.get('refresh_token') && !doesTokenExist) {
            fetchToken();
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="auth" element={<Auth />} />
                <Route path="login" element={<Login />} />
                <Route path="search" element={<Search />} />
                <Route path="profile" element={<Profile />} />
                <Route path="allItems" element={<AllItems />} />
                <Route path="artist/:id" element={<Artist />} />
                <Route path="mediateka" element={<Mediateka />} />
                <Route path="playlist/:id" element={<Playlist />} />
                <Route path="savedTracks" element={<SavedTracks />} />
                <Route path="searchResult" element={<SearchResult />} />
                <Route path="albumPlaylist/:id" element={<AlbumPlaylist />} />
            </Routes>
        </BrowserRouter>
    );
};
