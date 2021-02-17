import React from "react";
import { Box, Heading, Button, Flex } from "theme-ui";
import QuestionaireScreenForm from "../../../components/QuestionaireScreenForm";
import Screen from "../../../components/Screen";
import { colorSchemes } from "../../../constants/color-schemes";
import { FRUSTRATIONS_OPTIONS } from "../../../constants/options";
import { useOnboarding } from "../useOnboardingContext";

const FrustrationsScreen = () => {
	const { goToNextScreen, goToPreviousScreen } = useOnboarding();

	return (
		<Screen>
			<Box>
				<Box sx={{ py: 3 }}>
					<Heading as="h2" variant="headingSmall">
						What are your frustrations when you are looking at documents?
					</Heading>
				</Box>
			</Box>
			<QuestionaireScreenForm
				fieldName="frustrations"
				options={FRUSTRATIONS_OPTIONS}
				colorScheme={colorSchemes.FRUSTRATIONS}
			/>
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
				>
					Next
				</Button>
			</Flex>
		</Screen>
	);
};

export default FrustrationsScreen;
