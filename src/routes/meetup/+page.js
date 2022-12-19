import {base} from "$app/paths";
import config from "../../config.js";

/** Get Post */
export const _GetMeetup = async () => {
    return await fetch(`${base}/meetup/list.json`)
        .then((response) => response.json())
}