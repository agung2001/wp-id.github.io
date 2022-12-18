<script>
    import { base } from '$app/paths';
    import config from "../config.js";
    import {onMount} from "svelte";
    let { title, APIURL } = config;
    let posts = [];
    let headline;
    let loading = true;

    /** Lifecycle onMount */
    onMount(async () => {
        /** Get Posts */
        await fetch(`${APIURL}/posts?per_page=15`)
            .then((response) => response.json())
            .then((data) => {
                /** Assign Value */
                headline = data[0];
                data.shift();
                posts = data;
                loading = false;
            });
    });

    /** Truncate by number of words */
    function truncate(str, no_words) {
        return str.split(" ").splice(0,no_words).join(" ");
    }
</script>

{#if loading}
    <div class="mt-6 px-12 py-6 text-center">
        <img src="{base}/img/loading.gif" class="mx-auto" alt="Loading..."> <br>
        Loading ...
    </div>
{:else}
    {#if headline}
        <div class="headline-cover rounded-2xl overflow-hidden w-full h-screen mx-auto" style="max-height:80vh;">
            <a href="{ headline['link'] }" target="_blank" rel="noreferrer">
                <img class="object-cover w-full h-full opacity-70"
                     src="{ headline['yoast_head_json']['og_image'][0]['url'] }"
                     alt="{headline['title']['rendered']}" >
                <div class="absolute px-12 text-white -mt-60">
                    <div class="text-xl pb-4">Featured</div>
                    <h3 class="text-3xl font-bold pb-4">{ headline['title']['rendered'] }</h3>
                    <div class="w-7/12">{ @html headline['excerpt']['rendered'] }</div>
                </div>
            </a>
        </div>
    {/if}
    {#if posts}
        <div class="mt-8 px-20 py-6">
            <h3 class="text-2xl font-bold mb-6">Recent blog posts</h3>
            <div class="columns-3 gap-x-6">
                {#each posts as post}
                    <div class="break-inside-avoid">
                        <a href="{ post['link'] }" target="_blank" rel="noreferrer">
                            <div class="blog-cover rounded-xl overflow-hidden border-2 border-gray-100 w-full">
                                {#if post?.yoast_head_json?.og_image }
                                    <img class="w-full opacity-100"
                                         src="{ post['yoast_head_json']['og_image'][0]['url'] }"
                                         alt="{ post['title']['rendered'] }">
                                {:else}
                                    <img class="w-full opacity-100"
                                         src="{base}/img/thumbnail.png"
                                         alt="{ post['title']['rendered'] }">
                                {/if}
                            </div>
                            <h4 class="text-lg font-bold mt-4">{ post['title']['rendered'] }</h4>
                            <div class="mt-3 mb-8">{ @html truncate(post['excerpt']['rendered'], 30) }</div>
                        </a>
                    </div>
                {/each}
            </div>
        </div>
        <div class="mx-auto mb-12 text-center">
            <a href="https://wp-id.org" class="bg-black text-white px-6 py-4 rounded-xl mx-auto" target="_blank" rel="noreferrer">
                Explore More
            </a>
        </div>
    {/if}
{/if}
