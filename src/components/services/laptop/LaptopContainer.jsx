import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Laptop } from "./Laptop";
import { OrbitControls, Stage } from "@react-three/drei";

const LaptopContainer = () => {
	return (
		<Canvas>
			<Suspense fallback="loading...">
				<Stage environment={"night"} intensity={0.5}></Stage>
				<Laptop />
				<OrbitControls />
				<perspectiveCamera position={[-1, 0, 1.8]} zoom={0.3} makeDefault />
			</Suspense>
		</Canvas>
	);
};

export default LaptopContainer;
