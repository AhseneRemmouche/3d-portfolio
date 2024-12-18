import { Laptop } from "./laptop/Laptop";
import LaptopContainer from "./laptop/LaptopContainer";
import MacBookContainer from "./macBook/MacBookContainer";
import "./services.css";

const Services = () => {
	return (
		<div className="services">
			<div className="servicesSection left">
				<MacBookContainer />
			</div>
			<div className="servicesSection right"></div>
		</div>
	);
};

export default Services;
