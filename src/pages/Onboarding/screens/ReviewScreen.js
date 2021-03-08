import React from "react";
import { useDispatch } from "react-redux";
import { Box, Heading, Button, Flex } from "theme-ui";
import OnboardingScreenForm from "../../../components/OnboardingScreenForm";
import Screen from "../../../components/Screen";
import { REVIEW_OPTIONS } from "../../../constants/options";
import { screenKeys } from "../../../constants/screens";
import {
	incrementCurrentScreen,
	decrementCurrentScreen,
} from "../../../redux/actions";
import useIsScreenCompleted from "../../../redux/useIsScreenCompleted";

const SCREEN_KEY = screenKeys.REVIEW;

const ReviewScreen = () => {
	const dispatch = useDispatch();
	const isValid = useIsScreenCompleted(SCREEN_KEY);

	return (
		<Screen>
			<Box>
				<Box sx={{ py: 3 }}>
					<Heading as="h2" variant="headingSmall">
						What types of review do you do?
					</Heading>
				</Box>
				<OnboardingScreenForm screenKey={SCREEN_KEY} options={REVIEW_OPTIONS} />
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

export default ReviewScreen;
