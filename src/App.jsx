import Animation from "./components/Animation";
import Animation3d from "./components/Animation3d";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import TextAnimation from "./components/TextAnimation";

function App() {
	return (
		<div className="container">
			{/* <h1>Bismi Allah</h1> */}
			{/* <section id="hero">
				<Hero />
			</section>
			<section id="services">
				<Services />
			</section>
			<section id="portfolio">
				<Portfolio />
			</section>
			<section id="contact">
				<Contact />
			</section> */}
			{/* <Animation3d /> */}
			{/* <Animation /> */}
			<TextAnimation />
		</div>
	);
}

export default App;
