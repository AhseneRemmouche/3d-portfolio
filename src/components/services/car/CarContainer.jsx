import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Car } from "./Car";

const CarContainer = () => {
	return (
		<Canvas>
			<Suspense fallback="loading...">
				<Stage environment={"city"} intensity={0.5}>
					<Car />
				</Stage>
				<OrbitControls enableZoom={false} />
				<PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.9} makeDefault />
			</Suspense>
		</Canvas>
	);
};

export default CarContainer;
