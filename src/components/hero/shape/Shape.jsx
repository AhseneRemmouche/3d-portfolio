/* eslint-disable react/no-unknown-property */
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
	return (
		<>
			<Sphere args={[1, 100, 200]} scale={2}>
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
		</>
	);
};

export default Shape;
