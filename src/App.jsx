import Animation from "./components/Animation";
import Animation3d from "./components/Animation3d";
// import Contact from "./components/contact/Contact";
// import Hero from "./components/hero/Hero";
// import Portfolio from "./components/portfolio/Portfolio";
// import Services from "./components/services/Services";

import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));
function App() {
	return (
		<div className="container">
			{/* <h1>Bismi Allah</h1> */}
			<Suspense fallback={"...loading"}>
				<LazyLoad height={"100vh"} offset={-100}>
					<section id="home">
						<Hero />
					</section>
				</LazyLoad>
			</Suspense>
			<Suspense fallback={"...loading"}>
				<LazyLoad height={"100vh"} offset={-100}>
					<section id="services">
						<Services />
					</section>
				</LazyLoad>
			</Suspense>
			<Suspense fallback={"loading..."}>
				<LazyLoad height={"600vh"} offset={-100}>
					{/* <section id="portfolio"> */}
					<Portfolio />
					{/* </section> */}
				</LazyLoad>
			</Suspense>
			<Suspense fallback={"...loading"}>
				<LazyLoad height={"100vh"} offset={-100}>
					<section id="contact">
						<Contact />
					</section>
				</LazyLoad>
			</Suspense>

			{/* <Animation3d /> */}
			{/* <Animation /> */}
			{/* <TextAnimation /> */}
		</div>
	);
}

export default App;
