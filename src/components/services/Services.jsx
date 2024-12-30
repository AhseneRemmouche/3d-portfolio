import { motion, useInView } from "motion/react";
import AirplaneContainer from "./airplane/AirplaneContainer";
import CarContainer from "./car/CarContainer";
import MacBookContainer from "./macBook/MacBookContainer";
import "./services.css";
import { useRef, useState } from "react";
import Counter from "./Counter";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";
import AllahContainer from "./Allah/AllahContainer";
import AvatarContainer from "../hero/avatar/AvatarContainer";

const textVariants = {
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
			duration: 1,
		},
	},
};

const listVariants = {
	initial: {
		x: -100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.5,
		},
	},
};

const services = [
	{
		id: 1,
		img: "/images/service1.png",
		title: "Web Development",
		counter: 25,
	},
	{
		id: 2,
		img: "/images/service2.png",
		title: "React Development",
		counter: 19,
	},
	{
		id: 3,
		img: "/images/service3.png",
		title: "Next JS Development",
		counter: 15,
	},
];

const Services = () => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: "-200px" });

	const [currentServiceId, setCurrentServiceId] = useState(1);

	return (
		<div className="services" ref={ref}>
			<div className="servicesSection left">
				<motion.h1
					variants={textVariants}
					animate={isInView ? "animate" : "initial"}
					className="servicesTitle"
				>
					How do I Help?{" "}
				</motion.h1>
				<motion.div
					variants={listVariants}
					animate={isInView ? "animate" : "initial"}
					className="servicesList"
				>
					{services.map((service) => {
						return (
							<motion.div
								variants={listVariants}
								className="service"
								key={service.id}
								onClick={() => setCurrentServiceId(service.id)}
							>
								<div className="serviceIcon">
									<img src={service.img} alt="" />
								</div>
								<div className="serviceInfo">
									<h2 className="serviceTitle">{service.title}</h2>
									<h3 className="servicecounter">{service.counter}</h3>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
				<div className="counterList">
					<Counter from={0} to={59} text="Projects Completed" />
					<Counter from={0} to={57} text="Happy Clients" />
				</div>
			</div>
			<div className="servicesSection right">
				{currentServiceId === 1 ? (
					<MacBookContainer />
				) : currentServiceId === 2 ? (
					<CarContainer />
				) : (
					// <AvatarContainer />
					<AirplaneContainer />
				)}
			</div>
		</div>
	);
};

export default Services;
