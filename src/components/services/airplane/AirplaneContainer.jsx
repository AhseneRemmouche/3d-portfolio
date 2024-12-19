import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Airplane } from "./Airplane";

const AirplaneContainer = () => {
	return (
		<Canvas>
			<Suspense fallback="loading...">
				<Stage environment={"apartment"} intensity={0.5}>
					<Airplane />
				</Stage>
				<OrbitControls enableZoom={false} />
				<PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.9} makeDefault />
			</Suspense>
		</Canvas>
	);
};

export default AirplaneContainer;
