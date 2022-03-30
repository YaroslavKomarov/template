import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './pages/index';
import Search from './pages/search';
import Profile from './pages/profile';
import Mediateka from './pages/mediateka';
import Playlist from './components/playlist';
import FavoriteTracks from './pages/favoriteTracks';

 function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="search" element={<Search />} />
                <Route path="profile" element={<Profile />} />
                <Route path="mediateka" element={<Mediateka />} />
                <Route path="playlist" element={<Playlist />} />
                <Route path="favoriteTracks" element={<FavoriteTracks />} />
            </Routes>
        </BrowserRouter>
      );
 }

 export default App;