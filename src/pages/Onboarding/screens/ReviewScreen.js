import React from "react";
import { Box, Heading, Button, Flex } from "theme-ui";
import OnboardingScreenForm from "../../../components/OnboardingScreenForm";
import Screen from "../../../components/Screen";
import { REVIEW_OPTIONS } from "../../../constants/options";
import { screenKeys } from "../../../constants/screens";
import { useOnboarding } from "../useOnboardingContext";

const ReviewScreen = () => {
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
						What types of review do you do?
					</Heading>
				</Box>
				<OnboardingScreenForm
					screenKey={screenKeys.REVIEW}
					options={REVIEW_OPTIONS}
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

export default ReviewScreen;
