import React from "react";
import PropTypes from "prop-types";
import { Flex } from "theme-ui";

const Screen = ({ children }) => (
	<Flex
		sx={{
			flex: "1 1 100%",
			flexDirection: "column",
			justifyContent: "space-between",
		}}
	>
		{children}
	</Flex>
);

Screen.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Screen;
