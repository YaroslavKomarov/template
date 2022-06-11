import { NavLink } from 'react-router-dom';
import { IPlaylistCard } from '../scripts/commonSpotifyInterfaces';
import { formatTitle } from '../scripts/uiHandler';

interface IProps {
    playlist: IPlaylistCard;
};

const PlaylistCard = ({ playlist }: IProps) => {
    const imgUrl = playlist.images?.length > 0 ? playlist.images[0].url : "assets/images/default-track.jpg";
    const owner = formatTitle(playlist.owner?.display_name, 20);
    const title = formatTitle(playlist.name, 17);

    return (
        <NavLink to={'/playlist/' + playlist.id} className="card" style={{textDecoration: 'none'}}>
            <img className="card__image" src={imgUrl}/>
            <div className="card__title">{title}</div>
            <div className="card__subtitle">Автор: {owner}</div>
        </NavLink>
    );
};

export default PlaylistCard;