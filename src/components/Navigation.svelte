<script>
    import { base } from '$app/paths';
    import config from "../config.js";
    import {page} from "$app/stores";
    let { title } = config;
    let ActiveMenu = $page.url.pathname;
    let MobileMenuActive = false;
    let dropdowns = { repository: false }
</script>

<!-- Navigation -->
<nav class="px-6 py-6 md:px-16 items-center bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div class="flex flex-wrap items-center justify-between mx-auto px-2">
        <a href="{base}" class="flex items-center"
           on:click={() => { ActiveMenu = `${base}/` }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" role="img" class="w-8 h-8" viewBox="0 0 28 28">
                <title>{title}</title>
                <path fill="currentColor" d="M13.6052 0.923525C16.1432 0.923525 18.6137 1.67953 20.7062 3.09703C22.7447 4.47403 24.3512 6.41803 25.3097 8.68603C26.9837 12.6415 26.5382 17.164 24.1352 20.7145C22.7582 22.753 20.8142 24.3595 18.5462 25.318C14.5907 26.992 10.0682 26.5465 6.51772 24.1435C4.47922 22.7665 2.87272 20.8225 1.91422 18.5545C0.240225 14.599 0.685725 10.0765 3.08872 6.52603C4.46572 4.48753 6.40973 2.88103 8.67772 1.92253C10.2302 1.26103 11.9177 0.923525 13.6052 0.923525ZM13.6052 0.113525C6.15322 0.113525 0.105225 6.16153 0.105225 13.6135C0.105225 21.0655 6.15322 27.1135 13.6052 27.1135C21.0572 27.1135 27.1052 21.0655 27.1052 13.6135C27.1052 6.16153 21.0572 0.113525 13.6052 0.113525Z"></path>
                <path fill="currentColor" d="M2.36011 13.6133C2.36011 17.9198 4.81711 21.8618 8.70511 23.7383L3.33211 9.03684C2.68411 10.4813 2.36011 12.0338 2.36011 13.6133ZM21.2061 13.0463C21.2061 11.6558 20.7066 10.6973 20.2746 9.94134C19.8426 9.18534 19.1676 8.22684 19.1676 7.30884C19.1676 6.39084 19.9506 5.31084 21.0576 5.31084H21.2061C16.6296 1.11234 9.51511 1.42284 5.31661 6.01284C4.91161 6.45834 4.53361 6.93084 4.20961 7.43034H4.93861C6.11311 7.43034 7.93561 7.28184 7.93561 7.28184C8.54311 7.24134 8.61061 8.13234 8.00311 8.21334C8.00311 8.21334 7.39561 8.28084 6.72061 8.32134L10.8111 20.5118L13.2681 13.1273L11.5131 8.32134C10.9056 8.28084 10.3386 8.21334 10.3386 8.21334C9.73111 8.17284 9.79861 7.25484 10.4061 7.28184C10.4061 7.28184 12.2691 7.43034 13.3626 7.43034C14.4561 7.43034 16.3596 7.28184 16.3596 7.28184C16.9671 7.24134 17.0346 8.13234 16.4271 8.21334C16.4271 8.21334 15.8196 8.28084 15.1446 8.32134L19.2081 20.4173L20.3691 16.7453C20.8821 15.1388 21.1926 14.0048 21.1926 13.0328L21.2061 13.0463ZM13.7946 14.5853L10.4196 24.3998C12.6876 25.0613 15.1041 25.0073 17.3316 24.2243L17.2506 24.0758L13.7946 14.5853ZM23.4741 8.21334C23.5281 8.59134 23.5551 8.98284 23.5551 9.37434C23.5551 10.5218 23.3391 11.8043 22.7046 13.3973L19.2621 23.3333C24.5271 20.2688 26.4036 13.5593 23.4741 8.21334Z"></path>
            </svg>
            <span class="pl-2 md:pl-4 -mt-0.5  self-center text-xl font-semibold whitespace-nowrap dark:text-white">{title}</span>
        </a>
        <div class="flex md:order-2">
            <a href="https://github.com/agung2001/wp-id.github.io/blob/develop/CONTRIBUTING.md" target="_blank" rel="noreferrer"
               class="flex gap-x-2 text-white bg-black rounded-lg px-5 py-2.5 text-center md:mr-3">
                <i class="fa-solid fa-medal pt-1"></i>
                Kontribusi
            </a>
            <button class="inline-flex items-center p-2 ml-3  text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                on:click={() => { MobileMenuActive = !MobileMenuActive }}
            >
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" class:hidden={!MobileMenuActive} >
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md: md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a
                        href="{base}"
                        class="flex md:justify-center gap-x-2 rounded-lg px-5 py-2.5 md:text-center"
                        class:text-white={ActiveMenu==`${base}/`}
                        class:bg-black={ActiveMenu==`${base}/`}
                        class:hover:bg-slate-200={ActiveMenu!=`${base}/`}
                        class:hover:text-black={ActiveMenu!=`${base}/`}
                        on:click={() => { ActiveMenu = `${base}/` }}
                    >
                        <i class="fas fa-home pt-1"></i>
                        Beranda
                    </a>
                </li>
                <li>
                    <a
                            href="{base}/meetup"
                            class="flex md:justify-center gap-x-2 rounded-lg px-5 py-2.5 md:text-center"
                            class:text-white={ActiveMenu==`${base}/meetup/`}
                            class:bg-black={ActiveMenu==`${base}/meetup/`}
                            class:hover:bg-slate-200={ActiveMenu!=`${base}/meetup/`}
                            class:hover:text-black={ActiveMenu!=`${base}/meetup/`}
                            on:click={() => { ActiveMenu = `${base}/meetup/` }}
                    >
                        <i class="fa-brands fa-meetup pt-1"></i>
                        Meetup
                    </a>
                </li>
                <li>
                    <a
                        href="{base}/about"
                        class="flex md:justify-center gap-x-2 rounded-lg px-5 py-2.5 md:text-center"
                        class:text-white={ActiveMenu==`${base}/about/`}
                        class:bg-black={ActiveMenu==`${base}/about/`}
                        class:hover:bg-slate-200={ActiveMenu!=`${base}/about/`}
                        class:hover:text-black={ActiveMenu!=`${base}/about/`}
                        on:click={() => { ActiveMenu = `${base}/about/` }}
                    >
                        <i class="fa-solid fa-mug-hot pt-1"></i>
                        Tentang
                    </a>
                </li>
                <li>
                    <a
                        href="{base}/contributor"
                        class="flex md:justify-center gap-x-2 rounded-lg px-5 py-2.5 md:text-center"
                        class:text-white={ActiveMenu==`${base}/contributor/`}
                        class:bg-black={ActiveMenu==`${base}/contributor/`}
                        class:hover:bg-slate-200={ActiveMenu!=`${base}/contributor/`}
                        class:hover:text-black={ActiveMenu!=`${base}/contributor/`}
                        on:click={() => { ActiveMenu = `${base}/contributor/` }}
                    >
                        <i class="fa-solid fa-masks-theater pt-1"></i>
                        Kontributor
                    </a>
                </li>
                <li>
                    <div class="flex md:justify-center gap-x-2 rounded-lg px-5 py-2.5 md:text-center cursor-pointer"
                        class:text-white={ActiveMenu.includes('repository')}
                        class:bg-black={ActiveMenu.includes('repository')}
                        class:hover:bg-slate-200={ActiveMenu.includes('repository')}
                        class:hover:text-black={ActiveMenu.includes('repository')}
                        on:click={() => { dropdowns.repository = !dropdowns.repository }}
                        on:mouseenter={() => { dropdowns.repository = true }}
                        on:mouseleave={() => { dropdowns.repository = false }}
                    >
                        <i class="fa-solid fa-code-compare pt-1"></i>
                        Repository
                        <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </div>
                    <!-- Dropdown menu -->
                    <div class="absolute z-10 mt-4 md:mt-0 font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                         class:hidden={!dropdowns.repository}
                         on:mouseenter={() => { dropdowns.repository = true }}
                         on:mouseleave={() => { dropdowns.repository = false }}
                    >
                        <ul class="py-1  text-gray-700 dark:text-gray-400">
                            <li>
                                <a href="{base}/repository/plugin" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                   on:click={() => { ActiveMenu = `${base}/repository/plugin/` }}
                                >
                                    Plugins
                                </a>
                            </li>
                            <li>
                                <a href="{base}/repository/theme" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                   on:click={() => { ActiveMenu = `${base}/repository/theme/` }}
                                >
                                    Themes
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
