<script>
    import { base } from '$app/paths';
    import {_GetPost} from "./+page.js";
    import {onMount} from "svelte";
    import {DocTitle} from "../../stores/Layout.js";
    import moment from 'moment';
    let post;
    let PageLoading = true; // Initial Page Load

    /** Lifecycle onMount */
    onMount(async () => {
        const urlParams = new URLSearchParams(window.location.search);
        post = await _GetPost(urlParams.get('id'))
        DocTitle.set(post['title']['rendered'])
        PageLoading = false
    });
</script>

{#if PageLoading}
    <div class="mt-6 px-12 py-6 text-center">
        <img src="{base}/img/loading.gif" class="mx-auto" alt="Loading..."> <br>
        Loading ...
    </div>
{:else}
    <div class="px-32">
        <div>
            {#if post?.yoast_head_json?.og_image }
                <img class="w-full rounded-xl border-2 border-gray-100"
                     src="{ post['yoast_head_json']['og_image'][0]['url'] }"
                     alt="{ post['title']['rendered'] }">
            {:else}
                <img class="w-full rounded-xl border-2 border-gray-100"
                     src="{base}/img/thumbnail.png"
                     alt="{ post['title']['rendered'] }">
            {/if}
        </div>
        <div class="py-6">
            <p class="py-4">{ moment(new Date(post.date)).calendar() } | oleh { post['yoast_head_json']['author'] }</p>
            <h1 class="text-3xl font-bold">{ post['title']['rendered'] }</h1>
            <div class="blog-content pt-12 text-lg">
                { @html post['content']['rendered'] }
            </div>
        </div>
    </div>
{/if}