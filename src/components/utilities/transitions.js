export const duration = 300;

export const routeDefaultStyle = {
	transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease`,
	opacity: 0,
	transform: "translateX(-100vw)",
	overflow: "hidden",
};

export const routeTransitionStyles = {
	entering: {
		opacity: 1,
		transform: "translateX(0)",
		visibility: "visible",
	},
	entered: {
		opacity: 1,
		transform: "translateX(0)",
		visibility: "visible",
	},
	exiting: {
		transform: "translateY(100vw)",
		opacity: 0,
		visibility: "visible",
	},
};
