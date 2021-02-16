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
	const getScreenIndex = (screenId) => orderedScreenKeys.indexOf(screenId);
	const getScreenIdByIndex = (screenIndex) => orderedScreenKeys[screenIndex];

	const [screen, setScreen] = useState(orderedScreenKeys[0]);
	const [formValues, setFormValues] = useState({});

	const goToNextScreen = useCallback(() => {
		const nextScreenId = getScreenIdByIndex(getScreenIndex(screen) + 1);
		if (nextScreenId) {
			setScreen(nextScreenId);
		}
	}, [getScreenIdByIndex]);

	const goToPreviousScreen = useCallback(() => {
		const previousScreenId = getScreenIdByIndex(getScreenIndex(screen) - 1);
		if (previousScreenId) {
			setScreen(previousScreenId);
		}
	}, [getScreenIdByIndex]);

	const mergeFormValues = useCallback(
		R.compose(setFormValues, R.mergeLeft),
		[],
	);

	const value = useMemo(
		() => ({
			currentScreenId: screen,
			currentScreenIndex: getScreenIndex(screen),
			goToNextScreen,
			goToPreviousScreen,
			onValues: mergeFormValues,
			formValues,
		}),
		[screen, formValues],
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
