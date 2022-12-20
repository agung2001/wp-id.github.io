<script>
    import { base } from '$app/paths';
    import config from "../config.js";
    import {afterUpdate, onMount} from "svelte";
    let { title, APIURL } = config;
    let page = 1;
    let posts = [];
    let headline;
    let PageLoading = true; // Initial Page Load
    let ReadMoreLoading = false;
    let NoDataLefttoLoad = false;
    let masonry;

    /** GetPosts */
    const GetPosts = async () => {
        await fetch(`${APIURL}/posts?per_page=15&page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                if(data){
                    /** Assign Value */
                    if(!headline){
                        headline = data[0];
                        data.shift();
                        PageLoading = false;
                    }
                    posts = [...posts, ...data]
                    ReadMoreLoading = false;
                } else { NoDataLefttoLoad = true; }
            });
    }

    /** Lifecycle onMount */
    onMount(async () => {
        GetPosts()
    });

    /** Truncate by number of words */
    function truncate(str, no_words) {
        return str.split(" ").splice(0,no_words).join(" ");
    }

    afterUpdate(() => {
        if (posts) {
            let elem = document.querySelector('.masonry-grid');
            if(elem){
                setTimeout(function(){
                    masonry = new Masonry( elem, {
                        itemSelector: '.masonry-grid-item'
                    });
                }, 500)
            }
        }
    });
</script>

{#if PageLoading}
    <div class="mt-6 px-12 py-6 text-center">
        <img src="{base}/img/loading.gif" class="mx-auto" alt="Loading..."> <br>
        Memuat ...
    </div>
{:else}
    {#if headline}
        <div class="headline-cover rounded-2xl overflow-hidden w-full h-screen mx-auto" style="max-height:60vh;">
            <a href="{base}/blog?id={headline['id']}">
                {#if headline?.yoast_head_json?.og_image }
                    <img class="object-cover w-full h-full opacity-40 md:opacity-70 hover:opacity-100 ease-in duration-300"
                         src="{ headline['yoast_head_json']['og_image'][0]['url'] }"
                         alt="{ headline['title']['rendered'] }">
                {:else}
                    <img class="object-cover w-full h-full opacity-40 md:opacity-70 hover:opacity-100 ease-in duration-300"
                         src="{base}/img/thumbnail.png"
                         alt="{ headline['title']['rendered'] }">
                {/if}
                <div class="absolute px-8 md:px-12 text-white -mt-72 md:-mt-60">
                    <div class="text-xl pb-4">Headline</div>
                    <h3 class="text-3xl font-bold pb-4">{ headline['title']['rendered'] }</h3>
                    <div class="w-full md:w-7/12 block md:hidden">{ @html truncate(headline['excerpt']['rendered'], 20)  }</div>
                    <div class="w-full md:w-7/12 hidden md:block">{ @html truncate(headline['excerpt']['rendered'], 50)  }</div>
                </div>
            </a>
        </div>
    {/if}
    {#if posts}
        <div class="md:mt-8 px-8 md:px-20 py-6">
            <h3 class="text-2xl font-bold mb-6">Posting blog terbaru</h3>
            <div class="masonry-grid">
                {#each posts as post}
                    <div class="break-inside-avoid masonry-grid-item w-full md:w-1/3 px-3">
                        <div class="blog-cover drop-shadow hover:drop-shadow-lg rounded-xl overflow-hidden border border-gray-100 w-full ease-in duration-100">
                            <a href="{base}/blog?id={ post['id'] }">
                                {#if post?.yoast_head_json?.og_image }
                                    <img class="w-full opacity-100"
                                         src="{ post['yoast_head_json']['og_image'][0]['url'] }"
                                         alt="{ post['title']['rendered'] }">
                                {:else}
                                    <img class="w-full opacity-100"
                                         src="{base}/img/thumbnail.png"
                                         alt="{ post['title']['rendered'] }">
                                {/if}
                            </a>
                        </div>
                        <a href="{base}/blog?id={ post['id'] }">
                            <h4 class="text-lg font-bold mt-4">{ post['title']['rendered'] }</h4>
                        </a>
                        <div class="mt-3 mb-8">
                            { @html
                                `${truncate(post['excerpt']['rendered'], 30)} <a href="${base}/blog?id=${ post['id'] }" class="border-b border-black">Baca Selengkapnya</a>`
                            }
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        {#if !NoDataLefttoLoad}
            <div class="mx-auto mt-6 mb-12 text-center">
                <span class="gap-x-4 bg-black text-white px-6 py-4 rounded-full mx-auto cursor-pointer"
                      on:click={() => { ReadMoreLoading = true; page++; GetPosts() }}
                >
                    {#if ReadMoreLoading}
                        <i class="fa-solid fa-spinner pt-1 pr-2"></i>
                        Memuat ...
                    {:else}
                        <i class="fa-solid fa-glasses pt-1 pr-2"></i>
                        Muat lebih banyak
                    {/if}
                </span>
            </div>
        {/if}
    {/if}


{/if}