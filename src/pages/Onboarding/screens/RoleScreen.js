import React from "react";
import { Box, Heading, Button, Flex } from "theme-ui";
import QuestionaireScreenForm from "../../../components/QuestionaireScreenForm";
import Screen from "../../../components/Screen";
import { colorSchemes } from "../../../constants/color-schemes";
import { ROLE_OPTIONS } from "../../../constants/options";
import { useOnboarding } from "../useOnboardingContext";

const RoleScreen = () => {
	const { goToNextScreen } = useOnboarding();

	return (
		<Screen>
			<Box>
				<Box sx={{ py: 3 }}>
					<Heading as="h2" variant="headingSmall">
						What is your role?
					</Heading>
				</Box>
			</Box>
			<QuestionaireScreenForm
				fieldName="role"
				options={ROLE_OPTIONS}
				colorScheme={colorSchemes.ROLE}
			/>
			<Flex>
				<Button
					variant="mediumGhost"
					sx={{ width: "100%" }}
					onClick={goToNextScreen}
				>
					Next
				</Button>
			</Flex>
		</Screen>
	);
};

export default RoleScreen;
