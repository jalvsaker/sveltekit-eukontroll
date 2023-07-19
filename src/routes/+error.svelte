<script>
	import { page } from '$app/stores';
	import InputForm from '../components/InputForm.svelte';
</script>

<h3>{$page.error.message}</h3>

{#if $page.status === 404}
	<InputForm />
{/if}
