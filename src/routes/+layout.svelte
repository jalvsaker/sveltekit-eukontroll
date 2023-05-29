<script>
	import '../globals.css';
</script>

<div class="container">
	<h1><a href="/" class="header">Når er EU-kontroll?</a></h1>
	<slot />
	<footer>Made by <a href="https://github.com/jalvsaker/">Jens</a></footer>
</div>

<style>
	.header {
		color: inherit;
		text-decoration: inherit;
	}
	.header:hover{
		text-decoration: underline;
	}
	footer {
		bottom: 1em;
		position: absolute;
	}
	.container {
		padding: 0 1em;
	}
</style>
