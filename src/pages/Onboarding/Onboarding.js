import React from "react";
import { Box, Flex, Heading } from "theme-ui";
import { useSelector } from "react-redux";
import {
	ReviewScreen,
	RoleScreen,
	GoalsScreen,
	FrustrationsScreen,
	TrainingTimeScreen,
} from "./screens";

import NavigatorDot from "../../components/NavigatorDot";

const orderedScreens = [
	RoleScreen,
	ReviewScreen,
	GoalsScreen,
	FrustrationsScreen,
	TrainingTimeScreen,
];

const OnboardingFlow = () => {
	const currentScreenIndex = useSelector((state) => state.currentScreen);
	const CurrentScreen = orderedScreens[currentScreenIndex];

	return (
		<Flex
			sx={{
				bg: "schemeA",
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
					{orderedScreens.map((_, index) => (
						<NavigatorDot
							key={`${index + 1}`}
							onClick={() => {}}
							isActive={index === currentScreenIndex}
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

const Onboarding = () => <OnboardingFlow />;

export default Onboarding;
