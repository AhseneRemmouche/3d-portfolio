import { useGLTF } from "@react-three/drei";

export function Model(props) {
	const { nodes, materials } = useGLTF("/airplane.glb");
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<mesh
					geometry={nodes.Object_2.geometry}
					material={materials.transparentExt}
				/>
				<mesh
					geometry={nodes.Object_3.geometry}
					material={materials.DefaultWhite}
				/>
				<mesh
					geometry={nodes.Object_4.geometry}
					material={materials.DefaultWhite}
				/>
				<mesh
					geometry={nodes.Object_5.geometry}
					material={materials.DefaultWhite}
				/>
				<mesh
					geometry={nodes.Object_6.geometry}
					material={materials.DefaultWhite}
				/>
				<mesh
					geometry={nodes.Object_7.geometry}
					material={materials["DefaultWhite_ai.png"]}
				/>
				<mesh
					geometry={nodes.Object_8.geometry}
					material={materials["DefaultWhite_alt.png"]}
				/>
				<mesh
					geometry={nodes.Object_9.geometry}
					material={materials["DefaultWhite_asi.png"]}
				/>
				<mesh
					geometry={nodes.Object_10.geometry}
					material={materials["DefaultWhite_interior.png"]}
				/>
				<mesh
					geometry={nodes.Object_11.geometry}
					material={materials["DefaultWhite_panel.png"]}
				/>
				<mesh
					geometry={nodes.Object_12.geometry}
					material={materials["DefaultWhite_panel.png.001"]}
				/>
				<mesh
					geometry={nodes.Object_13.geometry}
					material={materials["DefaultWhite_tach.png"]}
				/>
				<mesh
					geometry={nodes.Object_14.geometry}
					material={materials["DefaultWhite_vsi.png"]}
				/>
				<mesh
					geometry={nodes.Object_15.geometry}
					material={materials.transparent}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/airplane.glb");
