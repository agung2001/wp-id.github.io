<script>
    import {_GetDeveloperList, _GetDeveloper} from "./+page.js";
    import {onMount} from "svelte";
    let developers = [];

    /** Lifecycle onMount */
    onMount(async () => {
        let list = await _GetDeveloperList();
        list.map(async (d) => {
            if(d!='list.json'){
                let data = await _GetDeveloper(d);
                developers = [...developers, ...[{ ...data, location: d }]]
            }
        })
        list.flip()
    });
</script>

{#if developers.length}
    <div class="px-4 md:px-32">
        <div class="md:col-span-3">

            <div class="grid grid-cols-10">
                {#each developers as developer}
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