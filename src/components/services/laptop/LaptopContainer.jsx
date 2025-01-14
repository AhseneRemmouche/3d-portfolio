import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Laptop } from "./Laptop";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const LaptopContainer = () => {
	return (
		<Canvas>
			<Suspense fallback="loading...">
				<Stage environment={"apartment"} intensity={0.7}>
					<Laptop />
				</Stage>
				<OrbitControls enableZoom={false} />
				<PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.7} makeDefault />
			</Suspense>
		</Canvas>
	);
};

export default LaptopContainer;
