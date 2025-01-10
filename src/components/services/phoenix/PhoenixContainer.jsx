import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Phoenix } from "./Phoenix";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const PhoenixContainer = () => {
	return (
		<Canvas>
			<Suspense fallback="loading...">
				<Stage environment="night" intensity={10}>
					<Phoenix />
				</Stage>
				<OrbitControls enableZoom={false} autoRotate />
				<PerspectiveCamera position={[0, -1, 2]} zoom={0.7} makeDefault />
			</Suspense>
		</Canvas>
	);
};

export default PhoenixContainer;
