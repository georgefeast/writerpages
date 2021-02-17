import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Box, Heading, Text, Button, Flex } from "theme-ui";
import Screen from "../../../components/Screen";
import { screenKeys } from "../../../constants/screens";
import { useOnboarding } from "../useOnboardingContext";

const TrainingTimeScreen = () => {
	const {
		formValues,
		goToPreviousScreen,
		currentColorScheme,
	} = useOnboarding();

	const handleSubmit = () => {
		const reqVariables = {
			role: formValues[screenKeys.ROLE],
			roleDetail: formValues[`${screenKeys.ROLE}_DETAIL`],
			review: formValues[screenKeys.REVIEW],
			reviewDetail: formValues[`${screenKeys.REVIEW}_DETAIL`],
			goals: formValues[screenKeys.GOALS],
			frustrations: formValues[screenKeys.FRUSTRATIONS],
			frustrationsDetail: formValues[`${screenKeys.FRUSTRATIONS}_DETAIL`],
		};
		// eslint-disable-next-line no-alert
		alert(JSON.stringify(reqVariables));
	};

	return (
		<Screen>
			<Box>
				<Box sx={{ py: 3 }}>
					<Heading as="h2" variant="headingSmall">
						Would you like one of our writerPAGES experts to assist you with a
						training session?
					</Heading>
				</Box>
				<Button
					as="a"
					href="https://www.onit.com/schedule-a-demo/"
					target="_blank"
					variant="smallButton"
					sx={{ bg: "primary", color: currentColorScheme, fontSize: 2 }}
				>
					<FontAwesomeIcon icon={faCalendarAlt} />
					<Text as="span" ml={2}>
						Book a training time
					</Text>
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
