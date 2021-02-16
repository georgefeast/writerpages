import React from "react";
import * as R from "ramda";
import { Box, Flex, Button, Heading } from "theme-ui";
import ReviewScreen from "./screens/ReviewScreen";
import RoleScreen from "./screens/RoleScreen";
import { OnboardingProvider, useOnboarding } from "./useOnboardingContext";

const orderedScreens = {
	ROLE: RoleScreen,
	REVIEW: ReviewScreen,
};

const orderedScreenKeys = R.keys(orderedScreens);

const OnboardingFlow = () => {
	const { currentScreenId, goToIndex } = useOnboarding();
	const CurrentScreen = orderedScreens[currentScreenId];

	return (
		<Box>
			<Flex sx={{ justifyContent: "center" }}>
				{orderedScreenKeys.map((key) => (
					<Button
						onClick={() => goToIndex(key)}
						key={key}
						sx={{
							p: 0,
							mx: 1,
							width: "10px",
							height: "10px",
							cursor: "pointer",
							bg: key === currentScreenId ? "black" : "transparent",
							border: "2px solid black",
							borderRadius: "100%",
						}}
					/>
				))}
			</Flex>
			<Heading>Welcome</Heading>
			<CurrentScreen />
		</Box>
	);
};

const Onboarding = () => (
	<OnboardingProvider orderedScreenKeys={orderedScreenKeys}>
		<OnboardingFlow />
	</OnboardingProvider>
);

export default Onboarding;
