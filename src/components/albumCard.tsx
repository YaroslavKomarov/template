import { NavLink } from 'react-router-dom';
import { IAlbum } from '../scripts/commonSpotifyInterfaces';
import { formatTitle } from '../scripts/uiHandler';

interface IProps {
    album: IAlbum;
};

const AlbumCard = ({ album }: IProps) => {
    const imgUrl = album.images?.length > 0 ? album.images[0].url : "assets/images/default-track.jpg";
    const artists = formatTitle(album.artists.map(item => item.name).join(', '), 20);
    const title = formatTitle(album.name, 17);

    return (
        <NavLink to={'/albumPlaylist/' + album.id} className="card" style={{textDecoration: 'none'}}>
            <img className="card__image" src={imgUrl}/>
            <div className="card__title">{title}</div>
            <div className="card__subtitle">{artists}</div>
        </NavLink>
    );
};

export default AlbumCard;