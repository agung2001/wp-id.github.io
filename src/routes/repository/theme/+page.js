import {base} from "$app/paths";

/** Get Theme List */
export const _GetThemeList = async () => {
    return await fetch(`${base}/theme/list.json`)
        .then((response) => response.json())
}

/** Get Theme */
export const _GetTheme = async (meetup) => {
    return await fetch(`${base}/theme/${meetup}`)
        .then((response) => response.json())
}