import { animate, easeIn, easeInOut } from "motion";
import { motion } from "motion/react";

const listVariants = {
	initialList: {
		x: -100,
		y: -100,
		opacity: 0,
	},
	animateList: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 3,
			staggerChildren: 1,
		},
	},
};

const Animation = () => {
	return (
		<section
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{/* <motion.div
				initial={{ x: 0, y: 200, opacity: 1, width: 200 }}
				animate={{ x: 200, y: -200, opacity: 0.5, width: 400 }}
				transition={{ duration: 2, ease: easeInOut, repeat: Infinity }}
				className="test"
				style={{ width: 200, height: 200, backgroundColor: "blue" }}
			>
				Animation
			</motion.div> */}
			<motion.ul
				variants={listVariants}
				initial="initialList"
				animate="animateList"
			>
				<motion.li variants={listVariants}>Home</motion.li>
				<motion.li variants={listVariants}>About</motion.li>
				<motion.li variants={listVariants}>Contact</motion.li>
			</motion.ul>
		</section>
	);
};

export default Animation;
