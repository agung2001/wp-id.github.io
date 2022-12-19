import config from "../../config.js";

/** Get Post */
export const _GetPost = async (id) => {
    let { APIURL } = config;
    return await fetch(`${APIURL}/posts/${id}`)
        .then((response) => response.json())
}