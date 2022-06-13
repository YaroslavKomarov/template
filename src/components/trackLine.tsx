import { ITrack } from "../scripts/commonSpotifyInterfaces";
import { getMinutesStringFromMS } from "../scripts/uiHandler";
import { formatTitle } from "../scripts/uiHandler";

interface IProps {
    track: ITrack;
    index: number;
};

const TrackLine = ({track, index}: IProps) => {
    const imgUrl = track.album.images?.length > 0 ? track.album.images[0].url : "assets/images/default-track.jpg";
    const artists = formatTitle(track.artists.map(item => item.name).join(', '), 50);
    const duration = getMinutesStringFromMS(track.duration_ms);
    const album = formatTitle(track.album.name, 35);
    const title = formatTitle(track.name, 35);

    return (
        <div className="item" >
            <div className="item__id">{index + 1}</div>
            <div className="item__song-title">
                <img className="item__img" src={imgUrl} width='48' height='48' />
                <div className="item__title">{title}</div>
                <div className="item__subtitle">{artists}</div>
            </div>
            <div className="item__album">{album}</div>
            <div className="item__clock">{duration}</div>
        </div>
    );
};

export default TrackLine;