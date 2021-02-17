import React from "react";
import PropTypes from "prop-types";
import { Button } from "theme-ui";

const NavigatorDot = ({ onClick, isDisabled, isActive, ...rest }) => (
	<Button
		onClick={onClick}
		disabled={isDisabled}
		sx={{
			p: 0,
			width: "10px",
			height: "10px",
			cursor: "pointer",
			bg: isActive ? "white" : "transparent",
			border: "2px solid white",
			borderRadius: "100%",
			"&:disabled": {
				opacity: 0.5,
			},
		}}
		{...rest}
	/>
);

NavigatorDot.propTypes = {
	onClick: PropTypes.func.isRequired,
	isDisabled: PropTypes.bool.isRequired,
	isActive: PropTypes.bool.isRequired,
};

export default NavigatorDot;
