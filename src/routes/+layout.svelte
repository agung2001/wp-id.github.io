<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<Header />
<main class="px-4 md:px-16">
    <slot />
</main>
<Footer />
