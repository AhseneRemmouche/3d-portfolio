import "./hero.css";
import Speech from "./speech/Speech";

const Hero = () => {
	return (
		<div className="hero">
			{/* LEFT SECTION */}
			<div className="heroSection left">
				{/* TITLE */}
				<h1 className="heroTitle">
					Hi There, <br />
					<span>I&apos;am Ahsene!</span>
				</h1>

				{/* AWARDS */}
				<div className="awards">
					<h2>
						Top Rated <br />
						Web Developer
					</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
					<div className="awardList">
						<img src="../../../public/images/award1.png" alt="award1" />
						<img src="../../../public/images/award2.png" alt="award2" />
						<img src="../../../public/images/award3.png" alt="award3" />
					</div>
				</div>

				{/* SCROLL SVG */}
				<a href="#services" className="scroll">
					<svg
						
						width="50px"
						height="50px"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
							stroke="white"
							strokeWidth="1"
						/>
						<path
							d="M12 5V8"
							stroke="white"
							strokeWidth="1"
							strokeLinecap="round"
						/>
					</svg>
				</a>
			</div>
			{/* RIGHT SECTION */}
			<div className="heroSection right">
				{/* FOLLOW */}
				<div className="follow">
					<a href="/">
						<img src="../images/facebook.png" alt="" />
					</a>
					<a href="/">
						<img src="/images/instagram.png" alt="" />
					</a>
					<a href="/">
						<img src="/images/youtube.png" alt="" />
					</a>
					<div className="followTextContainer">
						<div className="followText">FOLLOW ME</div>
					</div>
				</div>
				{/* SPEECH */}
				<div className="speech">
					<Speech />
				</div>
				{/* CERTIFICATE */}
				<div className="certificate">
					<img src="/images/certificate.png" alt="" />
					
					Professional
					<br />
					Web Developer
				</div>
				{/* CONTACT LINK */}
				<a href="/#contact" className="contactLink">
					<div className="contactButton">
						<svg viewBox="0 0 200 200" width="100" height="100">
							<circle cx="100" cy="100" r="90" fill="pink" />
							<path
								id="innerCirclePath"
								fill="none"
								d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
							/>
							<text className="circleText">
								<textPath href="#innerCirclePath">Hire Now •</textPath>
							</text>
							<text className="circleText">
								<textPath href="#innerCirclePath" startOffset="47%">
									Contact Me •
								</textPath>
							</text>
						</svg>
						<div className="arrow">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="50"
								height="50"
								fill="none"
								stroke="black"
								strokeWidth="2"
							>
								<line x1="6" y1="18" x2="18" y2="6" />
								<polyline points="9 6 18 6 18 15" />
							</svg>
						</div>
					</div>
				</a>
			</div>
			<div className="bg">
				{/*  3d  */}
				<div className="heroImg">
					<img src="/images/hero7.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
