<script>
    import {_GetContributor} from "../+page.js";
    import {onMount} from "svelte";
    let contributor;

    /** Lifecycle onMount */
    onMount(async () => {
        const urlParams = new URLSearchParams(window.location.search);
        contributor = await _GetContributor(`${urlParams.get('nickname')}.json`)
    });
</script>

{#if contributor}
    <div class="px-4 md:px-64 mb-12">
        <div class="md:flex gap-x-8 py-12">
            <div class="overflow-hidden rounded-full w-24 h-24" style="min-width: 6rem;">
                <img class="object-cover w-full h-full" src="{contributor.profile_pict}" alt="{contributor.name}">
            </div>
            <div>
                <h1 class="text-3xl font-bold">{contributor.name}</h1>
                <p class="py-3 text-gray-500">{contributor.your_contribution}</p>
                <div class="flex gap-x-4">
                    {#each contributor.socials as social}
                        <a href="{social.url}" class="text-lg" target="_blank" rel="noreferrer">
                            <i class="{social.icon}"></i>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>

{/if}