/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx, Box, Flex } from "theme-ui";

const Checkbox = ({ children, checked, ...rest }) => (
	<Box sx={{ display: "inline-block", width: "100%" }}>
		<input
			type="checkbox"
			checked={checked}
			{...rest}
			sx={{
				border: 0,
				clip: "rect(0 0 0 0)",
				clipPath: "inset(50%)",
				height: "1px",
				margin: "-1px",
				overflow: "hidden",
				padding: 0,
				position: "absolute",
				whiteSpace: "nowrap",
				width: "1px",
			}}
		/>
		<Box
			checked={checked}
			sx={{
				px: 2,
				pt: 2,
				borderRadius: "5px",
				bg: checked ? "#fff" : "rgba(255,255,255,0.2)",
				border: "1px solid",
				borderColor: "#fff",
				cursor: "pointer",
				"&:hover, &:focus": {
					bg: checked ? "#fff" : "rgba(255,255,255,0.5)",
				},
				transition: "background-color 300ms ease",
			}}
		>
			<Flex sx={{ alignItems: "start", minHeight: "25px" }}>
				<Box
					sx={{
						borderRadius: "100%",
						border: "1px solid",
						borderColor: checked ? "primary" : "#fff",
						height: "16px",
						width: "16px",
						display: "inline-flex",
						alignItems: "center",
						justifyContent: "center",
						mr: 2,
						flex: "0 0 auto",
					}}
				>
					<svg
						viewBox="0 0 24 24"
						sx={{
							width: "10px",
							height: "10px",
							fill: "none",
							stroke: checked ? "primary" : "#fff",
							strokeWidth: "3px",
							visibility: checked ? "visible" : "hidden",
						}}
					>
						<polyline points="20 6 9 17 4 12" />
					</svg>
				</Box>
				<Box
					sx={{
						color: checked ? "primary" : "#fff",
						flex: "1 1 100%",
						mt: "1px",
					}}
				>
					{children}
				</Box>
			</Flex>
		</Box>
	</Box>
);

Checkbox.propTypes = {
	children: PropTypes.node.isRequired,
	checked: PropTypes.bool.isRequired,
};

export default Checkbox;
