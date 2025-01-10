import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { NightSky } from "./NightSky";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const NightSkyContainer = () => {
	return (
		<Canvas>
			<Suspense fallback="loading...">
				<Stage environment="night" intensity={10}>
					<NightSky />
				</Stage>
				<OrbitControls enableZoom={false} autoRotate />
				<PerspectiveCamera position={[1, 1, 2]} zoom={0.7} makeDefault />
			</Suspense>
		</Canvas>
	);
};

export default NightSkyContainer;
