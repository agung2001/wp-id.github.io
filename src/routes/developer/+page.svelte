<script>
    import {_GetMeetupList, _GetMeetup} from "./+page.js";
    import {onMount} from "svelte";
    let meetups = [];
    let defaultCover = `https://i0.wp.com/wp-id.org/wp-content/uploads/2018/08/WordCamp-Jakarta-2019.jpg`;
    let cover = defaultCover;

    /** Lifecycle onMount */
    onMount(async () => {
        let list = await _GetMeetupList();
        list.map(async (m) => {
            if(m!='list.json'){
                let data = await _GetMeetup(m);
                meetups = [...meetups, ...[{ ...data, location: m }]]
            }
        })
    });
</script>

{#if meetups.length}
    <div class="px-4 md:px-32">
        <div class="md:grid md:grid-cols-5 gap-x-6">
            <div class="md:col-span-2 overflow-hidden w-full rounded-xl" style="height:60vh;">
                <img class="w-full h-full object-cover shadow ease-in duration-300"
                    src="{cover}" alt="WordPress Meetup">
            </div>
            <div class="md:col-span-3">
                <h2 class="text-3xl font-bold pb-6">
                    <i class="fa-brands fa-meetup pt-1"></i>
                    Daftar Meetup
                </h2>

                {#each meetups as meetup}
                    <div class="flex justify-center gap-x-2 text-white text-xl bg-red-500 px-5 py-2.5 text-center mr-3 cursor-pointer"
                        on:mouseenter={() => { cover = meetup.cover }}
                        on:mouseleave={() => { cover = defaultCover }}
                    >
                        <i class="fa-brands fa-meetup pt-1"></i>
                        {meetup.location}
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}