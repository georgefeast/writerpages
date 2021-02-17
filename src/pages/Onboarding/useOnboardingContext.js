import React, {
	createContext,
	useContext,
	useState,
	useCallback,
	useMemo,
} from "react";
import * as R from "ramda";
import PropTypes from "prop-types";

const onboardingContext = createContext();

export const useOnboarding = () => {
	const context = useContext(onboardingContext);

	if (!context) {
		throw new Error(
			"Should always be used as a child of the OnboardingProvider",
		);
	}

	return context;
};

export const OnboardingProvider = ({
	children,
	orderedScreenKeys,
	...rest
}) => {
	const [screen, setScreen] = useState(orderedScreenKeys[0]);
	const [formValues, setFormValues] = useState({});

	const getScreenIndex = useCallback(
		(screenKey) => orderedScreenKeys.indexOf(screenKey),
		[orderedScreenKeys],
	);

	const getScreenKeyByIndex = useCallback(
		(screenIndex) => orderedScreenKeys[screenIndex],
		[orderedScreenKeys],
	);

	const hasCompletedScreen = useCallback(
		(screenKey) =>
			Boolean(formValues[screenKey] && formValues[screenKey].length),
		[formValues],
	);

	const hasCompletedCurrentScreen = hasCompletedScreen(screen);

	const goToNextScreen = useCallback(() => {
		const currentScreenIndex = getScreenIndex(screen);
		const nextScreenKey = getScreenKeyByIndex(currentScreenIndex + 1);
		if (nextScreenKey && hasCompletedCurrentScreen) {
			setScreen(nextScreenKey);
		}
	}, [getScreenKeyByIndex, hasCompletedCurrentScreen, getScreenIndex, screen]);

	const goToPreviousScreen = useCallback(() => {
		const currentScreenIndex = getScreenIndex(screen);
		const previousScreenKey = getScreenKeyByIndex(currentScreenIndex - 1);
		if (previousScreenKey) {
			setScreen(previousScreenKey);
		}
	}, [getScreenKeyByIndex, getScreenIndex, screen]);

	const mergeFormValues = useCallback(
		R.compose(setFormValues, R.mergeLeft),
		[],
	);

	const value = useMemo(
		() => ({
			currentScreenKey: screen,
			goToNextScreen,
			goToPreviousScreen,
			goToKey: setScreen,
			onValues: mergeFormValues,
			formValues,
			hasCompletedCurrentScreen,
			hasCompletedScreen,
		}),
		[
			screen,
			formValues,
			goToNextScreen,
			goToPreviousScreen,
			mergeFormValues,
			getScreenIndex,
			hasCompletedCurrentScreen,
			hasCompletedScreen,
		],
	);

	return (
		<onboardingContext.Provider value={value} {...rest}>
			{children}
		</onboardingContext.Provider>
	);
};

OnboardingProvider.propTypes = {
	children: PropTypes.node.isRequired,
	orderedScreenKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};
