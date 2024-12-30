import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Airplane } from "./Airplane";

const AirplaneContainer = () => {
	const [isLoading, setIsLoading] = useState(true);
	return (
		<Canvas style={{ cursor: "pointer" }}>
			<Suspense fallback={isLoading ? "Loading..." : null}>
				<Stage environment={"apartment"} intensity={0.5}>
					<Airplane onLoad={() => setIsLoading(false)} />
				</Stage>
				<OrbitControls enableZoom={false} />
				<PerspectiveCamera position={[-1, 1, 1.8]} zoom={0.9} makeDefault />
			</Suspense>
		</Canvas>
	);
};

export default AirplaneContainer;
