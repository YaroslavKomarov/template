const NORMAL_TITLE_LENGTH = 25;

export function formatTitle(title: string) {
    return title.length > NORMAL_TITLE_LENGTH ? 
        title.slice(0, NORMAL_TITLE_LENGTH) + '...' : title;
}