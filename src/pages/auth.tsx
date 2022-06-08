import { useEffect } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { fetchToken } from "../scripts/fetchSpotify";

export const CLIENT_SECRET = '6471b4f85023455f94adbedb51701231';

export const CLIENT_ID = '919359a8c810431cb731ff0d6b017529';

export const REDIRECT_URI = 'http://localhost:3000/auth';

export const SCOPE = ['user-read-private', 'user-read-email', 'user-read-currently-playing', 
    'user-read-recently-played', 'playlist-read-private', 'user-read-playback-state', 
    'user-top-read', 'user-modify-playback-state', 'streaming', 'app-remote-control', 
    'user-library-read', 'user-library-modify', 'playlist-modify-private',
    'playlist-modify-public'];

export const CODE_URL = 'https://accounts.spotify.com/authorize?response_type=code&client_id=' + 
    CLIENT_ID + '&redirect_uri=' + REDIRECT_URI + '&scope=' + SCOPE.join(' ');

export default function Auth() {
    const code = new URLSearchParams(window.location.search).get('code');
    
    useEffect(() => {
        if (code !== null) {
            const fetchData = async () => await fetchToken(code);
            fetchData();
        }
    }, []);

    return (
        <Navigate to='/' />
    );
}
