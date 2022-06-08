import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchToken } from './scripts/fetchSpotify';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import Auth from './pages/auth';
import Login from './pages/login';
import Index from './pages/index';
import Search from './pages/search';
import Profile from './pages/profile';
import Playlist from './pages/playlist';
import Mediateka from './pages/mediateka';
import FavoriteTracks from './pages/favoriteTracks';

export default function App() {
    useEffect(() => {
        if (Cookies.get('refresh_token') && !Cookies.get('access_token')) {
            const fetchData = async () => await fetchToken();
            fetchData();
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {Cookies.get('access_token') 
                    ? <Route path="/" element={<Index />} /> 
                    : <Route path="/" element={<Login />} />
                }
                <Route path="auth" element={<Auth />} />
                <Route path="search" element={<Search />} />
                <Route path="profile" element={<Profile />} />
                <Route path="mediateka" element={<Mediateka />} />
                <Route path="playlist/:id" element={<Playlist />} />
                <Route path="favoriteTracks" element={<FavoriteTracks />} />
            </Routes>
        </BrowserRouter>
    );
};
