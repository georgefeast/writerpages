import React, { useEffect, useState } from "react";
import * as R from "ramda";
import { useFormik } from "formik";
import { Box, Button, Checkbox, Flex, Label, Text } from "theme-ui";
import Screen from "../../../components/Screen";
import { useOnboarding } from "../useOnboardingContext";

const REVIEW_OPTIONS = {
	CONFIDENTIALITY: "Confidentiality",
	CONSTRUCTION: "Construction",
	CORPORATE_DOCUMENTS: "Corporate documents",
	DATA_PRIVACY: "Data privacy",
	DISPUTES: "Disputes",
	EMPLOYMENT: "Employment",
	LICENSES: "Licenses",
	LOANS_AND_FINANCING: "Loans and financing",
	PROCURMENT_SUPPLY_AND_SERVICES: "Procurement supply and services",
	PROPERTY_ANY_REAL_ESTATE: "Property and real estate",
	SALES_AND_PURCHASE: "Sales and purchase",
	TERMS_AND_CONDITIONS: "Terms and conditions",
	OTHER: "Other",
};

const FIELD_NAME = "review";

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

	const checkboxes = R.toPairs(REVIEW_OPTIONS);

	return (
		<Screen>
			<Text>What types of review do you do?</Text>
			<Box as="form" onSubmit={(e) => e.preventDefault()}>
				<Flex mb={3}>
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
