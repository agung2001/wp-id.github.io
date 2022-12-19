import {base} from "$app/paths";

/** Get Contributor List */
export const _GetContributorList = async () => {
    return await fetch(`${base}/contributor/list.json`)
        .then((response) => response.json())
}

/** Get Contributor */
export const _GetContributor = async (meetup) => {
    return await fetch(`${base}/contributor/${meetup}`)
        .then((response) => response.json())
}