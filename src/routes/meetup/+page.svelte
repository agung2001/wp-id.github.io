<script>
    import {_GetMeetupList} from "./+page.js";
    import {onMount} from "svelte";
    let meetups = [];
    let defaultCover = `https://i0.wp.com/wp-id.org/wp-content/uploads/2018/08/WordCamp-Jakarta-2019.jpg`;
    let cover = defaultCover;

    /** Lifecycle onMount */
    onMount(async () => {
        let list = await _GetMeetupList();
        meetups = list;
    });
</script>

{#if meetups.length}
    <div class="px-4 md:px-32 my-6">
        <div class="md:grid md:grid-cols-5 gap-x-6">
            <div class="md:col-span-3 overflow-hidden w-full rounded-xl" style="height:60vh;">
                <img class="w-full h-full object-cover shadow ease-in duration-300"
                    src="{cover}" alt="WordPress Meetup">
            </div>
            <div class="md:col-span-2 pt-6 md:pt-0">
                <h2 class="flex gap-x-4 text-3xl font-bold pb-6">
                    <i class="fa-brands fa-meetup pt-1"></i>
                    Daftar Meetup
                </h2>

                <div class="md:grid md:grid-cols-2 gap-x-4">
                    {#each meetups as meetup}
                        <a href="{meetup.url}" class="mb-4 flex justify-center rounded gap-x-2 text-white text-xl bg-red-500 px-5 py-2.5 text-center cursor-pointer"
                            on:mouseenter={() => { cover = meetup.cover }}
                           target="_blank"
                           rel="noreferrer"
                        >
                            <i class="fa-brands fa-meetup pt-1"></i>
                            {meetup.location}
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
{/if}