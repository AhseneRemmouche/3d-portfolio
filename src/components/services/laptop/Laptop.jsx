import { useGLTF } from "@react-three/drei";

export function Laptop(props) {
	const { nodes, materials } = useGLTF("images/laptop/laptop.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Frame_ComputerFrame_0.geometry}
				material={materials.ComputerFrame}
				position={[0, 0.976, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Screen_ComputerScreen_0.geometry}
				material={materials.ComputerScreen}
				position={[0, 0.65, -10.3]}
				rotation={[Math.PI, 0, -Math.PI]}
				scale={[100, 100, 88.235]}
			/>
		</group>
	);
}

useGLTF.preload("images/laptop/laptop.glb");
