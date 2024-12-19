import AirplaneContainer from "./airplane/AirplaneContainer";
import AllahContainer from "./Allah/AllahContainer";
import CarContainer from "./car/CarContainer";
import { Laptop } from "./laptop/Laptop";
import LaptopContainer from "./laptop/LaptopContainer";
import MacBookContainer from "./macBook/MacBookContainer";
import "./services.css";

const Services = () => {
	return (
		<div className="services">
			<div className="servicesSection left">
				<AirplaneContainer />
			</div>
			<div className="servicesSection right">
				<CarContainer />
			</div>
		</div>
	);
};

export default Services;
