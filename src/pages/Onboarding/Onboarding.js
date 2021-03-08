import React from "react";
import * as R from "ramda";
import { Box, Flex, Heading } from "theme-ui";
import { useDispatch, useSelector } from "react-redux";
import {
	ReviewScreen,
	RoleScreen,
	GoalsScreen,
	FrustrationsScreen,
	TrainingTimeScreen,
} from "./screens";

import NavigatorDot from "../../components/NavigatorDot";
import { screenKeys } from "../../constants/screens";
import { colorSchemes } from "../../constants/color-schemes";
import { navigateToScreen } from "../../redux/actions";

const orderedScreens = {
	[screenKeys.ROLE]: RoleScreen,
	[screenKeys.REVIEW]: ReviewScreen,
	[screenKeys.GOALS]: GoalsScreen,
	[screenKeys.FRUSTRATIONS]: FrustrationsScreen,
	[screenKeys.TRAINING_TIME]: TrainingTimeScreen,
};

const OnboardingFlow = () => {
	const currentScreenIndex = useSelector((state) => state.currentScreen);
	const orderedScreenKeys = R.keys(orderedScreens);
	const currentScreenKey = orderedScreenKeys[currentScreenIndex];

	const dispatch = useDispatch();

	const CurrentScreen = orderedScreens[currentScreenKey];
	const colorScheme = colorSchemes[currentScreenKey];

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
					{orderedScreenKeys.map((key, index) => (
						<NavigatorDot
							key={key}
							onClick={() => dispatch(navigateToScreen(index))}
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
