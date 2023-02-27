<script context="module">
	import * as themesJSON from '../themes.json';
</script>

<script lang="ts">
	let GITHUB_USERNAME = 'cfuendev';

	let BACKGROUND_COLOR = '232323';

	let STREAK_STROKE_COLOR = '878686';
	let STREAK_RING_COLOR = 'fabe2b';
	let STREAK_FIRE_COLOR = 'fabe2b';
	let STREAK_CURR_STREAK_NUM_COLOR = 'fe8112';
	let STREAK_SIDE_NUMS_COLOR = 'fabe2b';
	let STREAK_CURR_STREAK_LABEL_COLOR = 'fe8112';
	let STREAK_SIDE_LABELS_COLOR = 'fabe2b';
	let STREAK_DATES_COLOR = '81ad72';

	let TITLE_COLOR = 'fe8112';
	let TEXT_COLOR = 'FED33B';

	let BORDER = false;
	let BORDER_COLOR = '878686';
	let GRAPH_AREA = true;

	// ===

	let THEME_INPUT: string = 'Gruvbox';

	$: THEME = THEME_INPUT.toLowerCase().replace(' ', '');

	let themes: App.IThemeObject = themesJSON.default;

	// ===

	let editor: number = 1;
	let which: number = 2;
</script>

<nav>
	<ul>
		<li>
			<strong>
				Generador de Stats
				<span style="font-size: 18px;"
					>pal README
					<span style="font-size: 10px;">(de GPC)</span></span
				> v.0.2.0
			</strong>
		</li>
	</ul>
	<ul>
		<li><button class="outline" on:click={() => (editor = 1)}>Temas</button></li>
		<li><button class="outline" on:click={() => (editor = 2)}>Editar (Simple)</button></li>
		<li><button class="outline" disabled>Editar (Avanzado)</button></li>
	</ul>
</nav>

<br /><br />

<label for="GITHUB_USERNAME">Usuario de GitHub</label>
<input id="GITHUB_USERNAME" type="text" placeholder="cfuendev" bind:value={GITHUB_USERNAME} />

