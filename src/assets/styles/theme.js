const breakpoints = ["40em", "52em", "64em"];

export default {
	useBorderBox: true,
	colors: {
		text: "#fff",
		primary: "#fff",
		highlight: "rgba(255,255,255,0.3)",
		schemeA: "#343fb6",
		schemeB: "#9c6ade",
		schemeC: "#017ace",
		schemeD: "#12c39a",
	},
	breakpoints,
	fonts: {
		body:
			'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
		heading:
			'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
		monospace: "Menlo, monospace",
	},
	fontSizes: [8, 10, 12, 14, 16, 18, 20, 24, 32, 48, 64],
	fontWeights: {
		light: 300,
		body: 400,
		heading: 500,
		bold: 700,
	},
	lineHeights: {
		condensed: 1.5,
		default: 1.75,
		expanded: 2,
	},
	letterSpacings: {
		body: "normal",
		caps: "0.2em",
	},
	space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
	forms: {
		input: {
			"::placeholder": {
				color: "muted",
			},
		},
		label: {
			fontSize: 2,
			pb: 2,
		},
	},
	text: {
		headingLarge: {
			fontFamily: "heading",
			fontWeight: "heading",
			lineHeight: "condensed",
			fontSize: [6],
			color: "primary",
		},
		headingMedium: {
			fontFamily: "heading",
			fontWeight: "heading",
			lineHeight: "condensed",
			fontSize: [5],
			color: "primary",
		},
		headingSmall: {
			fontFamily: "heading",
			fontWeight: "heading",
			lineHeight: "default",
			fontSize: [4],
			color: "primary",
		},
		headingTiny: {
			fontFamily: "heading",
			fontWeight: "heading",
			lineHeight: "default",
			fontSize: [3],
			color: "primary",
		},
		bodyLarge: {
			fontFamily: "body",
			fontWeight: "body",
			lineHeight: "default",
			fontSize: [4],
			color: "text",
		},
		bodyDefault: {
			fontFamily: "body",
			fontWeight: "body",
			lineHeight: "default",
			fontSize: [3],
			color: "text",
		},
		bodySmall: {
			fontFamily: "body",
			fontWeight: "body",
			lineHeight: "default",
			fontSize: [2],
			color: "text",
		},
	},
	styles: {
		root: {
			fontFamily: "body",
			fontWeight: "body",
		},
	},
	grids: {
		default: {
			maxWidth: 920,
			mx: "auto",
			gap: 4,
		},
	},
	links: {
		default: {
			fontSize: "inherit",
			color: "accent",
			textDecoration: "none",
		},
	},
	cards: {
		small: {
			padding: 2,
			borderRadius: 5,
			boxShadow: "cardSmall",
			transition: "box-shadow ease 200ms, transform ease 200ms",
			"&:hover": {
				boxShadow: "cardLarge",
			},
		},
		large: {
			bg: "background",
			padding: 4,
			borderRadius: 6,
			boxShadow: "cardLarge",
		},
	},
	buttons: {
		link: {
			appearance: "none",
			color: "inherit",
			fontSize: "inherit",
			bg: "transparent",
			p: 0,
			cursor: "pointer",
			borderRadius: 0,
		},
		small: {
			p: 1,
			height: "24px",
			cursor: "pointer",
			"&:disabled": {
				opacity: 0.3,
			},
		},
		mediumGhost: {
			fontSize: 3,
			py: 1,
			cursor: "pointer",
			transition: "background-color ease 200ms",
			color: "primary",
			lineHeight: "default",
			borderRadius: "3px",
			bg: "transparent",
			"&:hover": {
				bg: "highlight",
				color: "primary",
			},
			border: "1px solid",
			borderColor: "primary",
			"&:disabled": {
				opacity: 0.3,
			},
		},
		icon: {
			cursor: "pointer",
			p: "1px",
		},
	},
};
