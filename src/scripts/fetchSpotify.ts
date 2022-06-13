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
    }).then(response => response).catch((err) => { throw err });
};

export function fetchUserProfile() {
    return fetchData(`https://api.spotify.com/v1/me`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).then(response => response).catch((err) => { throw err });
};

export function fetchPlaylists() {
    return fetchData(`https://api.spotify.com/v1/me/playlists`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).then(response => response).catch(err => console.error(err));
}

export function fetchPlaylistData(playlistId: string | undefined) {
   return fetchData(`https://api.spotify.com/v1/playlists/${playlistId}`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).then(response => response).catch((err) => { throw err });
};

export function fetchAlbumData(albumId: string | undefined) {
    return fetchData(`https://api.spotify.com/v1/albums/${albumId}`, {
         headers: {
             'Content-Type': "application/json",
             'Authorization': 'Bearer ' + Cookies.get('access_token')
         }
     }).then(response => response).catch((err) => { throw err });
 };

export function fetchFeaturedPlaylists() {
    return fetchData(`https://api.spotify.com/v1/browse/featured-playlists`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).then(response => response).catch((err) => { throw err });
};

export function fetchNewReleases() {
    return fetchData(`https://api.spotify.com/v1/browse/new-releases`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).then(response => response).catch((err) => { throw err });
};

export function fetchSavedTracks() {
    return fetchData(`https://api.spotify.com/v1/me/tracks`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).then(response => response).catch((err) => { throw err });
};

export function fetchRecommendedArtists(artistId: string | undefined) {
    return fetchData(`https://api.spotify.com/v1/artists/${artistId}/related-artists`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).then(response => response).catch((err) => { throw err });
};

export function fetchArtist(artistId: string | undefined) {
    return fetchData(`https://api.spotify.com/v1/artists/${artistId}`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).then(response => response).catch((err) => { throw err });
};

export function fetchArtistAlbums(artistId: string | undefined) {
    return fetchData(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).then(response => response).catch((err) => { throw err });
};

export function fetchArtistTopTracks(artistId: string | undefined) {
    return fetchData(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ES`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).then(response => response).catch((err) => { throw err });
};

export function fetchSearchingData(searchRequest: string | undefined) {
    const type = 'track,artist,album';
    return fetchData(`https://api.spotify.com/v1/search?q=${searchRequest}&type=${type}&include_external=audio`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
    }).then(response => response).catch((err) => { throw err });
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