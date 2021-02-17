import React from "react";
import { Box, Button, Text } from "theme-ui";
import Screen from "../../../components/Screen";
import { useOnboarding } from "../useOnboardingContext";

const ReviewScreen = () => {
	const { formValues, goToPreviousScreen } = useOnboarding();

	const handleSubmit = () => {
		const { log } = console;
		log(formValues);
	};

	return (
		<Screen>
			<Text>
				Would you like one of our authorDOCS experts to assist you with a
				training session
			</Text>
			<Box>
				<Button onClick={goToPreviousScreen}>Back</Button>
				<Button onClick={handleSubmit}>Done</Button>
			</Box>
		</Screen>
	);
};

export default ReviewScreen;
