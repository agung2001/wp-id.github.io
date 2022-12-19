<script>
    import {_GetMeetup} from "./+page.js";
    import {onMount} from "svelte";

    /** Lifecycle onMount */
    onMount(async () => {
        let meetup = await _GetMeetup();
        console.log(meetup);
    });
</script>

MEETUP