import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Shape = () => {
	return (
		<Canvas>
			<mesh>
				<Sphere args={[1, 100, 200]} scale={2.5}>
					<MeshDistortMaterial
						color="#DB8B9B"
						attach="material"
						distort={0.5}
						speed={2}
					/>
				</Sphere>

				<ambientLight intensity={2} />
				<directionalLight position={[1, 2, 3]} />
				{/* <OrbitControls enableZoom={false} /> */}
			</mesh>
		</Canvas>
	);
};

export default Shape;
