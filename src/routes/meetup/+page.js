import {base} from "$app/paths";

/** Get Meetup List */
export const _GetMeetupList = async () => {
    return await fetch(`${base}/meetup/list.json`)
        .then((response) => response.json())
}