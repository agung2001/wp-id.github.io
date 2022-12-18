<script>
    import { base } from '$app/paths';
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
    <!-- Assets -->
    <link href="{base}css/tailwind.min.css" rel="stylesheet">
    <link href="{base}css/style.min.css" rel="stylesheet">
</svelte:head>

<Header />
<main class="px-6">
    <slot />
</main>
<Footer />
