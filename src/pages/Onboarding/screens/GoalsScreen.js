import React from "react";
import { useDispatch } from "react-redux";
import { Box, Heading, Button, Flex } from "theme-ui";
import OnboardingScreenForm from "../../../components/OnboardingScreenForm";
import Screen from "../../../components/Screen";
import { GOALS_OPTIONS } from "../../../constants/options";
import { screenKeys } from "../../../constants/screens";
import {
	decrementCurrentScreen,
	incrementCurrentScreen,
} from "../../../redux/actions";
import useIsScreenCompleted from "../../../redux/useIsScreenCompleted";

const SCREEN_KEY = screenKeys.GOALS;

const GoalsScreen = () => {
	const dispatch = useDispatch();
	const isValid = useIsScreenCompleted(SCREEN_KEY);

	return (
		<Screen>
			<Box>
				<Box sx={{ py: 3 }}>
					<Heading as="h2" variant="headingSmall">
						What are you goals for when you use writerPAGES?
					</Heading>
				</Box>
				<OnboardingScreenForm screenKey={SCREEN_KEY} options={GOALS_OPTIONS} />
			</Box>
			<Flex>
				<Button
					variant="mediumGhost"
					sx={{ width: "50%", mr: 3 }}
					onClick={() => dispatch(decrementCurrentScreen())}
				>
					Back
				</Button>
				<Button
					variant="mediumGhost"
					sx={{ width: "50%" }}
					onClick={() => dispatch(incrementCurrentScreen())}
					disabled={!isValid}
				>
					Next
				</Button>
			</Flex>
		</Screen>
	);
};

export default GoalsScreen;
