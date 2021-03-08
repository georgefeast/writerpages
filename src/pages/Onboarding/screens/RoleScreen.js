import React from "react";
import { useDispatch } from "react-redux";
import { Box, Heading, Button, Flex } from "theme-ui";
import OnboardingScreenForm from "../../../components/OnboardingScreenForm";
import Screen from "../../../components/Screen";
import { ROLE_OPTIONS } from "../../../constants/options";
import { screenKeys } from "../../../constants/screens";
import { incrementCurrentScreen } from "../../../redux/actions";
import useIsScreenCompleted from "../../../redux/useIsScreenCompleted";

const SCREEN_KEY = screenKeys.ROLE;

const RoleScreen = () => {
	const dispatch = useDispatch();
	const isValid = useIsScreenCompleted(SCREEN_KEY);

	return (
		<Screen>
			<Box>
				<Box sx={{ py: 3 }}>
					<Heading as="h2" variant="headingSmall">
						What is your role?
					</Heading>
				</Box>
				<OnboardingScreenForm screenKey={SCREEN_KEY} options={ROLE_OPTIONS} />
			</Box>
			<Flex>
				<Button
					variant="mediumGhost"
					sx={{ width: "100%" }}
					onClick={() => dispatch(incrementCurrentScreen())}
					disabled={!isValid}
				>
					Next
				</Button>
			</Flex>
		</Screen>
	);
};

export default RoleScreen;
