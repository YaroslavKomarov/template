export function formatTitle(title: string, titleLength: number) {
    return title.length > titleLength ? 
        title.slice(0, titleLength) + '...' : title;
};

export function getMinutesStringFromMS(durationMS: number) {
    const durationSec = Math.floor(durationMS / 1000);
    const minutes = Math.floor(durationSec / 60);
    const seconds = durationSec % 60;
    return seconds / 10 >= 1 ? `${minutes}:${seconds}` : `${minutes}:0${seconds}`;
};