import { Canvas } from "@react-three/fiber";
import { MacBook } from "./Macbook";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const MacBookContainer = () => {
	return (
		<Canvas>
			<Suspense fallback="loading...">
				<Stage environment={"night"} intensity={0.5}>
					<MacBook />
				</Stage>
				<OrbitControls enableZoom={false} autoRotate/>
				<PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.7} makeDefault />
			</Suspense>
		</Canvas>
	);
};

export default MacBookContainer;
