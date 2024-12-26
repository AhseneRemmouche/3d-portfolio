import { easeInOut } from "motion";
import { motion } from "motion/react";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";

const TextAnimation = () => {
	const shapeVariant = {
		initialCircle: {
			x: 200,
			y: 200,
			opacity: 0,
		},
		animateCircle: {
			x: 0,
			y: 0,
			opacity: 0.5,
			transition: {
				duration: 3,
				repeat: Infinity,
			},
		},
		initialSquare: {
			x: 0,
			y: 0,
		},
		animateSquare: {
			x: 200,
			y: 200,
		},
	};

	return (
		<section
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<motion.div
				style={{
					width: 200,
					height: 200,
					borderRadius: 100,
					backgroundColor: "blueviolet",
				}}
				// initial={{ x: 0, y: 0, opacity: 0 }}
				// animate={{ x: [0, 200], y: [0, -200], opacity: [0, 1] }}
				// transition={{
				// 	duration: 2,
				// 	// delay: 0,
				// 	ease: easeInOut,
				// 	repeat: Infinity,
				// }}

				variants={shapeVariant}
				initial="initialCircle"
				animate="animateCircle"
			></motion.div>
			<motion.div
				style={{ width: 200, height: 200, backgroundColor: "orange" }}
				variants={shapeVariant}
				initial="initialSquare"
				animate="animateSquare"
			></motion.div>
		</section>
	);
};

export default TextAnimation;
