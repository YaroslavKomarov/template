export interface IAlbum {
    artists: IArtist[];
    name: string;
    id: string;
    images: IImage[];
    total_tracks: number;
};

export interface IAlbumDetail extends IAlbum {
    tracks: {
        items: ITrack[]
    };
}

export interface IArtist {
    id: string;
    name: string;
};

export interface IArtistDetail extends IArtist {
    images: IImage[];
    followers: {
        href: string;
        total: number;
    };
};

export interface ITrack {
    artists: IArtist[];
	album: IAlbum;
	name: string;
    duration_ms: number;
    id: string;
    href: string;
}

export interface IImage {
    url: string;
    width: number;
    height: number;
};

export interface IPlaylistCard {
    name: string;
    id: string;
    images: IImage[];
    owner: IOwner;
}

export interface IPlaylist extends IPlaylistCard {
    tracks: {
        items: { track: ITrack; }[]
    };
}

export interface IOwner {
    display_name: string;
    id: string;
}

export interface IProfile {
    display_name: string;
    images: IImage[];
    country: string;
    email: string;
    followers: {
        href: string;
        total: number;
    };
}
