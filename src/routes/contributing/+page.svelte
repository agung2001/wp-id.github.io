<script>
    import { base } from '$app/paths';
    import {onMount} from "svelte";
    let PageLoading = true; // Initial Page Load
    let post;

    /** Lifecycle onMount */
    onMount(async () => {

    });
</script>

{#if PageLoading}
    <div class="mt-6 px-12 py-6 text-center">
        <img src="{base}/img/loading.gif" class="mx-auto" alt="Loading..."> <br>
        Memuat ...
    </div>
{:else}

{/if}