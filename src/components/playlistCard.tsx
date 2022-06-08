import { NavLink } from 'react-router-dom';

interface IPlaylistCardProps {
    playlistId: string | null;
    playlistImg: string | undefined;
    playlistTitle: string | null;
    playlistAuthor: string | null;
};

const PlaylistCard = ({playlistId, playlistImg, playlistTitle, playlistAuthor}: IPlaylistCardProps) => {
    return (
        <NavLink to={'/playlist/' + playlistId} className="card" style={{textDecoration: 'none'}}>
            <img className="card__image" src={playlistImg}/>
            <div className="card__title">{playlistTitle}</div>
            <div className="card__subtitle">Автор: {playlistAuthor}</div>
        </NavLink>
    );
};

export default PlaylistCard;