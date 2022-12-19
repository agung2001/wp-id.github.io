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
                console.log(developers);
            }
        })
    });
</script>

{#if developers.length}
    <div class="px-4 md:px-32">
        <div class="md:col-span-3">
            <h2 class="flex gap-x-4 text-3xl font-bold pb-6">
                <i class="fa-solid fa-users pt-1"></i>
                Pengembang WordPress
            </h2>

            {#each developers as developer}
                <div class="flex justify-center gap-x-2 text-white text-xl bg-red-500 px-5 py-2.5 text-center mr-3 cursor-pointer">
                    <i class="fa-brands fa-meetup pt-1"></i>
                    {developer.name}
                </div>
            {/each}
        </div>
    </div>
{/if}