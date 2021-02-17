import React from "react";
import { Box, Heading, Button, Flex } from "theme-ui";
import QuestionaireScreenForm from "../../../components/QuestionaireScreenForm";
import Screen from "../../../components/Screen";
import { colorSchemes } from "../../../constants/color-schemes";
import { FRUSTRATIONS_OPTIONS } from "../../../constants/options";
import { screenKeys } from "../../../constants/screens";
import { useOnboarding } from "../useOnboardingContext";

const FrustrationsScreen = () => {
	const {
		goToNextScreen,
		goToPreviousScreen,
		hasCompletedCurrentScreen,
	} = useOnboarding();

	return (
		<Screen>
			<Box>
				<Box sx={{ py: 3 }}>
					<Heading as="h2" variant="headingSmall">
						What are your frustrations when you are looking at documents?
					</Heading>
				</Box>
				<QuestionaireScreenForm
					screenKey={screenKeys.FRUSTRATIONS}
					options={FRUSTRATIONS_OPTIONS}
					colorScheme={colorSchemes.FRUSTRATIONS}
				/>
			</Box>
			<Flex>
				<Button
					variant="mediumGhost"
					sx={{ width: "50%", mr: 3 }}
					onClick={goToPreviousScreen}
				>
					Back
				</Button>
				<Button
					variant="mediumGhost"
					sx={{ width: "50%" }}
					onClick={goToNextScreen}
					disabled={!hasCompletedCurrentScreen}
				>
					Next
				</Button>
			</Flex>
		</Screen>
	);
};

export default FrustrationsScreen;
