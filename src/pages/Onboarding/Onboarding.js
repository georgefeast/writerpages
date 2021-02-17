import React from "react";
import * as R from "ramda";
import { Box, Flex, Heading } from "theme-ui";
import {
	ReviewScreen,
	RoleScreen,
	GoalsScreen,
	FrustrationsScreen,
	TrainingTimeScreen,
} from "./screens";
import { OnboardingProvider, useOnboarding } from "./useOnboardingContext";
import { screenKeys } from "../../constants/screens";
import NavigatorDot from "../../components/NavigatorDot";

const orderedScreens = {
	[screenKeys.ROLE]: RoleScreen,
	[screenKeys.REVIEW]: ReviewScreen,
	[screenKeys.GOALS]: GoalsScreen,
	[screenKeys.FRUSTRATIONS]: FrustrationsScreen,
	[screenKeys.TRAINING_TIME]: TrainingTimeScreen,
};

const orderedScreenKeys = R.keys(orderedScreens);

const OnboardingFlow = () => {
	const { currentScreenKey, currentColorScheme, goToKey } = useOnboarding();
	const CurrentScreen = orderedScreens[currentScreenKey];

	return (
		<Flex
			sx={{
				bg: currentColorScheme,
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
						<NavigatorDot
							key={key}
							onClick={() => goToKey(key)}
							isActive={key === currentScreenKey}
							mx={2}
						/>
					))}
				</Flex>
				<Box sx={{ textAlign: "center" }}>
					<Heading variant="headingLarge" color="white">
						Welcome
					</Heading>
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
