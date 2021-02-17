const breakpoints = ["40em", "52em", "64em"];

export default {
	useBorderBox: true,
	colors: {
		text: "#fff",
		primary: "#fff",
		highlight: "rgba(255,255,255,0.3)",
	},
	breakpoints,
	fonts: {
		body:
			'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
		heading:
			'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
		monospace: "Menlo, monospace",
	},
	shadows: {
		cardSmall: "0px 0px 9px rgba(0, 0, 0, 0.1)",
		cardLarge: "0px 0px 18px rgba(0, 0, 0, 0.2)",
		elementTiny: "0px 2px 4px rgba(0, 0, 0, 0.15)",
		elementSmall: "0px 2px 8px rgba(0, 0, 0, 0.2)",
		elementLarge: "0px 4px 18px rgba(0, 0, 0, 0.2)",
	},
	fontSizes: [8, 10, 12, 14, 16, 18, 20, 24, 32, 48, 64],
	fontWeights: {
		light: 300,
		body: 400,
		heading: 600,
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
	widths: {
		maxWidth: "100%",
	},
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
			fontWeight: "bold",
			lineHeight: "condensed",
			fontSize: [8],
			color: "primary",
		},
		headingMedium: {
			fontFamily: "heading",
			fontWeight: "bold",
			lineHeight: "condensed",
			fontSize: [7],
			color: "primary",
		},
		headingSmall: {
			fontFamily: "heading",
			fontWeight: "bold",
			lineHeight: "default",
			fontSize: [5],
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
			fontSize: [5],
			color: "text",
		},
		bodyDefault: {
			fontFamily: "body",
			fontWeight: "body",
			lineHeight: "default",
			fontSize: [4],
			color: "text",
		},
		bodySmall: {
			fontFamily: "body",
			fontWeight: "body",
			lineHeight: "default",
			fontSize: [3],
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
			fontSize: 1,
			py: "2px",
			height: "24px",
			bg: "primary",
			cursor: "pointer",
			"&:disabled": {
				backgroundColor: "secondary",
			},
		},
		smallGhost: {
			fontSize: 1,
			py: "2px",
			height: "24px",
			bg: "muted",
			cursor: "pointer",
			color: "muted",
			backgroundColor: "transparent",
			border: "1px solid",
			"&:disabled": {
				backgroundColor: "secondary",
			},
		},
		mediumGhost: {
			fontSize: 3,
			py: 1,
			cursor: "pointer",
			transition: "background-color ease 200ms",
			color: "primary",
			lineHeight: "default",
			bg: "transparent",
			"&:hover": {
				bg: "highlight",
				color: "primary",
			},
			border: "1px solid",
			borderColor: "primary",
		},
		icon: {
			cursor: "pointer",
			p: "1px",
		},
	},
};
