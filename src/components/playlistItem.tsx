interface IPlaylistItemProps {
    song: string | null;
    musician: string | null;
    album: string | null;
    timeline: string | null;
};

const PlaylistItem = ({song, musician, album, timeline}: IPlaylistItemProps) => {
    return (
        <div className="item" >
            <div className="item__id">1</div>
            <div className="item__song-title">
                <img className="item__img" src="assets/images/tracks/Eminem_Curtain_call.jpg" />
                <div className="item__title">The Real Slim Shady</div>
                <div className="item__subtitle">Eminem</div>
            </div>
            <div className="item__album">The Marshall Mathers LP</div>
            <div className="item__clock">3:57</div>
        </div>
    );
};

export default PlaylistItem;