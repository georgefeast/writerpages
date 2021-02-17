import React from "react";
import * as R from "ramda";
import { Box, Flex, Button, Heading } from "theme-ui";
import ReviewScreen from "./screens/ReviewScreen";
import RoleScreen from "./screens/RoleScreen";
import GoalsScreen from "./screens/GoalsScreen";
import FrustrationsScreen from "./screens/FrustrationsScreen";
import TrainingTimeScreen from "./screens/TrainingTimeScreen";
import { OnboardingProvider, useOnboarding } from "./useOnboardingContext";
import { screenKeys } from "../../constants/screens";
import { colorSchemes } from "../../constants/color-schemes";

const orderedScreens = {
	[screenKeys.ROLE]: RoleScreen,
	[screenKeys.REVIEW]: ReviewScreen,
	[screenKeys.GOALS]: GoalsScreen,
	[screenKeys.FRUSTRATIONS]: FrustrationsScreen,
	[screenKeys.TRAINING_TIME]: TrainingTimeScreen,
};

const orderedScreenKeys = R.keys(orderedScreens);

const OnboardingFlow = () => {
	const { currentScreenId, goToIndex } = useOnboarding();
	const CurrentScreen = orderedScreens[currentScreenId];

	const colorScheme = colorSchemes[currentScreenId];

	return (
		<Flex
			sx={{
				bg: colorScheme,
				transition: "background-color 500ms ease",
				minHeight: "100vh",
				width: "100%",
				flexDirection: "column",
			}}
		>
			<Flex
				sx={{
					maxWidth: "600px",
					mx: "auto",
					px: 5,
					pt: 6,
					pb: 4,
					width: "100%",
					flex: "1 1 100%",
					flexDirection: "column",
					height: "100%",
				}}
			>
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
			</Flex>
		</Flex>
	);
};

const Onboarding = () => (
	<OnboardingProvider orderedScreenKeys={orderedScreenKeys}>
		<OnboardingFlow />
	</OnboardingProvider>
);

export default Onboarding;
