<script>
    import { base } from '$app/paths';
    import {_GetContributorList, _GetContributor} from "./+page.js";
    import {onMount} from "svelte";
    let contributors = {};

    /** Bind Update */
    $: contributors = Object.keys(contributors)
        .sort()
        .reduce((accumulator, key) => {
            accumulator[key] = contributors[key];
            return accumulator;
        }, {});

    /** Lifecycle onMount */
    onMount(async () => {
        /** Get Data */
        let list = await _GetContributorList();
        list.map(async (d) => {
            if(d!='list.json'){
                let data = await _GetContributor(d);
                let slug = data.name.replace(/[^A-Z0-9]/ig, '')
                contributors[slug] = data;
            }
        })
    });
</script>

{#if Object.entries(contributors).length}
    <div class="px-4 md:px-32 my-8">
        <div class="md:col-span-3">

            <div class="grid grid-cols-3 md:grid-cols-10 gap-y-4">
                {#each Object.entries(contributors) as [slug, contributor]}
                    <div>
                        <a href="{base}/contributor/detail?nickname={contributor.nickname}">
                            <div href="{base}" class="cursor-pointer w-24 h-24 rounded-full overflow-hidden mx-auto">
                                <img class="w-full h-full object-cover" src="{contributor.profile_pict}" alt="{contributor.name}">
                            </div>
                        </a>
                        <div class="text-center pt-2">{contributor.name}</div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}