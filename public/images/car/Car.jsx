import React from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export function Model(props) {
	const { scene } = useGLTF("/car.glb");
	const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
	const { nodes, materials } = useGraph(clone);
	return (
		<group {...props} dispose={null}>
			<group scale={0.01}>
				<primitive object={nodes._rootJoint} />
				<primitive object={nodes._rootJoint_1} />
				<primitive object={nodes._rootJoint_2} />
				<primitive object={nodes._rootJoint_3} />
				<primitive object={nodes._rootJoint_4} />
				<primitive object={nodes._rootJoint_5} />
				<primitive object={nodes._rootJoint_6} />
				<primitive object={nodes._rootJoint_7} />
				<primitive object={nodes._rootJoint_8} />
				<primitive object={nodes._rootJoint_9} />
				<primitive object={nodes._rootJoint_10} />
				<primitive object={nodes._rootJoint_11} />
				<primitive object={nodes._rootJoint_12} />
				<primitive object={nodes._rootJoint_13} />
				<primitive object={nodes._rootJoint_14} />
				<primitive object={nodes._rootJoint_15} />
				<primitive object={nodes._rootJoint_16} />
				<primitive object={nodes._rootJoint_17} />
				<primitive object={nodes._rootJoint_18} />
				<primitive object={nodes._rootJoint_19} />
				<primitive object={nodes._rootJoint_20} />
				<primitive object={nodes._rootJoint_21} />
				<primitive object={nodes._rootJoint_22} />
				<primitive object={nodes._rootJoint_23} />
				<primitive object={nodes._rootJoint_24} />
				<group position={[0, -8.504, 9.812]} scale={100}>
					<group position={[0.83, 0.331, -1.44]} rotation={[0, 0, 0.017]}>
						<mesh
							geometry={
								nodes
									.CalliperParking_Rear_L_Lamborghini_AventadorLP7504Superveloce_2015CalliperGloss_Material_0
									.geometry
							}
							material={
								materials.Lamborghini_AventadorLP7504Superveloce_2015CalliperGloss_Material
							}
							position={[0.012, 0.06, -0.168]}
							rotation={[Math.PI / 8, 0, 0]}
							scale={[0.6, 1, 1]}
						/>
					</group>
					<group
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					>
						<mesh
							geometry={
								nodes
									.CalliperParking_Rear_R_Lamborghini_AventadorLP7504Superveloce_2015CalliperGloss_Material_0
									.geometry
							}
							material={
								materials.Lamborghini_AventadorLP7504Superveloce_2015CalliperGloss_Material
							}
							position={[0.012, 0.06, 0.168]}
							rotation={[2.749, 0, -Math.PI]}
							scale={[-0.6, 1, 1]}
						/>
					</group>
					<mesh
						geometry={nodes.polySurface1203_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1204_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1205_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1206_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1207_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1208_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1209_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1210_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1211_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1212_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1213_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1214_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1215_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1216_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1217_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1218_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1219_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1220_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1221_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1222_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1223_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1224_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1225_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.853, 0.257, 1.108]}
						rotation={[-0.314, -0.008, 0.025]}
						scale={[1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1226_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1227_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1228_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1229_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1230_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1231_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1232_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1233_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1234_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1235_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1236_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1237_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1238_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1239_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1240_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1241_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1242_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1243_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1244_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1245_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1246_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1247_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1248_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.853, 0.257, 1.108]}
						rotation={[-0.314, 0.008, -0.025]}
						scale={[-1.05, 1, 1]}
					/>
					<mesh
						geometry={nodes.polySurface1249_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1250_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1251_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1252_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1253_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1254_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1255_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1256_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1257_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1258_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1259_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1260_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1261_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1262_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1263_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1264_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1265_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1266_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1267_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1268_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1269_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1270_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1271_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1272_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1273_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[0.844, 0.378, -1.297]}
						rotation={[2.827, 0.005, 3.125]}
						scale={[-1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1274_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1275_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1276_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1277_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1278_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1279_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1280_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1281_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1282_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1283_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1284_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1285_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1286_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1287_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1288_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1289_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1290_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1291_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1292_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1293_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1294_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1295_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1296_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1297_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={nodes.polySurface1298_CALIPERS___0.geometry}
						material={materials.CALIPERS}
						position={[-0.844, 0.378, -1.297]}
						rotation={[2.827, -0.005, -3.125]}
						scale={[1.05, 1.15, 1.15]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface285_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface286_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface267_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface268_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface287_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface288_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface270_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface269_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface284_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface283_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface282_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface281_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface280_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface279_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface277_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface276_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface275_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface278_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface274_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface273_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface271_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface272_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface572_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface571_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface573_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface574_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface575_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface570_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface567_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface568_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface587_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface586_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface569_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface588_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface582_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface584_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface585_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface583_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface581_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface580_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface579_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface578_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface577_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface576_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1178_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1177_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1176_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1175_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1169_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1179_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1180_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1170_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1181_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1182_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1184_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1183_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1185_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1186_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1187_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1188_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1173_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1174_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1172_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1171_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1189_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1190_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface884_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface883_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface882_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface881_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface868_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface885_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface886_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface887_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface888_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface869_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface876_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface878_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface877_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface875_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface874_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface873_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface879_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface880_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface872_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface871_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface870_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface889_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface300_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface299_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface290_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface289_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface298_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface296_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface297_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface295_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface294_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface293_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface292_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface291_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.845, 0.309, 1.26]}
						rotation={[0, 0, 0.026]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface599_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface598_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface597_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface589_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface600_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface591_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface590_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface592_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface593_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface594_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface595_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface596_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.845, 0.309, 1.26]}
						rotation={[Math.PI, 0, -3.115]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface900_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1202_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1201_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface901_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1197_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1196_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1195_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1194_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1193_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1192_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1191_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1200_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1199_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface1198_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[-0.83, 0.331, -1.44]}
						rotation={[Math.PI, 0, -3.124]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface894_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface895_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface896_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface897_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface898_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface899_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface890_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface891_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface892_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
					<mesh
						geometry={
							nodes
								.polySurface893_Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material_0
								.geometry
						}
						material={
							materials.Lamborghini_AventadorLP7504Superveloce_2015_Wheel1A_3D_3DWheel1A_Material
						}
						position={[0.83, 0.331, -1.44]}
						rotation={[0, 0, 0.017]}
					/>
				</group>
				<primitive object={nodes._rootJoint_26} />
				<primitive object={nodes._rootJoint_27} />
				<primitive object={nodes._rootJoint_25} />
			</group>
		</group>
	);
}

useGLTF.preload("/car.glb");
