import "./portfolio.css";

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
		<div>
			<title>static content</title>
			<div>
				<img src={item.img} />
			</div>
			<div>
				<h2>item.title</h2>
				<p>item.desc</p>
				<a href={item.link}>
					<button>View Project</button>
				</a>
			</div>
		</div>
	);
};

const ProjectsList = () => {
	return(projects.map((item) => <Project key={item.id} item={item} />));
};
const Portfolio = () => {
	return (
		<div className="">
			<h2>Projects List</h2>
			<ProjectsList />
		</div>
	);
};

export default Portfolio;
