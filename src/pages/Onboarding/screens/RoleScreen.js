import React from "react";
import { Box, Heading, Button, Flex } from "theme-ui";
import OnboardingScreenForm from "../../../components/OnboardingScreenForm";
import Screen from "../../../components/Screen";
import { ROLE_OPTIONS } from "../../../constants/options";
import { screenKeys } from "../../../constants/screens";
import { useOnboarding } from "../useOnboardingContext";

const RoleScreen = () => {
	const { goToNextScreen, hasCompletedCurrentScreen } = useOnboarding();

	return (
		<Screen>
			<Box>
				<Box sx={{ py: 3 }}>
					<Heading as="h2" variant="headingSmall">
						What is your role?
					</Heading>
				</Box>
				<OnboardingScreenForm
					screenKey={screenKeys.ROLE}
					options={ROLE_OPTIONS}
				/>
			</Box>
			<Flex>
				<Button
					variant="mediumGhost"
					sx={{ width: "100%" }}
					onClick={goToNextScreen}
					disabled={!hasCompletedCurrentScreen}
				>
					Next
				</Button>
			</Flex>
		</Screen>
	);
};

export default RoleScreen;
