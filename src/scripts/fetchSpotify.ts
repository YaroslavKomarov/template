import Cookies from "js-cookie";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../pages/auth'

export const fetchToken = async (code: string | null = null) => {
    if (typeof(Cookies.get('access_token')) !== 'undefined') return;

    return await fetchData(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        },
        body: code
            ? `grant_type=authorization_code&code=${code}&redirect_uri=${REDIRECT_URI}`
            : `grant_type=refresh_token&refresh_token=${Cookies.get('refresh_token')}`
    }).then(resp => {
        console.log(code);
        Cookies.set('access_token', resp.access_token, { expires: parseInt(resp.expires_in) / 86400, path: '/' });
        Cookies.set('refresh_token', resp.refresh_token, { path: '/' });
    }).catch(err => console.error(err));
};

export const fetchUserProfile = async () => {
    return await fetchData(`https://api.spotify.com/v1/me`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).catch(err => console.error(err));
};

export const fetchPlaylists = async () => {
    const result = await fetch(`https://api.spotify.com/v1/me/playlists`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).catch((err) => { throw err });

    if (result.ok) {
        return await result.json();        
    }     
    else {
        const jsonError = await result.json();
        throw jsonError;
    }
};

export const fetchPlaylistInfo = async (playlistId: string | undefined) => {
   return await fetchData(`https://api.spotify.com/v1/playlists/${playlistId}`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).catch(err => console.error(err));
};

const fetchData = async (uri: string, params: any) => {
    const result = await fetch(uri, params)
        .catch((err) => { throw err });

    if (result.ok) {
        return await result.json();        
    }     
    else {
        const jsonError = await result.json();
        throw jsonError;
    }
};