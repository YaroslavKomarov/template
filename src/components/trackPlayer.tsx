import { NavLink } from 'react-router-dom';
import { IPlaylistCard } from '../scripts/commonSpotifyInterfaces';
import { formatTitle } from '../scripts/uiHandler';

interface IProps {
    playlist: IPlaylistCard;
};

const TrackPlayer = ({ playlist }: IProps) => {
    const imgUrl = playlist.images?.length > 0 ? playlist.images[0].url : "assets/images/default-track.jpg";
    const owner = formatTitle(playlist.owner?.display_name, 35);
    const title = formatTitle(playlist.name, 35);

    return (
        <div className="track-player">
            <div className="item__id"></div>
            <div className="item__song-title">
                <img className="item__img" src={imgUrl} />
                <div className="item__title">{title}</div>
                <div className="item__subtitle"></div>
            </div>
            <div className="item__album"></div>
            <div className="item__clock"></div>
        </div>
    );
};

export default TrackPlayer;