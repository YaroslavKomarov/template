import { ITrack } from "../scripts/commonSpotifyInterfaces";
import { getMinutesStringFromMS } from "../scripts/uiHandler";
import { formatTitle } from "../scripts/uiHandler";

interface IProps {
    track: ITrack;
    index: number;
};

const AlbumTrackLine = ({track, index}: IProps) => {
    const artists = formatTitle(track.artists.map(item => item.name).join(', '), 50);
    const duration = getMinutesStringFromMS(track.duration_ms);
    const title = formatTitle(track.name, 35);

    return (
        <div className="item album-item" >
            <div className="item__id">{index + 1}</div>
            <div className="albunm-item__song-title">
                <div className="item__title">{title}</div>
                <div className="item__subtitle">{artists}</div>
            </div>
            <div className="item__clock">{duration}</div>
        </div>
    );
};

export default AlbumTrackLine;