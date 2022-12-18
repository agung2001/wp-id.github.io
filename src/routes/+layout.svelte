<script>
    import { base } from '$app/paths';
    console.log(base);
</script>

<svelte:head>
    <!-- Assets -->
    <link href="{base}css/tailwind.min.css" rel="stylesheet">
    <link href="{base}css/style.min.css" rel="stylesheet">
</svelte:head>

<slot />