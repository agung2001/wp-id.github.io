<script>
    import {_GetContributorList, _GetContributor} from "./+page.js";
    import {onMount} from "svelte";
    let contributors = [];

    /** Lifecycle onMount */
    onMount(async () => {
        let list = await _GetContributorList();
        list.map(async (d) => {
            if(d!='list.json'){
                let data = await _GetContributor(d);
                contributors = [...contributors, ...[data]]
            }
        })
    });
</script>

{#if contributors.length}
    <div class="px-4 md:px-32">
        <div class="md:col-span-3">

            <div class="grid grid-cols-10">
                {#each contributors as developer}
                    <div>
                        <div class="cursor-pointer w-24 h-24 rounded-full overflow-hidden mx-auto">
                            <img class="w-full h-full object-cover" src="{developer.profile_pict}" alt="{developer.name}">
                        </div>
                        <div class="text-center pt-2">{developer.name}</div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}