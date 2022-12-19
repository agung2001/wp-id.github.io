<script>
    import { base } from '$app/paths';
    import {_GetPost} from "./+page.js";
    import {onMount} from "svelte";
    let post;
    let PageLoading = true; // Initial Page Load

    /** Lifecycle onMount */
    onMount(async () => {
        const urlParams = new URLSearchParams(window.location.search);
        post = await _GetPost(urlParams.get('id'))
        PageLoading = false
    });
</script>

{#if PageLoading}
    <div class="mt-6 px-12 py-6 text-center">
        <img src="{base}/img/loading.gif" class="mx-auto" alt="Loading..."> <br>
        Loading ...
    </div>
{:else}

{/if}