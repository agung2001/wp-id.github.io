import {base} from "$app/paths";

/** Get Plugin List */
export const _GetPluginList = async () => {
    return await fetch(`${base}/plugin/list.json`)
        .then((response) => response.json())
}

/** Get Plugin */
export const _GetPlugin = async (meetup) => {
    return await fetch(`${base}/plugin/${meetup}`)
        .then((response) => response.json())
}