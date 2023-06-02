<script>
	import '../globals.css';
</script>

<div class="container">
	<h1><a href="/" class="header">Når er EU-kontroll?</a></h1>
	<slot />
	<footer>Made by <a href="https://github.com/jalvsaker/">Jens</a></footer>
</div>

<style>
	h1 {
		margin-top: 0;
	}
	.header {
		color: inherit;
		text-decoration: inherit;
	}
	.header:hover {
		text-decoration: underline;
	}
	footer {
		bottom: 1em;
		position: absolute;
	}
	.container {
		padding: 1em;
		margin: 0 auto;
		max-width: max(60vw, 1000px);
		height: 100svh;
		box-sizing: border-box;
		background-color: white;
		outline: 1px solid black;
	}
	@media (prefers-color-scheme: dark) {
		.container {
			background-color: #111;
			outline: none;
		}
	}
</style>
