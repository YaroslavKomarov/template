import Cookies from "js-cookie";
import { Buffer } from "buffer";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../pages/auth'

export function fetchToken(code: string | null = null) {
    if (typeof(Cookies.get('access_token')) !== 'undefined') return;

    return fetchData(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
        },
        body: code
            ? `grant_type=authorization_code&code=${code}&redirect_uri=${REDIRECT_URI}`
            : `grant_type=refresh_token&refresh_token=${Cookies.get('refresh_token')}`
    }).then(resp => {
        Cookies.set('access_token', resp.access_token, { expires: parseInt(resp.expires_in) / 86400, path: '/' });
        Cookies.set('refresh_token', resp.refresh_token, { path: '/' });
    }).then(response => response).catch(err => console.error(err));
};

export function fetchUserProfile() {
    return fetchData(`https://api.spotify.com/v1/me`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).then(response => response).catch(err => console.error(err));
};

export function fetchPlaylists() {
    return fetchData(`https://api.spotify.com/v1/me/playlists`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).then(response => response).catch(err => console.error(err));
}

export function fetchPlaylistInfo(playlistId: string | undefined) {
   return fetchData(`https://api.spotify.com/v1/playlists/${playlistId}`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).then(response => response).catch(err => console.error(err));
};

export function fetchRecommendations() {
    return fetchData(`https://api.spotify.com/v1/recommendations`, {
         headers: {
             'Content-Type': "application/json",
             'Authorization': 'Bearer ' + Cookies.get('access_token')
         }
     }).then(response => response).catch(err => console.error(err));
 };

async function fetchData(uri: string, params: any) {
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