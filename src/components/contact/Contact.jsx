import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "./contact.css";
import ContactSvg from "./ContactSvg";

const listVariant = {
	initial: {
		x: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.2,
		},
	},
};

const Contact = () => {
	const form = useRef();
	const ref = useRef();
	const isInView = useInView(ref, { margin: "-200px" });

	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				{
					publicKey: import.meta.env.VITE_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					setSuccess(true);
					setError(false);
					// show snackbar
					toast.success("Your Message Sent Successfully!");
				},
				(error) => {
					setError(true);
					setSuccess(false);
					toast.error("Something Went Wrong!");
				}
			);
	};

	return (
		<div className="contact" onSubmit={sendEmail} ref={ref}>
			<div className="contactSection">
				<motion.form
					variants={listVariant}
					animate={isInView ? "animate" : "initial"}
					action=""
					ref={form}
				>
					<h1 className="contactTitle">Let&apos;s Keep in Touch</h1>
					<motion.div className="formItem" variants={listVariant}>
						<label htmlFor="name">Name</label>

						<input
							id="name"
							type="text"
							name="to_name"
							placeholder="John Doe"
						/>
					</motion.div>
					<motion.div className="formItem" variants={listVariant}>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="text"
							name="from_name"
							placeholder="John@gmail.com"
						/>
					</motion.div>
					<motion.div className="formItem" variants={listVariant}>
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							id="message"
							rows={10}
							placeholder="Write your message..."
						/>
					</motion.div>
					<motion.button className="formButton" variants={listVariant}>
						Send
					</motion.button>

					{/* {success ? <ToastContainer /> : ""} */}
					{error && <span>Something went wrong!</span>}
				</motion.form>
			</div>

			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition={Bounce}
			/>

			<div className="contactSection">
				<ContactSvg />
			</div>
		</div>
	);
};

export default Contact;
