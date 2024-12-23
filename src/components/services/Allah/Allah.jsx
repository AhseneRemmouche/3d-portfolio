/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 Allah.glb 
Author: TAREK SAAD (https://sketchfab.com/Tarek.Saad.Khalifa)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/allah-glglalh-03b969e3a0d04077a073dac7ce11aa1f
Title: ALLAH GLGLALH - الله جل جلاله
*/

import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Allah(props) {
	const group = React.useRef();
	const { nodes, materials, animations } = useGLTF("images/Allah/Allah.glb");
	const { actions } = useAnimations(animations, group);
	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
					<group name="fbxfbx" rotation={[Math.PI / 2, 0, 0]}>
						<group name="Object_2">
							<group name="RootNode">
								<group
									name="Camera_1"
									position={[1283.379, 570.613, 489.201]}
									rotation={[Math.PI, 0.329, 2.99]}
								/>
								<group
									name="Extrude_1"
									position={[-0.589, 400.151, -10]}
									scale={[1, 1, 2]}
								>
									<mesh
										name="Extrude_1_Mat1_0"
										geometry={nodes.Extrude_1_Mat1_0.geometry}
										material={materials["Mat.1"]}
									/>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("images/Allah/Allah.glb");