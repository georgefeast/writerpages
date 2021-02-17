import React from "react";
import * as R from "ramda";
import { Box, Flex, Button, Heading } from "theme-ui";
import ReviewScreen from "./screens/ReviewScreen";
import RoleScreen from "./screens/RoleScreen";
import GoalsScreen from "./screens/GoalsScreen";
import FrustrationsScreen from "./screens/FrustrationsScreen";
import TrainingTimeScreen from "./screens/TrainingTimeScreen";
import { OnboardingProvider, useOnboarding } from "./useOnboardingContext";

const orderedScreens = {
	ROLE: RoleScreen,
	REVIEW: ReviewScreen,
	GOALS: GoalsScreen,
	FRUSTRATIONS: FrustrationsScreen,
	TRAINING_TIME: TrainingTimeScreen,
};

const orderedScreenKeys = R.keys(orderedScreens);

const OnboardingFlow = () => {
	const { currentScreenId, goToIndex } = useOnboarding();
	const CurrentScreen = orderedScreens[currentScreenId];

	return (
		<Box sx={{ bg: "#1a7ace" }}>
			<Box sx={{ maxWidth: "600px", mx: "auto", px: 5, py: 6 }}>
				<Flex sx={{ justifyContent: "center", mb: 4 }}>
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
								bg: key === currentScreenId ? "white" : "transparent",
								border: "2px solid white",
								borderRadius: "100%",
							}}
						/>
					))}
				</Flex>
				<Box sx={{ textAlign: "center" }}>
					<Heading color="white">Welcome</Heading>
				</Box>
				<CurrentScreen />
			</Box>
		</Box>
	);
};

const Onboarding = () => (
	<OnboardingProvider orderedScreenKeys={orderedScreenKeys}>
		<OnboardingFlow />
	</OnboardingProvider>
);

export default Onboarding;
