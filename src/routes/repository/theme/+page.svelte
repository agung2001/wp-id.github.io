<script>
    import { base } from '$app/paths';
    import {_GetThemeList, _GetTheme} from "./+page.js";
    import {onMount} from "svelte";
    let repos = {};

    /** Truncate by number of words */
    const truncate = (str, no_words) => {
        return str.split(" ").splice(0,no_words).join(" ");
    }

    /** Lifecycle onMount */
    onMount(async () => {
        /** Get Data */
        let list = await _GetThemeList();
        list.map(async (d) => {
            if(d!='list.json'){
                let data = await _GetTheme(d);
                let slug = data.name.replace(/[^A-Z0-9]/ig, '')
                repos[slug] = data;
            }
        })
    });
</script>

{#if Object.entries(repos).length}
    <div class="px-4 md:px-32 my-8">
        <div class="md:col-span-3">

            <div class="md:grid md:grid-cols-3 md:gap-x-4">
                {#each Object.entries(repos) as [slug, repo]}
                    <div class="mb-6">
                        <a href="{repo.url}" target="_blank" rel="noreferrer">
                            <div href="{base}" class="cursor-pointer rounded overflow-hidden mx-auto">
                                <img class="w-full h-full object-cover" src="{repo.thumbnail}" alt="{repo.name}">
                            </div>
                            <div class="text-center text-xl pt-2">{repo.name}</div>
                        </a>
                        <div class="text-center text-sm pt-2">{ truncate(repo.excerpt, 50) }</div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}