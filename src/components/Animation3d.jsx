import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Animation3d = () => {
	return (
		<section
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			3D Animation
			<Canvas>
				<mesh>
					<Sphere args={[1, 200, 300]} scale={2}>
						<MeshDistortMaterial
							color="blue"
							attach="material"
							distort={0.5}
							speed={2}
						/>
					</Sphere>

					<ambientLight intensity={0.4} />
					<directionalLight color="blue" position={[1, 2, 3]} />
					<OrbitControls enableZoom={false} />
				</mesh>
			</Canvas>
		</section>
	);
};

export default Animation3d;
