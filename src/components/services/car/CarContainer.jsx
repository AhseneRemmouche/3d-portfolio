import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Car } from "./Car";
import { useState } from "react";

const CarContainer = () => {
	const [isLoading, setIsLoading] = useState(true);
	return (
		<Canvas style={{ cursor: "pointer" }}>
			<Suspense fallback={isLoading ? "Loading..." : null}>
				<Stage environment={"forest"} intensity={0.5}>
					<Car onLoad={() => setIsLoading(false)} />
				</Stage>
				<OrbitControls enableZoom={false} />
				<PerspectiveCamera position={[-1, 0, 1.7]} zoom={0.9} makeDefault />
			</Suspense>
		</Canvas>
	);
};

export default CarContainer;
