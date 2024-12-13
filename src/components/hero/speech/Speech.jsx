import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
const Speech = () => {
	return (
		<motion.div
			animate={{ opacity: [0, 1] }}
			transition={{ duration: 5 }}
			className="bubbleContainer"
		>
			<div className="bubble">
				<TypeAnimation
					sequence={[
						1000,
						"Hi! I'm a Full Stack Developer",
						1000,
						"I create beautiful web experiences",
						1000,
						"Let's build something amazing together!",
						1000,
					]}
					wrapper="span"
					speed={50}
					deletionSpeed={40}
					repeat={Infinity}
				/>
			</div>
			<img src="images/man7.png" alt="" />
		</motion.div>
	);
};

export default Speech;
