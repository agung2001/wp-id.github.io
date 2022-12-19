import {base} from "$app/paths";

/** Get Developer List */
export const _GetDeveloperList = async () => {
    return await fetch(`${base}/developer/list.json`)
        .then((response) => response.json())
}

/** Get Developer */
export const _GetDeveloper = async (meetup) => {
    return await fetch(`${base}/developer/${meetup}`)
        .then((response) => response.json())
}