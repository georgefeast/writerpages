import React, { useEffect, useState } from "react";
import * as R from "ramda";
import { useFormik } from "formik";
import { Box, Button, Checkbox, Flex, Label, Text } from "theme-ui";
import Screen from "../../../components/Screen";
import { useOnboarding } from "../useOnboardingContext";

const GOALS_OPTIONS = {
	IMPROVE_QUALITY_CONSISTENCY: "Improve quality and consistency of my work",
	SAVE_TIME: "Save time",
	REDUCE_RISK: "Reduce risk",
	ENABLE_WIDER_BUSINESS: "Enable the wider business / organization",
	DONT_KNOW: "I don't know",
};

const FIELD_NAME = "goals";

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

	const checkboxes = R.toPairs(GOALS_OPTIONS);

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
