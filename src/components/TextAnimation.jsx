import { easeInOut } from "motion";
import { motion } from "motion/react";

const TextAnimation = () => {
	return (
		<section
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<motion.div
				initial={{ x: 0, y: 0, opacity: 0 }}
				animate={{ x: 100, y: -100, opacity: 1 }}
				transition={{
					duration: 2,
					delay: 0,
					ease: easeInOut,
					repeat: Infinity,
				}}
				style={{
					width: 200,
					height: 200,
					borderRadius: 100,
					backgroundColor: "blueviolet",
				}}
			></motion.div>
		</section>
	);
};

export default TextAnimation;