{#if editor == 1}
	<select id="THEME" bind:value={THEME_INPUT}>
		<option hidden selected>Tema</option>
		{#each Object.keys(themes) as theme}
			<option>{theme.charAt(0).toUpperCase() + theme.slice(1)}</option>
		{/each}
	</select>
{/if}

{#if editor == 2}
	<label for="TEXT_COLOR">Color del Texto</label>
	<input id="TEXT_COLOR" type="text" placeholder="#FED33B" bind:value={TEXT_COLOR} />
	<label for="BACKGROUND_COLOR">Color del Fondo</label>
	<input id="BACKGROUND_COLOR" type="text" placeholder="#000000" bind:value={BACKGROUND_COLOR} />
	<label for="TITLE_COLOR">Color del Título</label>
	<input id="TITLE_COLOR" type="text" placeholder="#4B8ABD" bind:value={TITLE_COLOR} />
{/if}

<input type="checkbox" bind:checked={BORDER} /> Border
<input type="checkbox" bind:checked={GRAPH_AREA} /> Graph Area

<br /><br />
<div class="grid">
	<button on:click={() => (which = 1)}>Code</button>
	<button on:click={() => (which = 2)}>Preview</button>
</div>
<br /><br />

{#if which == 2}
	<img
		alt=""
		src={`https://streak-stats.demolab.com?user=${GITHUB_USERNAME}` +
			`&background=${THEME ? themes[THEME].background : BACKGROUND_COLOR}` +
			`&stroke=${THEME ? themes[THEME].stroke : STREAK_STROKE_COLOR}` +
			`&ring=${THEME ? themes[THEME].ring : STREAK_RING_COLOR}` +
			`&fire=${THEME ? themes[THEME].fire : STREAK_FIRE_COLOR}` +
			`&currStreakNum=${THEME ? themes[THEME].currStreakNum : STREAK_CURR_STREAK_NUM_COLOR}` +
			`&sideNums=${THEME ? themes[THEME].sideNums : STREAK_SIDE_NUMS_COLOR}` +
			`&currStreakLabel=${THEME ? themes[THEME].currStreakLabel : STREAK_CURR_STREAK_LABEL_COLOR}` +
			`&sideLabels=${THEME ? themes[THEME].sideLabels : STREAK_SIDE_LABELS_COLOR}` +
			`&dates=${THEME ? themes[THEME].dates : STREAK_DATES_COLOR}` +
			`&hide_border=${!BORDER}` +
			`&border=${THEME ? themes[THEME].stroke : BORDER_COLOR}`}
	/>

	<img
		alt=""
		src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}` +
			`&layout=compact` +
			`&bg_color=${THEME ? themes[THEME].background : BACKGROUND_COLOR}` +
			`&text_color=${THEME ? themes[THEME].sideLabels : TEXT_COLOR}` +
			`&title_color=${THEME ? themes[THEME].currStreakLabel : TITLE_COLOR}` +
			`&hide_border=${!BORDER}` +
			`&border=${THEME ? themes[THEME].stroke : BORDER_COLOR}`}
	/>

	<img
		alt=""
		src={`https://github-readme-activity-graph.cyclic.app/graph/?username=${GITHUB_USERNAME}` +
			`&line=${THEME ? themes[THEME].sideLabels : TEXT_COLOR}` +
			`&point=${THEME ? themes[THEME].currStreakLabel : TITLE_COLOR}` +
			`&bg_color=${THEME ? themes[THEME].background : BACKGROUND_COLOR}` +
			`&color=${THEME ? themes[THEME].currStreakLabel : TITLE_COLOR}` +
			`&area=${GRAPH_AREA}` +
			`&area_color=${THEME ? themes[THEME].sideLabels : TEXT_COLOR}`}
	/>
{/if}

{#if which == 1}
	<pre>{`
	[![GitHub Streak](https://streak-stats.demolab.com?user=${GITHUB_USERNAME}
		&background=${THEME ? themes[THEME].background : BACKGROUND_COLOR}
		&stroke=${THEME ? themes[THEME].stroke : STREAK_STROKE_COLOR}
		&ring=${THEME ? themes[THEME].ring : STREAK_RING_COLOR}
		&fire=${THEME ? themes[THEME].fire : STREAK_FIRE_COLOR}
		&currStreakNum=${THEME ? themes[THEME].currStreakNum : STREAK_CURR_STREAK_NUM_COLOR}
		&sideNums=${THEME ? themes[THEME].sideNums : STREAK_SIDE_NUMS_COLOR}
		&currStreakLabel=${THEME ? themes[THEME].currStreakLabel : STREAK_CURR_STREAK_LABEL_COLOR}
		&sideLabels=${THEME ? themes[THEME].sideLabels : STREAK_SIDE_LABELS_COLOR}
		&dates=${THEME ? themes[THEME].dates : STREAK_DATES_COLOR}
		&hide_border=${!BORDER}
		&border=${THEME ? themes[THEME].stroke : BORDER_COLOR})](https://git.io/streak-stats)

	[![GitHub Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}
		&layout=compact
		&bg_color=${THEME ? themes[THEME].background : BACKGROUND_COLOR}
		&text_color=${THEME ? themes[THEME].sideLabels : TEXT_COLOR}
		&title_color=${THEME ? themes[THEME].currStreakLabel : TITLE_COLOR}
		&hide_border=${!BORDER}
		&border=${THEME ? themes[THEME].stroke : BORDER_COLOR})

	<a href="https://github.com/ashutosh00710/github-readme-activity-graph">
		<img alt="https://github-readme-activity-graph.cyclic.app/graph/?username=${GITHUB_USERNAME}
			&line=${THEME ? themes[THEME].sideLabels : TEXT_COLOR}
			&point=${THEME ? themes[THEME].currStreakLabel : TITLE_COLOR}
			&bg_color=${THEME ? themes[THEME].background : BACKGROUND_COLOR}
			&color=${THEME ? themes[THEME].currStreakLabel : TITLE_COLOR}
			&area=${GRAPH_AREA}
			&area_color=${THEME ? themes[THEME].sideLabels : TEXT_COLOR}" style="width=200"
		/>
	</a>
`}</pre>
{/if}

<style>
	:root {
		margin-left: 60px;
		margin-right: 60px;
	}

	img {
		max-width: 495px;
	}

	pre {
		max-width: 90vw;
		overflow-x: scroll;
	}
</style>
