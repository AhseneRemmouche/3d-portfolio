import { useEffect, useRef } from "react";
import "./portfolio.css";
import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";

const projects = [
	{
		id: 1,
		img: "images/p1.jpg",
		title: "Full Stack Blog Application",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
		link: "/",
	},
	{
		id: 2,
		img: "images/p2.jpg",
		title: "School Management System",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
		link: "/",
	},
	{
		id: 3,
		img: "images/p3.jpg",
		title: "Real-time Chat Application",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
		link: "/",
	},
	{
		id: 4,
		img: "images/p4.jpg",
		title: "Social Media Project",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
		link: "/",
	},
	{
		id: 5,
		img: "images/p5.jpg",
		title: "Animated Portfolio Website",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
		link: "/",
	},
];

const Project = ({ item }) => {
	return (
		<div className="pItem">
			<div className="pImg">
				<img src={item.img} />
			</div>
			<div className="pText">
				<h1>{item.title}</h1>
				<p>i{item.desc}</p>
				<a href={item.link}>
					<button>View Project</button>
				</a>
			</div>
		</div>
	);
};

const ProjectsList = () => {
	return projects.map((item) => <Project key={item.id} item={item} />);
};
const Portfolio = () => {
	const [containerDistance, setContainerDistance] = useState(0);

	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setContainerDistance(rect.left)
		}
	}, []);

	const { scrollYProgress } = useScroll({ target: ref });

	const xTranslate = useTransform(
		scrollYProgress,
		[0, 1],
		[0, -window.innerWidth * projects.length]
	);

	return (
		<div className="portfolio" ref={ref}>
			<motion.div className="pList" style={{ x: xTranslate }}>
				<div
					className="empty"
					style={{ with: window.innerWidth - containerDistance }}
				/>
				<ProjectsList />
			</motion.div>
			<section />
			<section />
			<section />
			<section />
			<section />
		</div>
	);
};

export default Portfolio;
