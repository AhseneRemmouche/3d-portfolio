import { Canvas } from "@react-three/fiber";
import { Allah } from "./Allah";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Suspense } from "react";

const AllahContainer = () => {
	return (
		<Canvas>
			<Suspense fallback="loading...">
				<Stage environment={"Forest"} intensity={0.5}>
					<Allah />
				</Stage>
				<OrbitControls enableZoom={false} />
				<PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.7} makeDefault />
			</Suspense>
		</Canvas>
	);
};

export default AllahContainer;
