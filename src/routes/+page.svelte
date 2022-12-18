<script>
    import config from "../config.js";
    import {onMount} from "svelte";
    let { title, APIURL } = config;
    let posts = [];
    let headline;

    /** Lifecycle onMount */
    onMount(async () => {
        /** Get Posts */
        await fetch(`${APIURL}/posts`)
            .then((response) => response.json())
            .then((data) => {
                /** Assign Value */
                headline = data[0];
                data.shift();
                posts = data;
            });
    });
</script>

{#if headline}
    <div class="headline-image rounded-xl overflow-hidden w-full h-screen mx-auto" style="max-height:80vh;">
        <a href="{ headline['link'] }">
            <img class="object-cover w-full h-full opacity-70"
                 src="{ headline['yoast_head_json']['og_image'][0]['url'] }"
                 alt="{title}" >
            <div class="absolute px-12 text-white -mt-60">
                <div class="text-xl pb-4">Featured</div>
                <h3 class="text-3xl font-bold pb-4">{ headline['title']['rendered'] }</h3>
                <div class="w-7/12">{ @html headline['excerpt']['rendered'] }</div>
            </div>
        </a>
    </div>
{/if}