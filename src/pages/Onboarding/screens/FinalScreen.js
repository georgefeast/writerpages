import React from "react";
import { Box, Heading, Button, Flex } from "theme-ui";
import Screen from "../../../components/Screen";
import { useOnboarding } from "../useOnboardingContext";

const TrainingTimeScreen = () => {
	const {
		formValues,
		goToPreviousScreen,
		currentColorScheme,
	} = useOnboarding();

	const handleSubmit = () => {
		const { log } = console;
		log(formValues);
	};

	return (
		<Screen>
			<Box>
				<Box sx={{ py: 3 }}>
					<Heading as="h2" variant="headingSmall">
						Would you like one of our authorDOCS experts to assist you with a
						training session?
					</Heading>
				</Box>
				<Button
					variant="smallButton"
					sx={{ bg: "primary", color: currentColorScheme, fontSize: 2 }}
				>
					Book a training time
				</Button>
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
					onClick={handleSubmit}
				>
					Done
				</Button>
			</Flex>
		</Screen>
	);
};

export default TrainingTimeScreen;
