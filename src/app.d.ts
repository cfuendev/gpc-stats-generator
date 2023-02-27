// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface ITheme {
			background: string,
			border: string,
			stroke: string,
			ring: string,
			fire: string,
			currStreakNum: string,
			sideNums: string,
			currStreakLabel: string,
			sideLabels: string,
			dates: string
		}

		interface IThemeObject {
			[index: string]: ITheme
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
