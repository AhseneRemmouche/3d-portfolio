import { div } from "motion/react-client";
import AirplaneContainer from "./airplane/AirplaneContainer";
import AllahContainer from "./Allah/AllahContainer";
import CarContainer from "./car/CarContainer";
import { Laptop } from "./laptop/Laptop";
import LaptopContainer from "./laptop/LaptopContainer";
import MacBookContainer from "./macBook/MacBookContainer";
import "./services.css";
import { useState } from "react";

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
	const [currentServiceId, setCurrentServiceId] = useState(1);
	
	return (
		<div className="services">
			<div className="servicesSection left">
				<h1 className="servicesTitle">How do I Help? </h1>
				<div className="servicesList">
					{services.map((service) => {
						return (
							<div
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
							</div>
						);
					})}
				</div>
				<div className="counterList">
					<span>59 Projects Completed</span>
					<br />
					<span>57 Happy Clients</span>
				</div>
			</div>
			<div className="servicesSection right">
				{currentServiceId === 1 ? (
					<MacBookContainer />
				) : currentServiceId === 2 ? (
					<CarContainer />
				) : (
					<AirplaneContainer />
				)}
			</div>
		</div>
	);
};

export default Services;
