import React, { useEffect, useState } from "react";
import * as R from "ramda";
import { useFormik } from "formik";
import { Box, Heading, Button, Flex, Label, Text } from "theme-ui";
import Screen from "../../../components/Screen";
import { useOnboarding } from "../useOnboardingContext";
import Checkbox from "../../../components/Checkbox";
import { colorSchemes } from "../../../constants/color-schemes";
import { GOALS_OPTIONS } from "../../../constants/options";

const FIELD_NAME = "goals";
const COLOR_SCHEME = colorSchemes.GOALS;

const GoalsScreen = () => {
	const {
		formValues,
		onValues,
		goToPreviousScreen,
		goToNextScreen,
	} = useOnboarding();

	const [initialValue] = useState(formValues[FIELD_NAME]);

	const { values, handleBlur, handleChange } = useFormik({
		validateOnMount: true,
		initialValues: {
			[FIELD_NAME]: initialValue || [],
		},
	});

	useEffect(() => {
		onValues(values);
	}, [onValues, values]);

	const checkboxes = R.toPairs(GOALS_OPTIONS);

	return (
		<Screen>
			<Box>
				<Box sx={{ py: 3 }}>
					<Heading as="h2" variant="headingSmall">
						What are you goals for when you use authorDOCS?
					</Heading>
				</Box>
				<Box as="form" onSubmit={(e) => e.preventDefault()}>
					<Flex mb={3} sx={{ flexDirection: "column" }}>
						{checkboxes.map(([key, label]) => (
							<Label key={key}>
								<Checkbox
									name={FIELD_NAME}
									value={key}
									checked={values[FIELD_NAME].indexOf(key) > -1}
									onBlur={handleBlur}
									onChange={handleChange}
									scheme={COLOR_SCHEME}
								>
									<Text color="inherit">{label}</Text>
								</Checkbox>
							</Label>
						))}
					</Flex>
				</Box>
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
					onClick={goToNextScreen}
				>
					Next
				</Button>
			</Flex>
		</Screen>
	);
};

export default GoalsScreen;
