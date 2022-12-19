<script>
    import config from "../config.js";
    import {DocTitle} from "../stores/Layout.js";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    let { description } = config;
</script>

<svelte:head>
    <title>{description}{($DocTitle) ? ` | ${$DocTitle}` : ``}</title>
</svelte:head>

<Header />
<main class="px-4 md:px-16">
    <slot />
</main>
<Footer />
