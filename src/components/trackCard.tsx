import { NavLink } from 'react-router-dom';
import { ITrack } from '../pages';

interface ITrackCard {
    href: string | null;
    // imgSrc: string | undefined;
    // author: string | null;
};

const TrackCard = ({href}: ITrackCard) => {
    return (
        <div className="card">
            <img className="card__image" src="assets/images/tracks/Eminem_Curtain_call.jpg"/>
            <div className="card__title">Name</div>
            <div className="card__subtitle">{href}</div>
        </div>
    );
};

export default TrackCard;