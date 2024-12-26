import { easeInOut } from "motion";
import { motion } from "motion/react";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";

const TextAnimation = () => {
	const shapeVariants = {
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
				// repeat: Infinity,
			},
		},
		initialSquare: {
			x: 200,
			y: 200,
		},
		animateSquare: {
			x: -200,
			y: 0,
			transition: {
				duration: 3,
				// repeat: Infinity,
			},
		},
	};
	const listVariants = {
		initial: {
			x: -100,
			y: -100,
			opacity: 0,
		},
		animate: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				duration: 3,
				staggerChildren: 1,
			},
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

				variants={shapeVariants}
				initial="initialCircle"
				animate="animateCircle"
			></motion.div>
			<motion.div
				style={{
					width: 200,
					height: 200,
					backgroundColor: "orange",
					zIndex: -1,
				}}
				variants={shapeVariants}
				initial="initialSquare"
				animate="animateSquare"
			></motion.div>
			<motion.ul variants={listVariants} initial="initial" animate="animate">
				<motion.li variants={listVariants}>JavaScript</motion.li>
				<motion.li variants={listVariants}>React JS</motion.li>
				<motion.li variants={listVariants}>Next JS</motion.li>
			</motion.ul>
		</section>
	);
};

export default TextAnimation;
