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

const ReviewScreen = () => {
	const dispatch = useDispatch();
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
					onClick={() => dispatch(decrementCurrentScreen())}
				>
					Back
				</Button>
				<Button
					variant="mediumGhost"
					sx={{ width: "50%" }}
					onClick={() => dispatch(incrementCurrentScreen())}
					disabled={false}
				>
					Next
				</Button>
			</Flex>
		</Screen>
	);
};

export default ReviewScreen;
