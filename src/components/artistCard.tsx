import { NavLink } from 'react-router-dom';
import { IArtistDetail } from '../scripts/commonSpotifyInterfaces';
import { formatTitle } from '../scripts/uiHandler';

interface IProps {
    artist: IArtistDetail;
};

const ArtistCard = ({ artist }: IProps) => {
    const imgUrl = artist.images?.length > 0 ? artist.images[0].url : "assets/images/default-profile.jpg";
    const name = formatTitle(artist.name, 20);

    return (
        <NavLink to={'/artist/' + artist.id} className="author-card card" style={{textDecoration: 'none'}}>
            <img className="card__image" src={imgUrl} width='185' height='185' />
            <div className="card__title">{name}</div>
            <div className="card__subtitle">Исполнитель</div>
        </NavLink>
    );
};

export default ArtistCard;