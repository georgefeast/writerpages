import React, { useEffect, useState } from "react";
import * as R from "ramda";
import { useFormik } from "formik";
import { Box, Button, Checkbox, Flex, Textarea, Label, Text } from "theme-ui";
import Screen from "../../../components/Screen";
import { useOnboarding } from "../useOnboardingContext";

const FRUSTRATIONS_OPTIONS = {
	FINDING_PARTS_TO_REVIEW: "Finding the parts of the contract I need to review",
	MISSING_THINGS: "Missing things when reviewing documents",
	FINDING_WORDING: "Finding the best working when drafting clauses",
	CHECKING_DEFINITIONS:
		"Checking definitions and cross references through the document",
	STANDARDIZING_REVIEWS: "Standardizing reviews according to your playbook",
	TAKES_TOO_LONG: "It takes too long",
	NO_JUNIOR_TRAINING_TIME: "No time to train up juniors",
	OTHER: "Other",
};

const FIELD_NAME = "frustrations";
const DETAIL_FIELD_NAME = `${FIELD_NAME}Detail`;

const ReviewScreen = () => {
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

	const checkboxes = R.toPairs(FRUSTRATIONS_OPTIONS);

	return (
		<Screen>
			<Text>What are your goals for when you use authorDOCS</Text>
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
							/>
							{label}
						</Label>
					))}
					{values[FIELD_NAME].indexOf("OTHER") > -1 ? (
						<Textarea
							name={DETAIL_FIELD_NAME}
							onChange={handleChange}
							onBlur={handleBlur}
							rows="6"
							mb={3}
						/>
					) : null}
				</Flex>
			</Box>
			<Box>
				<Button onClick={goToPreviousScreen}>Back</Button>
				<Button onClick={goToNextScreen}>Next</Button>
			</Box>
		</Screen>
	);
};

export default ReviewScreen;
